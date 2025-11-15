export const APP_NAME = 'Bearo Payments'
export const APP_DESCRIPTION = 'Multi-chain payments made easy'

export const SUPPORTED_CHAINS = ['apechain', 'solana'] as const

export const TRANSACTION_SPEEDS = {
  fast: { label: 'Fast', multiplier: 1.5 },
  standard: { label: 'Standard', multiplier: 1.0 },
  economy: { label: 'Economy', multiplier: 0.8 },
} as const

export const POLLING_INTERVAL = {
  BALANCE: 30000, // 30 seconds
  TRANSACTIONS: 15000, // 15 seconds
  PRICE: 60000, // 1 minute
}

export const DECIMAL_PLACES = {
  TOKEN: 6,
  USD: 2,
}

export const MAX_TRANSACTION_HISTORY = 100

export const STORAGE_KEYS = {
  ACTIVE_CHAIN: 'bearo_active_chain',
  THEME: 'bearo_theme',
  WALLET_PREFERENCE: 'bearo_wallet_preference',
}

