import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Wallet } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-bear-cream via-white to-bear-honey/20 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full bg-bear-brown/10 px-4 py-2 text-sm font-medium text-bear-brown">
          <span className="mr-2">🐻</span>
          Multi-Chain Payments Platform
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Multi-Chain Payments
          <br />
          <span className="text-bear-brown">Made Easy</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Send and receive payments seamlessly on ApeChain and Solana. Fast,
          secure, and bear-y simple to use. No complexity, just results.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="/dashboard">
            <Button size="lg" icon={<Wallet className="h-5 w-5" />}>
              Get Started
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            Learn More
          </Button>
        </div>

        {/* Supported Chains */}
        <div className="mt-16 flex items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-apechain-secondary text-3xl">
              🦍
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">ApeChain</p>
          </div>
          <div className="text-2xl text-gray-400">+</div>
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-solana-primary/20 to-solana-secondary/20 text-3xl">
              ◎
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">Solana</p>
          </div>
        </div>
      </div>
    </section>
  )
}

