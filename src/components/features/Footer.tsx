import Icon from '../ui/Icon'

export default function Footer() {
    return (
        <footer className="bg-[linear-gradient(to_right,#094992,#38a44b)] py-8">
            <div className="max-w-6xl mx-auto items-center px-4 space-y-4 sm:px-6 lg:px-8">
                <h3 className="text-xl lg:text-2xl font-bold text-[#00dd0b] text-center">VPBANK TECHNOLOGY HACKATHON 2025</h3>
                <h3 className="text-lg lg:text-xl font-bold text-[#ffffff] text-center">Contact</h3>
                <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-10 p-4 max-w-6xl mx-auto">
                    <a 
                        href="#" 
                        className="text-gray-300 hover:text-[#00dd0b] transition-colors cursor-pointer flex items-center"
                    >
                        <img src="/facebook.svg" className="h-5 lg:h-6 mr-2" alt="Facebook" />
                        <span className="text-sm lg:text-base">Tuyển dụng VPBank</span>
                    </a>
                    <a 
                        href="#" 
                        className="text-gray-300 hover:text-[#00dd0b] transition-colors cursor-pointer flex items-center"
                    >
                        <img src="/linkedin.svg" className="h-5 lg:h-6 mr-2" alt="LinkedIn" />
                        <span className="text-sm lg:text-base">VPBank</span>
                    </a>
                    <a 
                        href="mailto:tuyendung@vpbank.com.vn" 
                        className="text-gray-300 hover:text-[#00dd0b] transition-colors cursor-pointer flex items-center"
                    >
                        <img src="/mail.svg" className="h-5 lg:h-6 mr-2" alt="Email" />
                        <span className="text-sm lg:text-base">tuyendung@vpbank.com.vn</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}