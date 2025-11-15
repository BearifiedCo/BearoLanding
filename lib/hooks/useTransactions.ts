'use client'

import { useState, useEffect } from 'react'
import type { Transaction, ChainType } from '@/types'
import { generateMockTransactionHash } from '@/lib/utils/helpers'

// Mock transaction data
const generateMockTransactions = (count: number): Transaction[] => {
  const types: ('send' | 'receive')[] = ['send', 'receive']
  const chains: ChainType[] = ['apechain', 'solana']
  const statuses: ('pending' | 'confirmed' | 'failed')[] = [
    'confirmed',
    'confirmed',
    'confirmed',
    'confirmed',
    'pending',
  ]

  return Array.from({ length: count }, (_, i) => {
    const chain = chains[Math.floor(Math.random() * chains.length)]
    const type = types[Math.floor(Math.random() * types.length)]

    return {
      id: `tx-${i}`,
      hash: generateMockTransactionHash(chain),
      chain,
      type,
      amount: parseFloat((Math.random() * 10).toFixed(4)),
      token: chain === 'apechain' ? 'APE' : 'SOL',
      from:
        chain === 'apechain'
          ? '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb'
          : '9fKBMZ3qW8aRqDVuXhELnXqKvYK7j6RmZvFrDPxQwLkT',
      to:
        chain === 'apechain'
          ? '0x8ba1f109551bD432803012645Ac136ddd64DBA72'
          : 'HN7cABqLq46Es1jh92dQQisAq662SmxELLLsHHe4YWrH',
      timestamp: Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000),
      status: statuses[Math.floor(Math.random() * statuses.length)],
      fee: parseFloat((Math.random() * 0.01).toFixed(6)),
      memo: Math.random() > 0.7 ? 'Payment for services' : undefined,
    }
  }).sort((a, b) => b.timestamp - a.timestamp)
}

export function useTransactions(chain?: ChainType) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setIsLoading(true)
    setTimeout(() => {
      const allTransactions = generateMockTransactions(20)
      const filtered = chain
        ? allTransactions.filter((tx) => tx.chain === chain)
        : allTransactions
      setTransactions(filtered)
      setIsLoading(false)
    }, 500)
  }, [chain])

  return { transactions, isLoading }
}

