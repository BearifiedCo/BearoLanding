'use client'

import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { useWallet } from '@/contexts/WalletContext'
import type { ChainType } from '@/types'
import { useState } from 'react'

export interface WalletModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const { connect } = useWallet()
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = async (chain: ChainType) => {
    try {
      setIsConnecting(true)
      await connect(chain)
      onClose()
    } catch (error) {
      console.error('Failed to connect:', error)
    } finally {
      setIsConnecting(false)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Connect Your Wallet"
      size="md"
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Choose a blockchain to connect your wallet
        </p>

        {/* ApeChain */}
        <button
          onClick={() => handleConnect('apechain')}
          disabled={isConnecting}
          className="flex w-full items-center gap-4 rounded-xl border-2 border-gray-200 p-4 transition-all hover:border-apechain-primary hover:bg-apechain-secondary/20 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-apechain-secondary">
            <span className="text-2xl">🦍</span>
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-gray-900">ApeChain</h3>
            <p className="text-sm text-gray-600">EVM-compatible chain</p>
          </div>
          <div className="text-sm font-medium text-apechain-primary">
            Connect →
          </div>
        </button>

        {/* Solana */}
        <button
          onClick={() => handleConnect('solana')}
          disabled={isConnecting}
          className="flex w-full items-center gap-4 rounded-xl border-2 border-gray-200 p-4 transition-all hover:border-solana-primary hover:bg-solana-primary/10 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-solana-primary to-solana-secondary">
            <span className="text-2xl">◎</span>
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-gray-900">Solana</h3>
            <p className="text-sm text-gray-600">High-speed blockchain</p>
          </div>
          <div className="text-sm font-medium text-solana-secondary">
            Connect →
          </div>
        </button>

        <p className="text-xs text-gray-500">
          By connecting your wallet, you agree to our Terms of Service and
          Privacy Policy.
        </p>
      </div>
    </Modal>
  )
}

