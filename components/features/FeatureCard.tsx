import { ReactNode } from 'react'
import { Card } from '@/components/ui/Card'

export interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card hoverable className="text-left border-0 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00D632]/10 text-[#00D632] mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-base text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}

