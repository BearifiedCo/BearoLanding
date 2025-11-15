import { HeroSection } from '@/components/features/HeroSection'
import { FeatureCard } from '@/components/features/FeatureCard'
import { ChainComparison } from '@/components/features/ChainComparison'
import { StatsSection } from '@/components/features/StatsSection'
import { Button } from '@/components/ui/Button'
import {
  Zap,
  Shield,
  Coins,
  Smartphone,
  TrendingUp,
  Users,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Lightning Fast',
    description:
      'Process transactions in seconds with our optimized multi-chain infrastructure.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Secure & Safe',
    description:
      'Your funds are protected with industry-leading security practices and encryption.',
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: 'Low Fees',
    description:
      'Save money with competitive transaction fees on both ApeChain and Solana.',
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Mobile Friendly',
    description:
      'Manage your payments anywhere with our fully responsive design.',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Real-time Tracking',
    description:
      'Monitor all your transactions with live updates and detailed history.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Easy Integration',
    description:
      'Simple wallet connection process compatible with popular Web3 wallets.',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Bearo Payments?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need for seamless multi-chain payments
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Chain Comparison */}
      <ChainComparison />

      {/* Stats */}
      <StatsSection />

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-bear-brown to-bear-forest py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-bear-cream">
            Join thousands of users already using Bearo Payments for their
            multi-chain transactions.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="secondary"
                icon={<ArrowRight className="h-5 w-5" />}
              >
                Launch App
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

