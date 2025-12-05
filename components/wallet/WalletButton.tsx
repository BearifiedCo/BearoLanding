'use client'

import { useState } from 'react'
import { Wallet, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { WalletModal } from './WalletModal'
import { useWallet } from '@/contexts/WalletContext'
import { formatAddress } from '@/lib/utils/format'

export function WalletButton() {
  const { isConnected, address, disconnect } = useWallet()
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <div className="hidden rounded-lg bg-bear-cream px-3 py-2 font-mono text-sm text-bear-brown sm:block">
          {formatAddress(address)}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={disconnect}
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Disconnect</span>
        </Button>
      </div>
    )
  }

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>
        <Wallet className="h-4 w-4" />
        Connect Wallet
      </Button>
      <WalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

