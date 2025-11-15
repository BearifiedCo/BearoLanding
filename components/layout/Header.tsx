'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils/helpers'
import { Button } from '@/components/ui/Button'
import { WalletButton } from '@/components/wallet/WalletButton'
import { APP_NAME } from '@/lib/utils/constants'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Send', href: '/send' },
  { name: 'Receive', href: '/receive' },
  { name: 'Transactions', href: '/transactions' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl">🐻</div>
          <span className="text-xl font-bold text-bear-brown">{APP_NAME}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-bear-brown',
                pathname === item.href
                  ? 'text-bear-brown'
                  : 'text-gray-600'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Wallet Button */}
        <div className="hidden lg:block">
          <WalletButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block rounded-md px-3 py-2 text-base font-medium',
                  pathname === item.href
                    ? 'bg-bear-brown/10 text-bear-brown'
                    : 'text-gray-600 hover:bg-gray-50'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <WalletButton />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

