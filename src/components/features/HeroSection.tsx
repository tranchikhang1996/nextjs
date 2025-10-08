import { Countdown } from '../ui'
import Button from '../ui/Button'

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="bg-[linear-gradient(to_right,#094992,#38a44b)] pt-16 pb-8 px-4 sm:px-8 lg:px-32 min-h-screen flex flex-col justify-center">
      {/* Main content container */}
      <div className="relative flex flex-col items-center justify-center space-y-6 lg:space-y-8">
        
        {/* Background cloud image - hidden on mobile for better readability */}
        <div className="hidden lg:block absolute inset-0 w-2/3 aspect-[1481/800] opacity-30">
          <img 
            src="/headline_cloud.png" 
            className="w-full h-full object-cover" 
            alt="Background cloud"
          />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center space-y-6">
          
          {/* Top logos - responsive layout */}
          <div className="w-full flex justify-between items-center mb-4 lg:mb-8">
            <img 
              src="/vp_logo.png" 
              className="w-16 sm:w-20 lg:w-24 h-auto" 
              alt="VPBank Logo" 
            />
            <img 
              src="/power_by_aws.png" 
              className="w-16 sm:w-20 lg:w-24 h-auto" 
              alt="Powered by AWS" 
            />
          </div>

          {/* Main headline images */}
          <div className="w-full flex flex-col items-center space-y-4">
            <img 
              src="/headline_vp_tech.png" 
              className="w-full max-w-md lg:max-w-2xl h-auto" 
              alt="VPBank Tech" 
            />
            <img 
              src="/headline_hackathon.png" 
              className="w-full max-w-md lg:max-w-2xl h-auto" 
              alt="Hackathon" 
            />
          </div>

          {/* Subtitle */}
          <div className="w-full max-w-2xl mx-auto px-4">
            <p className="bg-[linear-gradient(to_right,#57b851,#48cffb,#88f1ef)] rounded-full font-bold text-center text-white text-sm sm:text-base lg:text-lg py-2 px-4 lg:px-6">
              CHINH PHỤC CÔNG NGHỆ KIẾN TẠO TƯƠNG LAI CÙNG VPBANK
            </p>
          </div>

          {/* Process steps */}
          <div className="w-full max-w-lg mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-center">
              <p className="text-white font-bold text-sm lg:text-base">Learn</p>
              <p className="text-white font-bold text-sm lg:text-base">Ideate</p>
              <p className="text-white font-bold text-sm lg:text-base">Develop</p>
              <p className="text-white font-bold text-sm lg:text-base">Compete</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom action section */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 items-center mt-8 lg:mt-12">
        <Countdown className="flex-shrink-0" />
        <button
          onClick={() => onNavigate('register')}
          className="bg-[#38a44b] text-white hover:bg-[#FFFFFF] hover:text-[#38a44b] px-8 sm:px-12 py-4 lg:py-6 text-base lg:text-lg font-bold rounded-full transition-all duration-300 whitespace-nowrap">
          Register Now
        </button>
      </div>
    </section>
  )
}