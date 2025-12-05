'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { useWallet } from '@/contexts/WalletContext'
import { validatePaymentForm, sanitizeAmount } from '@/lib/utils/validation'
import { formatUSD } from '@/lib/utils/format'
import { getChainConfig } from '@/lib/chains/config'
import type { ChainType } from '@/types'
import { AlertCircle, Send } from 'lucide-react'

export interface SendFormProps {
  onSubmit?: (data: {
    chain: ChainType
    recipient: string
    amount: string
    memo: string
    speed: 'fast' | 'standard' | 'economy'
  }) => void
}

export function SendForm({ onSubmit }: SendFormProps) {
  const { activeChain, balance } = useWallet()
  const [formData, setFormData] = useState({
    recipient: '',
    amount: '',
    memo: '',
    speed: 'standard' as 'fast' | 'standard' | 'economy',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const chainConfig = activeChain ? getChainConfig(activeChain) : null
  const currentBalance = activeChain ? balance[activeChain] : 0

  const mockUsdPrice = activeChain === 'apechain' ? 4.2 : 145.0
  const usdValue = parseFloat(formData.amount || '0') * mockUsdPrice
  const estimatedFee = parseFloat(formData.amount || '0') * 0.001 // 0.1% fee

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = sanitizeAmount(e.target.value)
    setFormData({ ...formData, amount: sanitized })
    if (errors.amount) {
      setErrors({ ...errors, amount: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!activeChain) {
      setErrors({ chain: 'Please connect your wallet first' })
      return
    }

    const validation = validatePaymentForm({
      chain: activeChain,
      recipient: formData.recipient,
      amount: formData.amount,
      balance: currentBalance,
    })

    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate transaction
      onSubmit?.({
        chain: activeChain,
        ...formData,
      })
      // Reset form
      setFormData({
        recipient: '',
        amount: '',
        memo: '',
        speed: 'standard',
      })
      setErrors({})
    } catch (error) {
      setErrors({ submit: 'Transaction failed. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!activeChain || !chainConfig) {
    return (
      <Card>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <AlertCircle className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900">
            Wallet Not Connected
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Please connect your wallet to send payments
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipient */}
        <Input
          label="Recipient Address"
          placeholder={`Enter ${chainConfig.displayName} address`}
          value={formData.recipient}
          onChange={(e) =>
            setFormData({ ...formData, recipient: e.target.value })
          }
          error={errors.recipient}
        />

        {/* Amount */}
        <div>
          <Input
            label="Amount"
            type="text"
            placeholder="0.00"
            value={formData.amount}
            onChange={handleAmountChange}
            error={errors.amount}
            rightIcon={
              <span className="text-sm font-medium text-gray-600">
                {chainConfig.nativeCurrency.symbol}
              </span>
            }
          />
          {formData.amount && !errors.amount && (
            <p className="mt-1 text-sm text-gray-600">
              ≈ {formatUSD(usdValue)}
            </p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            Balance: {currentBalance.toFixed(6)} {chainConfig.nativeCurrency.symbol}
          </p>
        </div>

        {/* Memo */}
        <Input
          label="Memo (Optional)"
          placeholder="Add a note..."
          value={formData.memo}
          onChange={(e) => setFormData({ ...formData, memo: e.target.value })}
          helperText="This message will be included with your transaction"
        />

        {/* Transaction Speed */}
        <Select
          label="Transaction Speed"
          value={formData.speed}
          onChange={(e) =>
            setFormData({
              ...formData,
              speed: e.target.value as 'fast' | 'standard' | 'economy',
            })
          }
          options={[
            { value: 'economy', label: 'Economy (Lower fee)' },
            { value: 'standard', label: 'Standard (Recommended)' },
            { value: 'fast', label: 'Fast (Higher fee)' },
          ]}
        />

        {/* Summary */}
        <div className="rounded-lg bg-gray-50 p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Amount</span>
            <span className="font-medium">
              {formData.amount || '0'} {chainConfig.nativeCurrency.symbol}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Estimated Fee</span>
            <span className="font-medium">
              {estimatedFee.toFixed(6)} {chainConfig.nativeCurrency.symbol}
            </span>
          </div>
          <div className="border-t border-gray-200 pt-2 flex justify-between">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="font-semibold text-gray-900">
              {(parseFloat(formData.amount || '0') + estimatedFee).toFixed(6)}{' '}
              {chainConfig.nativeCurrency.symbol}
            </span>
          </div>
        </div>

        {errors.submit && (
          <p className="text-sm text-red-600">{errors.submit}</p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full"
          isLoading={isSubmitting}
        >
          <Send className="h-5 w-5" />
          {isSubmitting ? 'Sending...' : 'Send Payment'}
        </Button>
      </form>
    </Card>
  )
}

