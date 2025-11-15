import { formatNumber, formatUSD } from '@/lib/utils/format'

const stats = [
  { label: 'Active Users', value: '2.5M+' },
  { label: 'Transactions Processed', value: '$500M+' },
  { label: 'Countries Supported', value: '180+' },
  { label: 'Average Transfer Time', value: '< 3 sec' },
]

export function StatsSection() {
  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-[#00D632] mb-2">{stat.value}</p>
              <p className="text-base text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

