import { useState } from 'react'
import Card from '../ui/Card'
import Icon from '../ui/Icon'

const faqData = [
  {
    question: "Who is eligible to join the event?",
    answer: "This event targets external participants who have not been VPBankers yet. Students, professionals, and technology enthusiasts are welcome to participate."
  },
  {
    question: "Will I be given an AWS account to build the prototype or do I have to create my own account?",
    answer: "Shortlisted teams will be provided with AWS Credits to develop their prototypes. You don't need to create your own AWS account initially."
  },
  {
    question: "Can I present my ideas in Vietnamese or English?",
    answer: "Both Vietnamese and English presentations are accepted. Choose the language you're most comfortable with."
  },
  {
    question: "I'm interested in IT and data-related job positions at VPBank. Where can I find more information?",
    answer: "Excellent candidates will have opportunities to be recruited by VPBank's IT & EDA Department. More information will be provided during the event."
  },
  {
    question: "If I'm based outside of Hanoi, can I participate?",
    answer: "Yes, most phases are conducted online. Only the Learn (Kick-off) and Compete phases require physical presence in the designated locations."
  },
  {
    question: "What will I get from participating in this event?",
    answer: "Participants will gain valuable experience, networking opportunities, mentorship from industry experts, potential prizes, and career opportunities at VPBank."
  }
]

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="bg-[linear-gradient(to_right,#094992,#38a44b)] py-16 px-8" id="faq">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">FAQ</h2>
      </div>
      
      <div className="space-y-2 max-w-5xl mx-auto">
        {faqData.map((faq, index) => (
          <Card key={index} className="bg-white">
            <button
              className="w-full px-8 py-2 text-left flex justify-between items-center focus:outline-none group"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex items-center space-x-4">
                <span className="text-gray-900 text-lg group-hover:text-[#1e40af] transition-colors">
                  {faq.question}
                </span>
              </div>
              <div className="bg-[#1e40af] rounded-full w-8 h-8 flex items-center justify-center">
                <span className={`text-white font-bold text-lg transform transition-transform duration-200 ${
                  openFaq === index ? 'rotate-45' : ''
                }`}>
                  {openFaq === index ? '−' : '+'}
                </span>
              </div>
            </button>
            {openFaq === index && (
              <div className="px-8 pb-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}