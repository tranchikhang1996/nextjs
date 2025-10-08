import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-bold transition-all duration-300 rounded-full'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white hover:shadow-xl transform hover:scale-105',
    secondary: 'bg-white text-[#1e40af] hover:bg-gray-100 shadow-lg transform hover:scale-105',
    outline: 'border-3 border-[#1e40af] text-[#1e40af] bg-white hover:bg-[#1e40af] hover:text-white'
  }
  
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-lg',
    lg: 'px-10 py-4 text-xl'
  }
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}