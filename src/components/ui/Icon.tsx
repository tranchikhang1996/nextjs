import { link } from "fs"

interface IconProps {
  name: string
  className?: string
}

export default function Icon({ name, className = 'text-2xl' }: IconProps) {
  const icons: Record<string, string> = {
    trophy: '🏆',
    target: '🎯',
    bulb: '💡',
    document: '📄',
    graduation: '🎓',
    gear: '⚙️',
    flag: '🏁',
    rocket: '🚀',
    team: '👥',
    person: '👤',
    question: '?',
    email: '📧',
    phone: '📞',
    facebook: '📘',
    briefcase: '💼',
    twitter: '🐦',
    linkedin: ''
  }
  
  if (name === 'question') {
    return (
      <span className={`font-bold text-white ${className}`}>
        {icons[name]}
      </span>
    )
  }
  
  return (
    <span className={className}>
      {icons[name] || '✨'}
    </span>
  )
}