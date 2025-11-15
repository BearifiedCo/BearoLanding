import { formatNumber, formatUSD } from '@/lib/utils/format'

const stats = [
  { label: 'Total Transactions', value: '150,000+' },
  { label: 'Total Volume', value: '$50M+' },
  { label: 'Active Users', value: '10,000+' },
  { label: 'Supported Tokens', value: '50+' },
]

export function StatsSection() {
  return (
    <section className="bg-bear-forest py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-bear-honey">{stat.value}</p>
              <p className="mt-2 text-sm text-bear-cream">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

