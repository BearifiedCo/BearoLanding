'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from 'react'
import type { ChainType, WalletState } from '@/types'
import { STORAGE_KEYS } from '@/lib/utils/constants'

interface WalletContextType extends WalletState {
  connect: (chain: ChainType) => Promise<void>
  disconnect: () => void
  switchChain: (chain: ChainType) => Promise<void>
  updateBalance: (chain: ChainType, balance: number) => void
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<WalletState>({
    isConnected: false,
    address: null,
    activeChain: null,
    balance: {
      apechain: 0,
      solana: 0,
    },
  })

  // Load saved chain preference
  useEffect(() => {
    const savedChain = localStorage.getItem(STORAGE_KEYS.ACTIVE_CHAIN)
    if (savedChain && (savedChain === 'apechain' || savedChain === 'solana')) {
      setState((prev) => ({ ...prev, activeChain: savedChain }))
    }
  }, [])

  const connect = useCallback(async (chain: ChainType) => {
    try {
      // Simulate wallet connection
      // In production, this would integrate with MetaMask, Phantom, etc.
      const mockAddress =
        chain === 'apechain'
          ? '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb'
          : '9fKBMZ3qW8aRqDVuXhELnXqKvYK7j6RmZvFrDPxQwLkT'

      setState({
        isConnected: true,
        address: mockAddress,
        activeChain: chain,
        balance: {
          apechain: chain === 'apechain' ? 10.5 : 0,
          solana: chain === 'solana' ? 5.25 : 0,
        },
      })

      localStorage.setItem(STORAGE_KEYS.ACTIVE_CHAIN, chain)
    } catch (error) {
      console.error('Failed to connect wallet:', error)
      throw error
    }
  }, [])

  const disconnect = useCallback(() => {
    setState({
      isConnected: false,
      address: null,
      activeChain: null,
      balance: {
        apechain: 0,
        solana: 0,
      },
    })
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_CHAIN)
  }, [])

  const switchChain = useCallback(async (chain: ChainType) => {
    setState((prev) => ({
      ...prev,
      activeChain: chain,
    }))
    localStorage.setItem(STORAGE_KEYS.ACTIVE_CHAIN, chain)
  }, [])

  const updateBalance = useCallback((chain: ChainType, balance: number) => {
    setState((prev) => ({
      ...prev,
      balance: {
        ...prev.balance,
        [chain]: balance,
      },
    }))
  }, [])

  return (
    <WalletContext.Provider
      value={{
        ...state,
        connect,
        disconnect,
        switchChain,
        updateBalance,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error('useWallet must be used within WalletProvider')
  }
  return context
}

