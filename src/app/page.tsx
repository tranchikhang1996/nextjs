'use client'

import {
  Header,
  HeroSection,
  TimelineSection,
  MentorsSection,
  OverviewSection,
  RegistrationSection,
  FAQSection,
  Footer
} from '@/components'

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={scrollToSection} />
      <HeroSection onNavigate={scrollToSection} />
      <OverviewSection />
      <TimelineSection />
      <MentorsSection />
      <RegistrationSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
