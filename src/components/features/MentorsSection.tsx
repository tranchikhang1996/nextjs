import Card from '../ui/Card'

const awsMentors = [
  { name: "Quan Phuong", title: "Senior Solution Architect, AWS" },
  { name: "Thi Nguyen", title: "Senior Solution Architect, AWS" },
  { name: "Binh Tran", title: "Senior Solution Architect, AWS" },
  { name: "Thanh Dang", title: "Senior Solution Architect, AWS" },
  { name: "Chinh Hoang Minh", title: "Senior Solution Architect, AWS" },
  { name: "Dung Ha", title: "Senior Solution Architect, AWS" }
]

const vpbankMentors = [
  { name: "Nguyen Thi Ngoc Ly", title: "Head of Data Governance Department" },
  { name: "Tran Hong Vinh", title: "Head of Data Platform Center" },
  { name: "Dao Huu Hung", title: "Head of Artificial Intelligence Center" },
  { name: "Dao Ngoc Long", title: "Acting Head of IT Services for Corporate Banking Center" },
  { name: "Do Cam Van", title: "Head of Core Banking Applications Center" },
  { name: "Do Tran Quang", title: "Head of IT Strategy & Enterprise Architect Department" },
  { name: "Hoang Duc Anh", title: "Head of Business Intelligence Center" },
  { name: "Nguyen Quang Huy", title: "Acting Head of IT Security Department" },
  { name: "Nguyen Thi Thu Nga", title: "Acting Head of Digital Factory Center" },
  { name: "Nguyen Tuan Cuong", title: "Head of Enterprise Services Support" },
  { name: "Tran Minh Quoc", title: "Head of Infrastructure Operations Center" },
  { name: "Tran Tuan Anh", title: "Head of Technology Platform Department" }
]

function MentorCard({ mentor, type }: { mentor: typeof awsMentors[0], type: 'aws' | 'vpbank' }) {
  const initials = mentor.name.split(' ').map(n => n[0]).join('').slice(0, 2)
  const gradientClass = type === 'aws' 
    ? 'bg-gradient-to-br from-[#ff9900] to-[#ff6600]'
    : 'bg-gradient-to-br from-[#1e40af] to-[#3b82f6]'
  
  return (
    <Card className="bg-white p-6 text-center mb-6">
      <div className={`w-20 h-20 ${gradientClass} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
        <span className="text-white font-bold text-2xl">{initials}</span>
      </div>
      <h4 className="font-bold text-gray-900 text-lg mb-2">{mentor.name}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{mentor.title}</p>
    </Card>
  )
}

export default function MentorsSection() {
  return (
    <section id="mentors" className="bg-[linear-gradient(to_right,#094992,#38a44b)] px-4 lg:px-24 xl:px-48 pt-16 pb-8">
      <div className="text-start mb-12">
        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 lg:mb-8">Mentors</h3>
        <p className="text-sm lg:text-base text-gray-300 max-w-4xl leading-relaxed">Get ready to embark on an exhilarating journey of innovation and collaboration with our stellar lineup of mentors, hailing from VPBank and AWS!</p>
      </div>
      
        {/* AWS Mentors */}
        <div className="mb-16">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 lg:mb-8">Mentors from AWS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 lg:px-16 xl:px-32">
            {awsMentors.map((mentor, index) => (
              <MentorCard key={index} mentor={mentor} type="aws" />
            ))}
          </div>
        </div>

        {/* VPBank Mentors */}
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 lg:mb-8">Mentors from VPBank</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 lg:px-16 xl:px-32">
            {vpbankMentors.map((mentor, index) => (
              <MentorCard key={index} mentor={mentor} type="vpbank" />
            ))}
          </div>
        </div>
    </section>
  )
}