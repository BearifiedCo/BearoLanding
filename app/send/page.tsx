'use client'

import { useState } from 'react'
import { SendForm } from '@/components/payments/SendForm'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { useToast } from '@/lib/hooks/useToast'
import { ToastContainer } from '@/components/ui/Toast'
import { CheckCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function SendPage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [txHash, setTxHash] = useState('')
  const { toasts, removeToast, success } = useToast()
  const router = useRouter()

  const handleSubmit = (data: any) => {
    // Simulate successful transaction
    const mockHash =
      data.chain === 'apechain'
        ? '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'
        : '5JqRn8KhXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    
    setTxHash(mockHash)
    setShowSuccessModal(true)
    success('Transaction submitted successfully!')
  }

  return (
    <>
      <div className="mx-auto max-w-2xl px-6 py-8 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Send Payment</h1>
          <p className="mt-2 text-sm text-gray-600">
            Send crypto payments on ApeChain or Solana
          </p>
        </div>

        {/* Send Form */}
        <SendForm onSubmit={handleSubmit} />
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Transaction Sent!"
        size="md"
      >
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            Payment Sent Successfully!
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Your transaction has been submitted to the network and is being
            processed.
          </p>
          <div className="mt-4 rounded-lg bg-gray-50 p-3">
            <p className="text-xs text-gray-600">Transaction Hash</p>
            <p className="mt-1 break-all font-mono text-xs text-gray-900">
              {txHash}
            </p>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setShowSuccessModal(false)}
          >
            Close
          </Button>
          <Button
            className="w-full"
            onClick={() => {
              setShowSuccessModal(false)
              router.push('/transactions')
            }}
          >
            View Transactions
          </Button>
        </div>
      </Modal>

      {/* Toast Container */}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </>
  )
}

