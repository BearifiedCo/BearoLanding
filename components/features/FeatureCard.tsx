import { ReactNode } from 'react'
import { Card } from '@/components/ui/Card'

export interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card hoverable className="text-center">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-bear-honey/30 text-bear-brown">
          {icon}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </Card>
  )
}

