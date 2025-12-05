import type { Metadata } from 'next'
import { DM_Sans, Geist, Geist_Mono, Syne } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WalletProvider } from '@/contexts/WalletContext'
import { APP_NAME, APP_DESCRIPTION } from '@/lib/utils/constants'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--dm-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--geist-mono',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--geist',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--syne',
})

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${dmSans.variable} ${syne.variable} ${geistMono.variable} ${geist.variable}`}>
        <WalletProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </WalletProvider>
      </body>
    </html>
  )
}

