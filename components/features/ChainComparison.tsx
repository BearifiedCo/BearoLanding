import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Check } from 'lucide-react'

const apechainFeatures = [
  'EVM-compatible',
  'Smart contract support',
  'Low gas fees',
  'Fast finality',
]

const solanaFeatures = [
  'Ultra-fast transactions',
  'Sub-second finality',
  'High throughput',
  'Low transaction costs',
]

export function ChainComparison() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Choose Your Chain
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Both chains offer unique advantages for your payment needs
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* ApeChain */}
          <Card variant="elevated">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-apechain-secondary text-4xl">
                🦍
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">ApeChain</h3>
                <Badge
                  variant="default"
                  className="mt-1 bg-apechain-secondary text-apechain-primary"
                >
                  EVM-Compatible
                </Badge>
              </div>
            </div>
            <ul className="space-y-3">
              {apechainFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-apechain-primary" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Solana */}
          <Card variant="elevated">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-solana-primary/20 to-solana-secondary/20 text-4xl">
                ◎
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Solana</h3>
                <Badge
                  variant="default"
                  className="mt-1 bg-gradient-to-r from-solana-primary to-solana-secondary text-white"
                >
                  High Performance
                </Badge>
              </div>
            </div>
            <ul className="space-y-3">
              {solanaFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-solana-secondary" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}

