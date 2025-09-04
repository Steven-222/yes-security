import Image from 'next/image'

// Asset imports
const blogCard1 = "/assets/Our-blog/bd45a5562cc0c15de3bd76b2c151d8d13be16b47.png"
const blogCard2 = "/assets/Our-blog/daf60d19c244d97cb75bbaa461bb6fea7d4d7aad.png"
const blogCard3 = "/assets/Our-blog/d81a7a5fef5b16de78e91dad905785f41b73d3ea.png"

interface OurBlogProps {
  className?: string
}

const blogPosts = [
  {
    id: 1,
    title: "Securing the Future Trends & Threats in IT Security",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris",
    image: blogCard1,
    link: "/blog/securing-future-trends-threats"
  },
  {
    id: 2,
    title: "Behind the Firewall Real World Cyber Defense Tactics",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris",
    image: blogCard2,
    link: "/blog/behind-firewall-defense-tactics"
  },
  {
    id: 3,
    title: "Zero Trust, Full Control Modern Security Strategies",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris",
    image: blogCard3,
    link: "/blog/zero-trust-modern-strategies"
  }
]

export default function OurBlog({ className = "" }: OurBlogProps) {
  return (
    <section 
      className={`full-bleed relative bg-black py-14 ${className}`}
      aria-label="Latest blog posts"
    >
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <h2 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[58px] mb-6 sm:mb-0">
            Our Blog
          </h2>
          <button 
            className="bg-[#3eff51] text-black font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base px-[18px] py-3.5 rounded-[41px] hover:bg-[#35e047] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3eff51] focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="View all blog posts"
          >
            View All
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="group relative bg-black rounded-xl overflow-hidden border border-[#1e3a8a]/40 hover:border-[#20dbff]/60 transition-all duration-300 h-[335px] hover:shadow-lg hover:shadow-[#20dbff]/20"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient Overlay with blue tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/80 to-slate-800/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1e3a8a]/10 to-[#20dbff]/5" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <div className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-medium text-xl sm:text-2xl lg:text-[24px] leading-[32px] line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-white font-['Kumbh_Sans',_sans-serif] font-normal text-base leading-[22px] line-clamp-3 opacity-90">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <a 
                    href={post.link}
                    className="inline-flex items-center text-white font-['Wix_Madefor_Display',_sans-serif] font-normal text-base leading-[22px] hover:text-[#3eff51] transition-colors duration-200 group-hover:translate-x-1 transform"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}