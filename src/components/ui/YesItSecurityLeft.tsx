interface YesItSecurityLeftProps {
  className?: string
}

export default function YesItSecurityLeft({ className = "" }: YesItSecurityLeftProps) {
  return (
    <div className={`flex flex-col gap-6 lg:gap-8 items-start justify-start ${className}`}>
      {/* Main Heading with Gradient */}
      <h1 className="bg-clip-text bg-gradient-to-r from-[#3eff51] to-white to-[34%] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[58px] w-full" 
          style={{ WebkitTextFillColor: "transparent" }}>
        Yes it Security
      </h1>

      {/* Description Text */}
      <div className="text-white font-['Wix_Madefor_Display',_sans-serif] text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[22px] max-w-full lg:max-w-[507px]">
        <p>
          Yes Cybersecurity delivers comprehensive services to help you prevent breaches, reduce risk, and meet regulatory requirements. Our certified specialists test, assess, and harden your systems using globally recognized frameworks.
        </p>
      </div>

      {/* CTA Button */}
      <button 
        className="bg-[#3eff51] text-black font-['Wix_Madefor_Display',_sans-serif] font-semibold text-sm sm:text-base lg:text-[16px] leading-[22px] px-4 sm:px-5 lg:px-[18px] py-2.5 lg:py-3.5 rounded-[41px] hover:bg-[#35e047] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3eff51] focus:ring-offset-2 focus:ring-offset-gray-900"
        type="button"
        aria-label="Request a free cybersecurity consultation"
      >
        Free Consultation
      </button>
    </div>
  )
}