'use client'

import { ChainType } from '@/types'
import { useWallet } from '@/contexts/WalletContext'
import { getChainConfig } from '@/lib/chains/config'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils/helpers'

export function ChainSelector() {
  const { activeChain, switchChain, isConnected } = useWallet()

  if (!isConnected || !activeChain) {
    return null
  }

  const currentChain = getChainConfig(activeChain)
  const otherChain: ChainType = activeChain === 'apechain' ? 'solana' : 'apechain'
  const otherChainConfig = getChainConfig(otherChain)

  return (
    <div className="relative group">
      <button
        className={cn(
          'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
          'border-2 hover:bg-gray-50'
        )}
        style={{ borderColor: currentChain.color.primary }}
      >
        <div className="flex items-center gap-2">
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: currentChain.color.primary }}
          />
          <span>{currentChain.displayName}</span>
        </div>
        <ChevronDown className="h-4 w-4" />
      </button>

      {/* Dropdown */}
      <div className="invisible absolute right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
        <button
          onClick={() => switchChain(otherChain)}
          className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: otherChainConfig.color.primary }}
          />
          <span>{otherChainConfig.displayName}</span>
        </button>
      </div>
    </div>
  )
}

