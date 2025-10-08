import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  gradient?: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow'
  hover?: boolean
}

export default function Card({ children, className = '', gradient, hover = true }: CardProps) {
  const baseClasses = 'rounded-2xl shadow-lg transition-all duration-300'
  const hoverClasses = hover ? 'hover:shadow-xl transform hover:scale-105' : ''
  
  const gradientClasses = {
    blue: 'bg-gradient-to-br from-[#1e40af] via-[#3b82f6] to-[#60a5fa]',
    green: 'bg-gradient-to-br from-[#059669] via-[#10b981] to-[#34d399]',
    purple: 'bg-gradient-to-br from-[#7c3aed] to-[#8b5cf6]',
    orange: 'bg-gradient-to-br from-[#f59e0b] to-[#fbbf24]',
    red: 'bg-gradient-to-br from-[#dc2626] to-[#ef4444]',
    yellow: 'bg-gradient-to-br from-[#fef3c7] via-[#fde68a] to-[#f59e0b]'
  }
  
  const backgroundClass = gradient ? gradientClasses[gradient] : 'bg-white'
  
  return (
    <div className={`${baseClasses} ${backgroundClass} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}