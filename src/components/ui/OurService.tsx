import Image from 'next/image'

// Assets from public/assets/ourservice/
// Icons: service-ico{1..7}.svg
// Hover BGs: service-hover{1..7}.png
const serviceIcons = {
  1: "/assets/ourservice/service-ico1.svg",
  2: "/assets/ourservice/service-ico2.svg",
  3: "/assets/ourservice/service-ico3.svg",
  4: "/assets/ourservice/service-ico4.svg",
  5: "/assets/ourservice/service-ico5.svg",
  6: "/assets/ourservice/service-ico6.svg",
  7: "/assets/ourservice/service-ico7.svg",
} as const

const serviceHovers = {
  1: "/assets/ourservice/service-hover1.png",
  2: "/assets/ourservice/service-hover2.png",
  3: "/assets/ourservice/service-hover3.png",
  4: "/assets/ourservice/service-hover4.png",
  5: "/assets/ourservice/service-hover5.png",
  6: "/assets/ourservice/service-hover6.png",
  7: "/assets/ourservice/service-hover7.png",
} as const


interface OurServiceProps {
  className?: string
  hideHeader?: boolean
}

interface ServiceCard {
  id: number
  title: string
  description: string
  icon: string
  hover: string
  link: string
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: "Penetration Testing",
    description: "Simulated real world attacks to reveal exploitable weaknesses across apps, networks, and infrastructure.",
    icon: serviceIcons[1],
    hover: serviceHovers[1],
    link: "/services/penetration-testing"
  },
  {
    id: 2,
    title: "Vulnerability Assessment",
    description: "Comprehensive scanning and analysis to identify security weaknesses before they can be exploited.",
    icon: serviceIcons[2],
    hover: serviceHovers[2],
    link: "/services/vulnerability-assessment"
  },
  {
    id: 3,
    title: "Red Team Assessment",
    description: "Advanced adversarial simulation testing your organization's detection and response capabilities.",
    icon: serviceIcons[3],
    hover: serviceHovers[3],
    link: "/services/red-team"
  },
  {
    id: 4,
    title: "Source Code Review",
    description: "In-depth analysis of application source code to identify security flaws and vulnerabilities.",
    icon: serviceIcons[4],
    hover: serviceHovers[4],
    link: "/services/source-code-review"
  },
  {
    id: 5,
    title: "Attack Surface Analysis",
    description: "Continuous monitoring and assessment of external-facing assets to minimize attack vectors.",
    icon: serviceIcons[5],
    hover: serviceHovers[5],
    link: "/services/attack-surface"
  },
  {
    id: 6,
    title: "VA Clinic",
    description: "Regular vulnerability assessment sessions with expert consultation to maintain security posture.",
    icon: serviceIcons[6],
    hover: serviceHovers[6],
    link: "/services/va-clinic"
  },
  {
    id: 7,
    title: "Cyber Drill",
    description: "Tabletop and live exercises to test incident response readiness and reduce time to contain.",
    icon: serviceIcons[7],
    hover: serviceHovers[7],
    link: "/services/cyber-drill"
  }
]

export default function OurService({ className = "", hideHeader = false }: OurServiceProps) {
  return (
    <section 
      className={`relative overflow-visible bg-black py-16 ${className}`}
      aria-label="Our cybersecurity services"
    >
      <div className="relative z-[1] mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {!hideHeader && (
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16">
            <div className="mb-6 sm:mb-0">
              <h2 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[58px] mb-4">
                Our Services
              </h2>
              <p className="text-gray-300 font-['Wix_Madefor_Display',_sans-serif] text-lg sm:text-xl lg:text-[20px] leading-relaxed max-w-2xl">
                We cover your entire security lifecycle, from discovery and testing to remediation support and audit readiness.
              </p>
            </div>
            <button 
              className="bg-[#3eff51] text-black font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base px-[18px] py-3.5 rounded-[41px] hover:bg-[#35e047] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3eff51] focus:ring-offset-2 focus:ring-offset-gray-900 whitespace-nowrap"
              aria-label="View all services"
            >
              View All
            </button>
          </div>
        )}

        {/* Services Grid */
        }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {services.map((service) => (
            <article 
              key={service.id}
              className="group relative overflow-hidden rounded-[16px] p-6 border border-[#333333] hover:border-[#3eff51]/50 transition-all duration-300 bg-black w-full sm:w-[384px] h-[276px] flex flex-col"
            >
              {/* Hover background image */}
              <Image
                src={service.hover}
                alt=""
                fill
                priority={false}
                className="pointer-events-none object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />
              {/* Gradient overlay to keep text readable */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"
              />
              {/* Header with Icon and Title */}
              <div className="relative z-10 flex items-start gap-4 mb-6">
                {/* Icon */}
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt=""
                    fill
                    className="object-contain filter brightness-0 invert"
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-2xl leading-[1.15] max-w-[240px]">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="relative z-10 text-gray-200 font-['Wix_Madefor_Display',_sans-serif] font-normal text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Read More Link */}
              <a 
                href={service.link}
                className="relative z-10 mt-auto inline-flex items-center text-gray-300 font-['Wix_Madefor_Display',_sans-serif] font-normal text-sm hover:text-[#3eff51] transition-colors duration-200 group-hover:translate-x-1 transform"
                aria-label={`Read more about ${service.title}`}
              >
                Read more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}