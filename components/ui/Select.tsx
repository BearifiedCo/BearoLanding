import { SelectHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils/helpers'
import { ChevronDown } from 'lucide-react'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, disabled, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              'w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-gray-900 transition-colors',
              'focus:border-bear-brown focus:outline-none focus:ring-2 focus:ring-bear-brown/20',
              'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
              className
            )}
            disabled={disabled}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'

