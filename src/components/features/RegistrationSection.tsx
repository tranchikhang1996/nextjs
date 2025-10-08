import Card from '../ui/Card'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

export default function RegistrationSection() {
  return (
    <section id="register" className='bg-[linear-gradient(to_right,#094992,#38a44b)] pt-16 pb-8 px-4'>
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 lg:mb-8">Register Here!</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-lg lg:text-xl text-gray-300 font-medium">
            This event targets external participants who have not been VPBankers yet.
          </p>
          <p className="text-base lg:text-lg text-gray-200">
            The standard team size is 3 to 5 members. If you register as an individual, the organizers will group you with other participants to form a team.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        <Card gradient="blue" className="p-6 lg:p-10 text-center shadow-2xl">
          <div className="bg-white rounded-full w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-6 lg:mb-8 flex items-center justify-center shadow-lg">
            <Icon name="team" className="text-2xl lg:text-4xl" />
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">Register as TEAM</h3>
          <p className="text-blue-100 mb-6 lg:mb-8 text-base lg:text-lg leading-relaxed">
            Have a team ready? Register together and compete as one unit.
          </p>
          <Button variant="secondary" size="lg" className="w-full">
            Register Team
          </Button>
        </Card>
        
        <Card gradient="green" className="p-6 lg:p-10 text-center shadow-2xl">
          <div className="bg-white rounded-full w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-6 lg:mb-8 flex items-center justify-center shadow-lg">
            <Icon name="person" className="text-2xl lg:text-4xl" />
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">Register as INDIVIDUAL</h3>
          <p className="text-green-100 mb-6 lg:mb-8 text-base lg:text-lg leading-relaxed">
            Looking for teammates? We&apos;ll help you find the perfect team.
          </p>
          <Button variant="secondary" size="lg" className="w-full text-[#059669]">
            Register Individual
          </Button>
        </Card>
      </div>
    </section>
  )
}