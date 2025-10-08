import { ReactNode } from 'react'

interface PrizeCardProps {
  className?: string
  title?: string
  value?: string
  cupIcon?: string
}

export default function PrizeCard({ className = '', title = '', value = '', cupIcon = '' }: PrizeCardProps) {
  return (
    <div className={`relative flex flex-col justify-center items-center bg-gradient-to-br from-[#0096ff] via-[#00a3cc] to-[#00dd0b] rounded-2xl shadow-lg transition-all duration-300 ${className}`}>
        {cupIcon && <img src={cupIcon} alt="Cup Icon" className='absolute w-1/4 aspect-[400/532] -top-1/3' />}
        <h3 className='text-xl font-bold text-amber-600 text-center bg-amber-50 px-6 py-1 rounded-2xl'>{title}</h3>
        <h2 className='text-2xl text-neutral-200 text-center font-bold'>{value}</h2>
        <span className='absolute bottom-1/10 text-neutral-200 text-center text-base'>Total prize value</span>
    </div>
  )
}