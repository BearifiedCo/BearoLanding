import type { ChainType } from '@/types'

export function isValidAddress(address: string, chain: ChainType): boolean {
  if (!address) return false

  if (chain === 'apechain') {
    // Ethereum-style address validation (ApeChain is EVM-compatible)
    return /^0x[a-fA-F0-9]{40}$/.test(address)
  } else if (chain === 'solana') {
    // Solana address validation (base58, typically 32-44 characters)
    return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address)
  }

  return false
}

export function isValidAmount(amount: string): boolean {
  if (!amount || amount === '0' || amount === '0.') return false
  const num = parseFloat(amount)
  return !isNaN(num) && num > 0 && isFinite(num)
}

export function isValidTransactionHash(hash: string, chain: ChainType): boolean {
  if (!hash) return false

  if (chain === 'apechain') {
    // Ethereum-style transaction hash
    return /^0x[a-fA-F0-9]{64}$/.test(hash)
  } else if (chain === 'solana') {
    // Solana transaction signature (base58, typically 88 characters)
    return /^[1-9A-HJ-NP-Za-km-z]{87,88}$/.test(hash)
  }

  return false
}

export function sanitizeAmount(input: string): string {
  // Remove any non-numeric characters except decimal point
  let sanitized = input.replace(/[^\d.]/g, '')

  // Ensure only one decimal point
  const parts = sanitized.split('.')
  if (parts.length > 2) {
    sanitized = parts[0] + '.' + parts.slice(1).join('')
  }

  return sanitized
}

export function validatePaymentForm(data: {
  chain: ChainType | null
  recipient: string
  amount: string
  balance: number
}): {
  isValid: boolean
  errors: {
    chain?: string
    recipient?: string
    amount?: string
  }
} {
  const errors: {
    chain?: string
    recipient?: string
    amount?: string
  } = {}

  if (!data.chain) {
    errors.chain = 'Please select a chain'
  }

  if (!data.recipient) {
    errors.recipient = 'Recipient address is required'
  } else if (data.chain && !isValidAddress(data.recipient, data.chain)) {
    errors.recipient = 'Invalid address for selected chain'
  }

  if (!data.amount) {
    errors.amount = 'Amount is required'
  } else if (!isValidAmount(data.amount)) {
    errors.amount = 'Invalid amount'
  } else {
    const amount = parseFloat(data.amount)
    if (amount > data.balance) {
      errors.amount = 'Insufficient balance'
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

