import Button from '../ui/Button'

interface HeaderProps {
    onNavigate: (sectionId: string) => void
}

export default function Header({ onNavigate }: HeaderProps) {
    return (
        <header className="fixed top-0 w-full bg-[linear-gradient(to_right,#094992,#38a44b)] z-50">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row items-center py-2">
                    <div className="flex flex-row justify-items-end items-end gap-2 basis-1/3">
                        <img src="/vp_logo.png" alt="VPBank Logo" className="h-10" />
                        <img src="/power_by_aws.png" alt="Powered by AWS" className="h-7" />
                    </div>
                    <div className="flex gap-16 basis-2/3">
                        <button
                            onClick={() => onNavigate('overview')}
                            className="text-white hover:text-[#38a44b] text-lg transition-colors font-bold"
                        > Overview </button>
                        <button
                            onClick={() => onNavigate('timeline')}
                            className="text-white font-bold hover:text-[#38a44b] text-lg transition-colors"
                        > Timeline </button>
                        <button
                            onClick={() => onNavigate('mentors')}
                            className="text-white font-bold hover:text-[#38a44b] text-lg transition-colors"
                        > Mentors </button>
                        <button
                            onClick={() => onNavigate('register')}
                            className="bg-white font-bold transition-all duration-300 rounded-full text-[#38a44b] hover:bg-[#38a44b] hover:text-[#ffffff] px-12 py-2 text-lg"
                        > Register </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}