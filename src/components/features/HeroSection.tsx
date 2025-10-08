import { Countdown } from '../ui'
import Button from '../ui/Button'

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="bg-[linear-gradient(to_right,#094992,#38a44b)] pt-16 px-32">
      <div className="relative w-2/3 aspect-[1481/800]">
        <img src="/headline_cloud.png" className="size-full bg-cover bg-center bg-no-repeat" />
      </div>
      <div className="absolute w-1/2 top-1/6 left-1/4 flex flex-col items-center">
        <div className="w-full flex justify-between items-center">
          <img src="/vp_logo.png" className="w-1/5 left-0 top-0 h-auto bg-cover bg-center bg-no-repeat" />
          <img src="/power_by_aws.png" className="w-1/5 right-0 top-0 h-auto bg-cover bg-center bg-no-repeat" />
        </div>
        <img src="/headline_vp_tech.png" className="size-full bg-cover bg-center bg-no-repeat" />
        <img src="/headline_hackathon.png" className="size-full bg-cover bg-center bg-no-repeat" />
        <p className="bg-[linear-gradient(to_right,#57b851,#48cffb,#88f1ef)] rounded-full font-bold text-center text-white text-base mt-4 px-4">CHINH PHỤC CÔNG NGHỆ KIẾN TẠO TƯƠNG LAI CÙNG VPBANK</p>
        <div className="w-2/3 flex flex-row justify-between">
          <p className="text-white font-bold text-sm">Learn</p>
          <p className="text-white font-bold text-sm">Ideate</p>
          <p className="text-white font-bold text-sm">Develop</p>
          <p className="text-white font-bold text-sm">Compete</p>
        </div>
      </div>
      <div className="flex justify-center gap-16 items-center mt-8">
        <Countdown/>
        <button
          onClick={() => onNavigate('register')}
          className="bg-[#38a44b] text-white hover:bg-[#FFFFFF] hover:text-[#38a44b] px-12 py-6 text-lg font-bold rounded-full">
          Register Now
        </button>
      </div>
    </section>
  )
}