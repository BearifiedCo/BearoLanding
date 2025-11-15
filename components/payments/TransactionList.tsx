'use client'

import { Transaction } from '@/types'
import { TransactionItem } from './TransactionItem'
import { Spinner } from '@/components/ui/Spinner'

export interface TransactionListProps {
  transactions: Transaction[]
  isLoading?: boolean
  emptyMessage?: string
}

export function TransactionList({
  transactions,
  isLoading = false,
  emptyMessage = 'No transactions yet',
}: TransactionListProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner size="lg" />
      </div>
    )
  }

  if (transactions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="text-6xl mb-4">📭</div>
        <p className="text-gray-600">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  )
}

