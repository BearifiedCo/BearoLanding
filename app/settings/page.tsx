'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { useWallet } from '@/contexts/WalletContext'
import { formatAddress } from '@/lib/utils/format'
import { User, Bell, Shield, Wallet, Save } from 'lucide-react'

export default function SettingsPage() {
  const { isConnected, address, disconnect } = useWallet()
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [language, setLanguage] = useState('en')

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
              Connect your wallet to access settings
            </p>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-sm text-gray-600">
          Manage your account preferences and wallet settings
        </p>
      </div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <Card>
          <div className="flex items-center gap-2 mb-6">
            <User className="h-5 w-5 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
          </div>
          <div className="space-y-4">
            <Input
              label="Display Name"
              placeholder="Enter your name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <Input
              label="Email (Optional)"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText="For notifications and updates"
            />
            <Button icon={<Save className="h-4 w-4" />}>Save Profile</Button>
          </div>
        </Card>

        {/* Wallet Management */}
        <Card>
          <div className="flex items-center gap-2 mb-6">
            <Wallet className="h-5 w-5 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-900">
              Wallet Management
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Connected Wallet
              </label>
              <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-gray-50 px-4 py-3">
                <span className="font-mono text-sm">
                  {formatAddress(address || '', 8)}
                </span>
                <Button variant="outline" size="sm" onClick={disconnect}>
                  Disconnect
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Preferences */}
        <Card>
          <div className="flex items-center gap-2 mb-6">
            <Bell className="h-5 w-5 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-900">
              Preferences
            </h2>
          </div>
          <div className="space-y-4">
            <Select
              label="Currency Display"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              options={[
                { value: 'USD', label: 'US Dollar (USD)' },
                { value: 'EUR', label: 'Euro (EUR)' },
                { value: 'GBP', label: 'British Pound (GBP)' },
              ]}
            />
            <Select
              label="Language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              options={[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Español' },
                { value: 'fr', label: 'Français' },
              ]}
            />
            <Button icon={<Save className="h-4 w-4" />}>
              Save Preferences
            </Button>
          </div>
        </Card>

        {/* Security */}
        <Card>
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-5 w-5 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-900">Security</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
              <div>
                <p className="font-medium text-gray-900">
                  Transaction Confirmations
                </p>
                <p className="text-sm text-gray-600">
                  Always confirm before sending transactions
                </p>
              </div>
              <div className="flex items-center">
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-bear-brown peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

