'use client'

import { ReceiveCard } from '@/components/payments/ReceiveCard'
import { useWallet } from '@/contexts/WalletContext'
import { Card } from '@/components/ui/Card'

export default function ReceivePage() {
  const { isConnected } = useWallet()

  return (
    <div className="mx-auto max-w-2xl px-6 py-8 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Receive Payment</h1>
        <p className="mt-2 text-sm text-gray-600">
          Share your address or QR code to receive payments
        </p>
      </div>

      {/* Receive Card */}
      {isConnected ? (
        <ReceiveCard />
      ) : (
        <Card>
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-6xl mb-4">🐻</div>
            <h2 className="text-2xl font-bold text-gray-900">
              Connect Your Wallet
            </h2>
            <p className="mt-2 text-gray-600">
              Connect your wallet to receive payments
            </p>
          </div>
        </Card>
      )}
    </div>
  )
}

