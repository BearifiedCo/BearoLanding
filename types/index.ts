export type ChainType = 'apechain' | 'solana'

export interface ChainConfig {
  id: ChainType
  name: string
  displayName: string
  logo: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrl: string
  explorerUrl: string
  color: {
    primary: string
    secondary: string
  }
}

export interface WalletState {
  isConnected: boolean
  address: string | null
  activeChain: ChainType | null
  balance: {
    apechain: number
    solana: number
  }
}

export interface Transaction {
  id: string
  hash: string
  chain: ChainType
  type: 'send' | 'receive'
  amount: number
  token: string
  from: string
  to: string
  timestamp: number
  status: 'pending' | 'confirmed' | 'failed'
  fee?: number
  memo?: string
}

export interface TokenBalance {
  symbol: string
  amount: number
  usdValue: number
  decimals: number
}

export interface PaymentFormData {
  chain: ChainType
  recipient: string
  amount: string
  token: string
  memo?: string
  speed: 'fast' | 'standard' | 'economy'
}

