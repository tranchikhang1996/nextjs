import { useState } from 'react'

interface HeaderProps {
    onNavigate: (sectionId: string) => void
}

export default function Header({ onNavigate }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 w-full bg-[linear-gradient(to_right,#094992,#38a44b)] z-50">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between py-2">
                    {/* Logo section */}
                    <div className="flex flex-row items-center gap-2">
                        <img src="/vp_logo.png" alt="VPBank Logo" className="h-6 sm:h-8 lg:h-10" />
                        <img src="/power_by_aws.png" alt="Powered by AWS" className="h-4 sm:h-5 lg:h-7" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex gap-8 xl:gap-16 items-center">
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
                            className="bg-white font-bold transition-all duration-300 rounded-full text-[#38a44b] hover:bg-[#38a44b] hover:text-[#ffffff] px-6 xl:px-12 py-2 text-base xl:text-lg"
                        > Register </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden">
                        <div className="flex flex-row justify-between px-2 pt-2 pb-3 space-y-1 bg-[linear-gradient(to_right,#094992,#38a44b)]">
                            <button
                                onClick={() => {
                                    onNavigate('overview')
                                    setIsMobileMenuOpen(false)
                                }}
                                className="block w-full text-left px-3 py-2 text-white hover:text-[#38a44b] text-base font-bold transition-colors"
                            > Overview </button>
                            <button
                                onClick={() => {
                                    onNavigate('timeline')
                                    setIsMobileMenuOpen(false)
                                }}
                                className="block w-full text-left px-3 py-2 text-white font-bold hover:text-[#38a44b] text-base transition-colors"
                            > Timeline </button>
                            <button
                                onClick={() => {
                                    onNavigate('mentors')
                                    setIsMobileMenuOpen(false)
                                }}
                                className="block w-full text-left px-3 py-2 text-white font-bold hover:text-[#38a44b] text-base transition-colors"
                            > Mentors </button>
                            <button
                                onClick={() => {
                                    onNavigate('register')
                                    setIsMobileMenuOpen(false)
                                }}
                                className="block w-full mx-3 my-2 bg-white font-bold transition-all duration-300 rounded-full text-[#38a44b] hover:bg-[#38a44b] hover:text-[#ffffff] px-6 py-2 text-base text-center"
                            > Register </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}