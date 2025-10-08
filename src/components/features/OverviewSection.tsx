import SimpleCarousel from "../ui/SimpleCarousel"
import PrizeCard from "../ui/PrizeCard"

const candidates = [
    {
        name: "Junior / Fresh Track (May – August 2025)",
        description: "For fresh graduates (with a minimum “Good” GPA) in IT, Data Science, and related fields, with less than 2 years of experience.",
    },
    {
        name: "Senior & Expert Track (September – December 2025)",
        description: "For technology professionals with over 2 years of experience and a passion for building impactful technological solutions.",
    }
]

const offers = [
    {
        offer: "Choose your own technical challenge statement:",
        description: "in the banking domain and tackle it your way!"
    },
    {
        offer: "Expert mentorship:",
        description: "Be guided throughout the competition by nearly 50 experienced experts from VPBank and AWS."
    },
    {
        offer: "Exciting rewards:",
        description: "Win attractive cash prizes from VPBank and sponsored benefits from AWS."
    },
    {
        offer: "Hack2Hire in action:",
        description: "Gain a direct path to top-tier roles such as AI/Gen AI Engineer, DevOps Specialist, Cloud Expert, Project Manager at VPBank."
    },
    {
        offer: "Work on huge real-life technical projects:",
        description: "Turn your ideas into reality by contributing directly to VPBank’s million-dollar IT projects and take your Hackathon solution to the next level."
    }
]

const opportunities = [
    "Uplift your technical & AWS skills through hands-on workshops by VPBank and AWS top experts",
    "Exciting career prospects await in VPBank's IT & EDA Division: Direct recruitment for top teams/participants",
    "Certificate & medal for final round competitors"
]

const DEMO_IMAGES = [
    { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop", alt: "Mountain" },
    { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop", alt: "Ocean" },
    { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop", alt: "Forest" },
    { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop", alt: "Desert" },
    { src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop", alt: "City" },
];

export default function OverviewSection() {
    return (
        <section className="bg-[linear-gradient(to_right,#094992,#38a44b)] pt-16" id="overview">
            <IntroSection />
            <HighlightsSection />
            <SimpleCarousel images={DEMO_IMAGES} />
            <OpportunitiesSection />
            <PrizeSection />
        </section>
    )
}

function IntroSection() {
    return (
        <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-8">
            <div className="lg:basis-1/2 flex flex-col lg:items-end lg:pl-24 xl:pl-48">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">Season 2 Comes Back</h2>
                <p className="text-sm lg:text-base text-white mb-6"><strong>VPBank Technology Hackathon 2025</strong> – An arena for passionate technology talents with breakthrough thinking and a desire to solve complex problems in the financial and banking industry.</p>
                <ul className="space-y-3 mb-6">
                    {
                        candidates.map((candidate, index) => (
                            <li key={index} className="flex items-start">
                                <img src="/vp_icon.png" alt="" className="size-4 lg:size-5 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-sm lg:text-base text-neutral-100 font-medium"><strong>{candidate.name}</strong> - {candidate.description}</span>
                            </li>
                        ))
                    }
                </ul>
                <p className="text-base lg:text-lg text-white mb-4 font-bold">VPBank Technology Hackathon 2025 offers you an invaluable experience:</p>
                <ul className="space-y-3">
                    {
                        offers.map((offer, index) => (
                            <li key={index} className="flex items-start">
                                <img src="/vp_icon.png" alt="" className="size-4 lg:size-5 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-sm lg:text-base text-neutral-100 font-medium"><strong>{offer.offer}</strong> {offer.description}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="lg:basis-1/2 flex justify-center items-center mt-8 lg:mt-0">
                <img src="/overview_image.png" alt="Overview Image" className="w-full max-w-md lg:max-w-full h-auto" />
            </div>
        </div>
    )
}

function HighlightsSection() {
    return (
        <div className="flex flex-col items-center py-8 px-4">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center mb-8">VPBank Technology Hackathon 2025 Highlights</h2>
            <div className="w-full max-w-4xl p-2 bg-[linear-gradient(to_right,#094992,#38a44b)] rounded-lg shadow-lg">
                <iframe 
                    className="w-full aspect-video rounded-lg" 
                    src="https://www.youtube.com/embed/I87QdtAvQx0?si=s1iPmu1tRAyxyjy2"
                    title="VPBank Technology Hackathon 2025 Highlights"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

function OpportunitiesSection() {
    return (
        <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-8 lg:pl-24 xl:pl-48 items-center">
            <div className="lg:basis-1/2 order-2 lg:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Exploring Opportunities</h2>
                <ul className="space-y-3">
                    {
                        opportunities.map((opportunity, index) => (
                            <li key={index} className="flex items-start">
                                <img src="/vp_icon.png" alt="" className="size-4 lg:size-5 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-sm lg:text-base text-neutral-100 font-medium">{opportunity}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="lg:basis-1/2 flex justify-center items-center order-1 lg:order-2">
                <img src="/opportunities.png" alt="Opportunities Image" className="w-full max-w-md lg:max-w-full h-auto" />
            </div>
        </div>
    )
}

function PrizeSection() {
    return (
        <section className="w-full max-w-6xl mx-auto py-8 lg:py-16 px-4 lg:px-16">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
                <PrizeCard 
                    title="1st Runner-up" 
                    value="40.000.000 VNĐ" 
                    cupIcon="/silver_cup.png" 
                    className="w-full lg:basis-4/12 aspect-[4/3] lg:aspect-[16/9]" 
                />
                <PrizeCard 
                    title="Champion" 
                    value="60.000.000 VNĐ" 
                    cupIcon="/gold_cup.png" 
                    className="w-full lg:basis-5/12 aspect-[4/3] lg:aspect-[16/9] lg:transform lg:scale-110" 
                />
                <PrizeCard 
                    title="2nd Runner-up" 
                    value="20.000.000 VNĐ" 
                    cupIcon="/bronze_cup.png" 
                    className="w-full lg:basis-4/12 aspect-[4/3] lg:aspect-[16/9]" 
                />
            </div>
        </section>
    )
}