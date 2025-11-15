import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils/helpers'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  header?: ReactNode
  footer?: ReactNode
  hoverable?: boolean
}

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  header,
  footer,
  hoverable = false,
  className,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-xl transition-all'

  const variants = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-transparent border-2 border-bear-brown',
  }

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        paddings[padding],
        hoverable && 'hover:shadow-xl hover:scale-[1.02] cursor-pointer',
        className
      )}
      {...props}
    >
      {header && (
        <div className="mb-4 border-b border-gray-200 pb-4">{header}</div>
      )}
      {children}
      {footer && (
        <div className="mt-4 border-t border-gray-200 pt-4">{footer}</div>
      )}
    </div>
  )
}

