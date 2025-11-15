'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Select } from '@/components/ui/Select'
import { TransactionList } from '@/components/payments/TransactionList'
import { useWallet } from '@/contexts/WalletContext'
import { useTransactions } from '@/lib/hooks/useTransactions'
import { ChainSelector } from '@/components/wallet/ChainSelector'
import { Filter } from 'lucide-react'
import type { ChainType, Transaction } from '@/types'

export default function TransactionsPage() {
  const { isConnected, activeChain } = useWallet()
  const { transactions, isLoading } = useTransactions()
  const [typeFilter, setTypeFilter] = useState<'all' | 'send' | 'receive'>('all')
  const [statusFilter, setStatusFilter] = useState<'all' | 'confirmed' | 'pending' | 'failed'>('all')
  const [chainFilter, setChainFilter] = useState<'all' | ChainType>('all')

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
              Connect your wallet to view your transaction history
            </p>
          </div>
        </Card>
      </div>
    )
  }

  // Apply filters
  const filteredTransactions = transactions.filter((tx) => {
    if (typeFilter !== 'all' && tx.type !== typeFilter) return false
    if (statusFilter !== 'all' && tx.status !== statusFilter) return false
    if (chainFilter !== 'all' && tx.chain !== chainFilter) return false
    return true
  })

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
          <p className="mt-1 text-sm text-gray-600">
            View and manage all your transaction history
          </p>
        </div>
        <ChainSelector />
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Select
            label="Type"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value as any)}
            options={[
              { value: 'all', label: 'All Types' },
              { value: 'send', label: 'Sent' },
              { value: 'receive', label: 'Received' },
            ]}
          />
          <Select
            label="Status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            options={[
              { value: 'all', label: 'All Statuses' },
              { value: 'confirmed', label: 'Confirmed' },
              { value: 'pending', label: 'Pending' },
              { value: 'failed', label: 'Failed' },
            ]}
          />
          <Select
            label="Chain"
            value={chainFilter}
            onChange={(e) => setChainFilter(e.target.value as any)}
            options={[
              { value: 'all', label: 'All Chains' },
              { value: 'apechain', label: 'ApeChain' },
              { value: 'solana', label: 'Solana' },
            ]}
          />
        </div>
      </Card>

      {/* Transaction List */}
      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            {filteredTransactions.length} Transaction
            {filteredTransactions.length !== 1 ? 's' : ''}
          </h2>
        </div>
        <TransactionList
          transactions={filteredTransactions}
          isLoading={isLoading}
        />
      </Card>
    </div>
  )
}

