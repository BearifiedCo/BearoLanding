'use client'

import { useWallet } from '@/contexts/WalletContext'
import { getChainConfig } from '@/lib/chains/config'
import { formatAmount, formatUSD } from '@/lib/utils/format'
import { Card } from '@/components/ui/Card'
import { RefreshCw } from 'lucide-react'
import { useState } from 'react'

export function WalletBalance() {
  const { activeChain, balance } = useWallet()
  const [isRefreshing, setIsRefreshing] = useState(false)

  if (!activeChain) {
    return null
  }

  const chainConfig = getChainConfig(activeChain)
  const chainBalance = balance[activeChain]
  const usdValue = chainBalance * (activeChain === 'apechain' ? 4.2 : 145.0) // Mock prices

  const handleRefresh = async () => {
    setIsRefreshing(true)
    // Simulate refresh
    setTimeout(() => setIsRefreshing(false), 1000)
  }

  return (
    <Card variant="elevated">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Balance</p>
          <p className="mt-1 text-3xl font-bold text-gray-900">
            {formatAmount(chainBalance, chainConfig.nativeCurrency.decimals)}{' '}
            <span className="text-xl text-gray-600">
              {chainConfig.nativeCurrency.symbol}
            </span>
          </p>
          <p className="mt-1 text-sm text-gray-600">
            ≈ {formatUSD(usdValue)}
          </p>
        </div>
        <button
          onClick={handleRefresh}
          className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          disabled={isRefreshing}
        >
          <RefreshCw
            className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`}
          />
        </button>
      </div>
    </Card>
  )
}

