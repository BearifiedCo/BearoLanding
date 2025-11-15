import { HeroSection } from '@/components/features/HeroSection'
import { FeatureCard } from '@/components/features/FeatureCard'
import { StatsSection } from '@/components/features/StatsSection'
import { Button } from '@/components/ui/Button'
import {
  Zap,
  Shield,
  DollarSign,
  Smartphone,
  Clock,
  Users,
  ArrowRight,
  CreditCard,
  Globe,
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Instant Payments',
    description:
      'Send and receive money in seconds. No waiting, no delays. Just instant transfers.',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Bank-Level Security',
    description:
      'Your money is protected with enterprise-grade encryption and security protocols.',
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: 'Zero Fees',
    description:
      'Send money to friends and family without worrying about hidden fees or charges.',
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Works Everywhere',
    description:
      'Pay anyone, anywhere. Your phone is your wallet. Simple, fast, and always with you.',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: '24/7 Availability',
    description:
      'Send money anytime, day or night. No business hours, no restrictions.',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Global Reach',
    description:
      'Break down borders. Send money across the world instantly, just like sending a text.',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Why millions choose us
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              The simplest way to send and receive money. Built for everyday life.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              How it works
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Sending money has never been easier
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#00D632] text-white text-3xl font-bold mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sign Up</h3>
              <p className="text-gray-600 text-lg">
                Create your account in seconds. No complicated forms, just your phone number.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#00D632] text-white text-3xl font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Add Money</h3>
              <p className="text-gray-600 text-lg">
                Link your bank account or add funds instantly. Your money, your way.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#00D632] text-white text-3xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Send & Receive</h3>
              <p className="text-gray-600 text-lg">
                Pay friends, split bills, or get paid. It's that simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#00D632] to-[#00B82E] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="mt-4 text-xl text-white/90 mb-10">
            Join millions of people using the simplest way to send and receive money.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-[#00D632] hover:bg-white/90 font-semibold text-lg px-8 py-4 shadow-xl w-full sm:w-auto"
                icon={<ArrowRight className="h-5 w-5" />}
              >
                Get Started Free
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/80">
            No credit card required • Free to sign up • Instant setup
          </p>
        </div>
      </section>
    </div>
  )
}

