'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Tabs } from '@/components/ui/Tabs'
import { Input } from '@/components/ui/Input'
import { useWallet } from '@/contexts/WalletContext'
import { getChainConfig } from '@/lib/chains/config'
import { copyToClipboard } from '@/lib/utils/format'
import { Copy, Check, Share2, QrCode } from 'lucide-react'

export function ReceiveCard() {
  const { address, activeChain, switchChain } = useWallet()
  const [copied, setCopied] = useState(false)
  const [requestAmount, setRequestAmount] = useState('')

  if (!address || !activeChain) {
    return (
      <Card>
        <div className="text-center py-12">
          <p className="text-gray-600">Connect your wallet to receive payments</p>
        </div>
      </Card>
    )
  }

  const apechainConfig = getChainConfig('apechain')
  const solanaConfig = getChainConfig('solana')

  const handleCopy = async () => {
    try {
      await copyToClipboard(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Wallet Address',
          text: `Send payments to: ${address}`,
        })
      } catch (error) {
        console.error('Failed to share:', error)
      }
    }
  }

  const tabs = [
    {
      id: 'apechain',
      label: apechainConfig.displayName,
      content: (
        <div className="space-y-6">
          {/* QR Code Placeholder */}
          <div className="flex justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
              <div className="text-center">
                <QrCode className="mx-auto h-16 w-16 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">QR Code</p>
                <p className="text-xs text-gray-500">for ApeChain</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your ApeChain Address
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={address}
                readOnly
                className="flex-1 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 font-mono text-sm"
              />
              <Button
                variant="outline"
                icon={copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                onClick={handleCopy}
              >
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'solana',
      label: solanaConfig.displayName,
      content: (
        <div className="space-y-6">
          {/* QR Code Placeholder */}
          <div className="flex justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-solana-primary/10 to-solana-secondary/10">
              <div className="text-center">
                <QrCode className="mx-auto h-16 w-16 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">QR Code</p>
                <p className="text-xs text-gray-500">for Solana</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Solana Address
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={address}
                readOnly
                className="flex-1 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 font-mono text-sm"
              />
              <Button
                variant="outline"
                icon={copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                onClick={handleCopy}
              >
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <Card>
      <Tabs 
        tabs={tabs} 
        defaultTab={activeChain} 
        onChange={(tabId) => switchChain(tabId as 'apechain' | 'solana')}
      />

      {/* Request Amount (Optional) */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <Input
          label="Request Specific Amount (Optional)"
          type="text"
          placeholder="0.00"
          value={requestAmount}
          onChange={(e) => setRequestAmount(e.target.value)}
          helperText="Generate a payment link with a specific amount"
        />
        
        {typeof window !== 'undefined' && 'share' in navigator && (
          <Button
            variant="outline"
            fullWidth
            className="mt-4"
            icon={<Share2 className="h-4 w-4" />}
            onClick={handleShare}
          >
            Share Payment Link
          </Button>
        )}
      </div>
    </Card>
  )
}

