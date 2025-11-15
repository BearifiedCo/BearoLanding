'use client'

import { Transaction } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { formatAddress, formatAmount, formatTimestamp } from '@/lib/utils/format'
import { getChainConfig, getExplorerUrl } from '@/lib/chains/config'
import { ArrowUpRight, ArrowDownLeft, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils/helpers'

export interface TransactionItemProps {
  transaction: Transaction
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  const chainConfig = getChainConfig(transaction.chain)
  const isSend = transaction.type === 'send'

  const statusColors = {
    confirmed: 'success',
    pending: 'warning',
    failed: 'error',
  } as const

  return (
    <div className="group rounded-lg border border-gray-200 p-4 transition-all hover:border-gray-300 hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        {/* Icon & Type */}
        <div className="flex items-start gap-3">
          <div
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full',
              isSend ? 'bg-red-50' : 'bg-green-50'
            )}
          >
            {isSend ? (
              <ArrowUpRight className="h-5 w-5 text-red-600" />
            ) : (
              <ArrowDownLeft className="h-5 w-5 text-green-600" />
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className="font-medium text-gray-900">
                {isSend ? 'Sent' : 'Received'}
              </p>
              <Badge variant={statusColors[transaction.status]} size="sm">
                {transaction.status}
              </Badge>
            </div>

            <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: chainConfig.color.primary }}
              />
              <span>{chainConfig.displayName}</span>
              <span>•</span>
              <span>{formatTimestamp(transaction.timestamp)}</span>
            </div>

            {transaction.memo && (
              <p className="mt-1 text-sm text-gray-500">{transaction.memo}</p>
            )}

            <div className="mt-2 flex items-center gap-2">
              <p className="font-mono text-xs text-gray-500">
                {isSend ? 'To: ' : 'From: '}
                {formatAddress(isSend ? transaction.to : transaction.from, 6)}
              </p>
              <a
                href={getExplorerUrl(transaction.chain, 'tx', transaction.hash)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bear-brown opacity-0 transition-opacity group-hover:opacity-100"
              >
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Amount */}
        <div className="text-right">
          <p
            className={cn(
              'text-lg font-semibold',
              isSend ? 'text-red-600' : 'text-green-600'
            )}
          >
            {isSend ? '-' : '+'}
            {formatAmount(transaction.amount)}{' '}
            <span className="text-sm">{transaction.token}</span>
          </p>
          {transaction.fee && (
            <p className="mt-1 text-xs text-gray-500">
              Fee: {formatAmount(transaction.fee, 6)} {transaction.token}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

