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
    <section id="timeline" className="bg-[linear-gradient(to_right,#094992,#38a44b)] px-16 pt-16">
      <h3 className="text-4xl md:text-5xl text-center font-bold text-white mb-6">VPBank Technology Hackathon 2025 Timeline -<br /> Senior Category </h3>
      <div className="flex flex-row gap-2 justify-evenly px-60">
        {timelineData.map((item, index) => (
          <div key={index} className="flex flex-col items-start">
            <p className='font-bold text-lg text-white h-[3em] leading-[1.5em] overflow-hidden'><strong>{item.date}</strong></p>
            <br />
            <div className="flex flex-row items-center">
              <img src="/timeline_icon.png" alt="" className="w-1/3 h-auto" />
              <img src="/timeline_line.png" alt="" className="w-2/3 h-auto" />
            </div>
            <br />
            <p className='font-bold text-lg text-white'><strong>{item.title}</strong></p>
            <p className='text-sm text-white'><strong>Format:</strong>{item.format}</p>
            <p className='text-white text-sm'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}