import Icon from '../ui/Icon'

export default function Footer() {
    return (
        <footer className="bg-[linear-gradient(to_right,#094992,#38a44b)] py-8">
            <div className="max-w-6xl mx-auto items-center px-4 space-y-2 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-bold text-[#00dd0b] text-center">VPBANK TECHNOLOGY HACKATHON 2025</h3>
                <h3 className="text-xl font-bold text-[#ffffff] text-center">Contact</h3>
                <div className="flex flex-row justify-center space-x-10 p-4 max-w-6xl mx-auto">
                    <p className="text-gray-300 hover:text-[#00dd0b] transition-colors cursor-pointer">
                        <img src="/facebook.svg" className="h-6 inline mr-2" />
                        Tuyển dụng VPBank
                    </p>
                    <p className="text-gray-300 hover:text-[#00dd0b] transition-colors cursor-pointer">
                        <img src="/linkedin.svg" className="h-6 inline mr-2" />
                        VPBank
                    </p>
                    <p className="text-gray-300 hover:text-[#00dd0b] transition-colors cursor-pointer">
                        <img src="/mail.svg" className="h-6 inline mr-2" />
                        tuyendung@vpbank.com.vn
                    </p>
                </div>
            </div>

        </footer>
    )
}