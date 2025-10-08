const timelineData = [
  {
    title: 'Registration',
    date: '05/9 - 15/10/2025',
    format: 'Online',
    description: 'Register for a participation and pick up the Challenge Statements to compete',
  },
  {
    title: 'Learn (Kick-off)',
    date: 'Saturday - 18/10/2025',
    format: 'Offline',
    description: 'Participants to join 2 workshops from AWS to understand the environment',
  },
  {
    title: 'Ideation',
    date: '19/10 – 8AM 23/10/2025',
    format: 'Online',
    description: 'Individual/Teams to start ideating their solution for Challenge statement',
  },
  {
    title: 'Develop',
    date: '29/10 – 8AM 06/11/2025',
    format: 'Online',
    description: 'Shortlisted member/teams will be equipped with AWS Credits to develop prototypes',
  },
  {
    title: 'Compete',
    date: 'Saturday - 22/11/2025',
    format: 'Offline',
    description: 'Top final team will present at the Final round in front of panel of Judges',
  }
]

export default function TimelineSection() {
  return (
    <section id="timeline" className="bg-[linear-gradient(to_right,#094992,#38a44b)] px-4 lg:px-16 pt-16 pb-8">
      <h3 className="text-2xl lg:text-4xl xl:text-5xl text-center font-bold text-white mb-8 lg:mb-12">
        VPBank Technology Hackathon 2025 Timeline -<br className="hidden lg:block" /> 
        <span className="lg:hidden"> </span>Senior Category 
      </h3>
      
      {/* Mobile Timeline - Vertical Layout */}
      <div className="lg:hidden space-y-8">
        {timelineData.map((item, index) => (
          <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center mb-3">
              <img src="/timeline_icon.png" alt="" className="w-8 h-8 mr-3" />
              <div>
                <p className='font-bold text-base text-white'>{item.title}</p>
                <p className='font-bold text-sm text-white/80'>{item.date}</p>
              </div>
            </div>
            <p className='text-sm text-white/90 mb-2'><strong>Format:</strong> {item.format}</p>
            <p className='text-white/90 text-sm'>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Desktop Timeline - Horizontal Layout */}
      <div className="hidden lg:flex flex-row gap-2 justify-evenly px-4 xl:px-60">
        {timelineData.map((item, index) => (
          <div key={index} className="flex flex-col items-start max-w-48">
            <p className='font-bold text-base xl:text-lg text-white h-[3em] leading-[1.5em] overflow-hidden'><strong>{item.date}</strong></p>
            <div className="my-4">
              <div className="flex flex-row items-center">
                <img src="/timeline_icon.png" alt="" className="w-1/3 h-auto" />
                <img src="/timeline_line.png" alt="" className="w-2/3 h-auto" />
              </div>
            </div>
            <p className='font-bold text-base xl:text-lg text-white mb-2'><strong>{item.title}</strong></p>
            <p className='text-xs xl:text-sm text-white mb-2'><strong>Format:</strong> {item.format}</p>
            <p className='text-white text-xs xl:text-sm'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}