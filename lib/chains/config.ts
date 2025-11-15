import type { ChainConfig, ChainType } from '@/types'

export const APECHAIN_CONFIG: ChainConfig = {
  id: 'apechain',
  name: 'ApeChain',
  displayName: 'ApeChain',
  logo: '/images/apechain-logo.svg',
  nativeCurrency: {
    name: 'ApeCoin',
    symbol: 'APE',
    decimals: 18,
  },
  rpcUrl: 'https://rpc.apechain.com',
  explorerUrl: 'https://explorer.apechain.com',
  color: {
    primary: '#FF6B00',
    secondary: '#FFE5D0',
  },
}

export const SOLANA_CONFIG: ChainConfig = {
  id: 'solana',
  name: 'Solana',
  displayName: 'Solana',
  logo: '/images/solana-logo.svg',
  nativeCurrency: {
    name: 'Solana',
    symbol: 'SOL',
    decimals: 9,
  },
  rpcUrl: 'https://api.mainnet-beta.solana.com',
  explorerUrl: 'https://explorer.solana.com',
  color: {
    primary: '#14F195',
    secondary: '#9945FF',
  },
}

export const CHAIN_CONFIGS: Record<ChainType, ChainConfig> = {
  apechain: APECHAIN_CONFIG,
  solana: SOLANA_CONFIG,
}

export function getChainConfig(chain: ChainType): ChainConfig {
  return CHAIN_CONFIGS[chain]
}

export function getExplorerUrl(
  chain: ChainType,
  type: 'tx' | 'address',
  value: string
): string {
  const config = getChainConfig(chain)
  return `${config.explorerUrl}/${type}/${value}`
}

