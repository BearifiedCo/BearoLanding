'use client'

import { useEffect } from 'react'
import { X, CheckCircle, XCircle, Info, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils/helpers'
import type { Toast as ToastType } from '@/lib/hooks/useToast'

export interface ToastProps {
  toast: ToastType
  onClose: (id: string) => void
}

export function Toast({ toast, onClose }: ToastProps) {
  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => {
        onClose(toast.id)
      }, toast.duration)

      return () => clearTimeout(timer)
    }
  }, [toast.id, toast.duration, onClose])

  const icons = {
    success: <CheckCircle className="h-5 w-5" />,
    error: <XCircle className="h-5 w-5" />,
    info: <Info className="h-5 w-5" />,
    warning: <AlertTriangle className="h-5 w-5" />,
  }

  const styles = {
    success: 'bg-green-50 text-green-800 border-green-200',
    error: 'bg-red-50 text-red-800 border-red-200',
    info: 'bg-blue-50 text-blue-800 border-blue-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
  }

  return (
    <div
      className={cn(
        'pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-lg border p-4 shadow-lg',
        'animate-in slide-in-from-top-5 duration-300',
        styles[toast.type]
      )}
    >
      <div className="flex-shrink-0">{icons[toast.type]}</div>
      <p className="flex-1 text-sm font-medium">{toast.message}</p>
      <button
        onClick={() => onClose(toast.id)}
        className="flex-shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

export function ToastContainer({ toasts, onClose }: {
  toasts: ToastType[]
  onClose: (id: string) => void
}) {
  return (
    <div className="pointer-events-none fixed right-0 top-0 z-50 flex max-h-screen w-full flex-col items-end gap-2 p-4 sm:p-6">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={onClose} />
      ))}
    </div>
  )
}

