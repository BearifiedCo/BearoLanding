'use client'

import { ReactNode, useState } from 'react'
import { cn } from '@/lib/utils/helpers'

export interface Tab {
  id: string
  label: string
  content: ReactNode
}

export interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  onChange?: (tabId: string) => void
}

export function Tabs({ tabs, defaultTab, onChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    onChange?.(tabId)
  }

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex space-x-1 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              'px-4 py-2 text-sm font-medium transition-colors',
              'focus:outline-none',
              activeTab === tab.id
                ? 'border-b-2 border-bear-brown text-bear-brown'
                : 'text-gray-600 hover:text-gray-900'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">{activeTabContent}</div>
    </div>
  )
}

