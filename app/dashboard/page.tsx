'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { WalletBalance } from '@/components/wallet/WalletBalance'
import { ChainSelector } from '@/components/wallet/ChainSelector'
import { TransactionList } from '@/components/payments/TransactionList'
import { useWallet } from '@/contexts/WalletContext'
import { useTransactions } from '@/lib/hooks/useTransactions'
import { getChainConfig } from '@/lib/chains/config'
import { formatUSD } from '@/lib/utils/format'
import { Send, Download, TrendingUp, TrendingDown, Activity } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const { isConnected, activeChain, balance } = useWallet()
  const { transactions, isLoading } = useTransactions(activeChain || undefined)

  if (!isConnected) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <Card>
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-6xl mb-4">🐻</div>
            <h2 className="text-2xl font-bold text-gray-900">
              Connect Your Wallet
            </h2>
            <p className="mt-2 text-gray-600">
              Connect your wallet to access your dashboard and manage payments
            </p>
          </div>
        </Card>
      </div>
    )
  }

  const recentTransactions = transactions.slice(0, 5)
  const totalSent = transactions
    .filter((tx) => tx.type === 'send')
    .reduce((sum, tx) => sum + tx.amount, 0)
  const totalReceived = transactions
    .filter((tx) => tx.type === 'receive')
    .reduce((sum, tx) => sum + tx.amount, 0)

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your multi-chain payments
          </p>
        </div>
        <ChainSelector />
      </div>

      {/* Balance & Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-3 mb-8">
        <div className="lg:col-span-2">
          <WalletBalance />
          <div className="mt-4 flex gap-3">
            <Link href="/send" className="flex-1">
              <Button fullWidth icon={<Send className="h-4 w-4" />}>
                Send
              </Button>
            </Link>
            <Link href="/receive" className="flex-1">
              <Button
                fullWidth
                variant="outline"
                icon={<Download className="h-4 w-4" />}
              >
                Receive
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="space-y-4">
          <Card padding="sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600">Total Sent</p>
                <p className="mt-1 text-xl font-bold text-gray-900">
                  {formatUSD(totalSent * 100)}
                </p>
              </div>
              <div className="rounded-lg bg-red-50 p-2">
                <TrendingUp className="h-5 w-5 text-red-600" />
              </div>
            </div>
          </Card>

          <Card padding="sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600">Total Received</p>
                <p className="mt-1 text-xl font-bold text-gray-900">
                  {formatUSD(totalReceived * 100)}
                </p>
              </div>
              <div className="rounded-lg bg-green-50 p-2">
                <TrendingDown className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </Card>

          <Card padding="sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600">Transactions</p>
                <p className="mt-1 text-xl font-bold text-gray-900">
                  {transactions.length}
                </p>
              </div>
              <div className="rounded-lg bg-blue-50 p-2">
                <Activity className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Transactions */}
      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Recent Transactions
          </h2>
          <Link href="/transactions">
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </Link>
        </div>
        <TransactionList
          transactions={recentTransactions}
          isLoading={isLoading}
          emptyMessage="No transactions yet. Start by sending or receiving payments!"
        />
      </Card>
    </div>
  )
}

