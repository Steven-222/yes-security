'use client'

import Image from 'next/image'
import { useState } from 'react'

interface FooterProps {
  className?: string
}

export default function Footer({ className = "" }: FooterProps) {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <footer 
      className={`full-bleed relative bg-[#000c39] text-white min-h-[461px] lg:h-[461px] ${className}`}
      role="contentinfo"
    >
      <div className="container-site h-full flex flex-col justify-center py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          
          {/* Company Info - Left Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-[40px] h-[34px]">
                <Image
                  src="/assets/Header/d93e143d52d949cb35be785e38e623596c968907.svg"
                  alt="Yes Cybersecurity Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-[#3eff51] font-['Wix_Madefor_Display',_sans-serif] text-lg font-normal">
                Cybersecurity
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-medium text-sm mb-2">Address</h4>
                <p className="text-gray-300 font-['Wix_Madefor_Display',_sans-serif] text-sm leading-relaxed">
                  17th Floor, Wittayakit Building, Phayathai Rd,<br />
                  Wang Thonglang, Pathum Wan, Bangkok 10330<br />
                  (BTS SIAM STATION)
                </p>
              </div>

              <div>
                <h4 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-medium text-sm mb-2">Contact</h4>
                <p className="text-gray-300 font-['Wix_Madefor_Display',_sans-serif] text-sm space-y-1">
                  <span className="block">Bangkok: 096-879-5445</span>
                  <span className="block">
                    <a href="mailto:info@yeswebdesignstudio.com" className="hover:text-[#3eff51] transition-colors">
                      info@yeswebdesignstudio.com
                    </a>
                  </span>
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3 mt-4">
                <a href="#" className="text-gray-400 hover:text-[#3eff51] transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#3eff51] transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#3eff51] transition-colors" aria-label="Discord">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#3eff51] transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#3eff51] transition-colors" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Link - Second Column */}
          <div>
            <h4 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-medium text-sm mb-4">Quick link</h4>
            <nav>
              <ul className="space-y-3">
                <li><a href="/about" className="text-gray-300 hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-sm">About</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-sm">Services</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-sm">Blog</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-sm">Careers</a></li>
                <li><a href="/contact-us" className="text-gray-300 hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-sm">Contact Us</a></li>
              </ul>
            </nav>
          </div>

          {/* Services - Third Column */}
          <div>
            <h4 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-medium text-sm mb-4">Services</h4>
            <nav>
              <ul className="space-y-3">
                <li><a href="/services/penetration-testing" className="text-gray-300 hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-sm">Penetration Testing</a></li>
                <li><a href="/services/vulnerability-assessment" className="text-gray-300 hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-sm">Vulnerability Assessment</a></li>
                <li><a href="/services/red-team" className="text-gray-300 hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-sm">Red Team Assessment</a></li>
                <li><a href="/services/source-code-review" className="text-gray-300 hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-sm">Source Code Review</a></li>
                <li><a href="/services/attack-surface" className="text-gray-300 hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-sm">Attack Surface Analysis</a></li>
                <li><a href="/services/va-clinic" className="text-gray-300 hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-sm">VA Clinic</a></li>
                <li><a href="/services/cyber-drill" className="text-gray-300 hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-sm">Cyber Drill</a></li>
              </ul>
            </nav>
          </div>

          {/* Stay Inspired - Right Column */}
          <div>
            <h4 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-medium text-sm mb-4">Stay Inspired!</h4>
            <p className="text-gray-300 font-['Wix_Madefor_Display',_sans-serif] text-sm leading-relaxed mb-4">
              Subscribe now for exclusive updates, special offers,<br />
              and wedding inspiration delivered straight to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 px-3 py-2 bg-transparent border border-gray-600 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#3eff51] transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-[#3eff51] text-black px-4 py-2 rounded font-['Wix_Madefor_Display',_sans-serif] font-medium text-sm hover:bg-[#35e047] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3eff51] focus:ring-offset-2 focus:ring-offset-[#000c39] whitespace-nowrap"
              >
                Get in Touch
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            {/* Copyright */}
            <p className="text-gray-400 font-['Wix_Madefor_Display',_sans-serif] text-sm">
              © 2025 Yes AI Group. All Rights Reserved.
            </p>
            
            {/* Sitemap */}
            <div className="text-gray-400 font-['Wix_Madefor_Display',_sans-serif] text-sm">
              <a href="/sitemap" className="hover:text-[#3eff51] transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}