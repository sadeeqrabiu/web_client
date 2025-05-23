import Image from 'next/image'
import Link from 'next/link'

const ProductsPage = () => {
  return (
    <div id="products" className="w-full px-4 sm:px-8 py-10 bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url("/images/products.png")' }}>
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="px-6 sm:px-12 md:px-16 lg:px-20 text-white">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">
              Our<br />
              Products
            </h1>
            <p className="max-w-lg text-xl sm:text-base mb-6">
              Our products are built for builders, Web3 enthusiasts, and those
              eager to explore a new internet—one that is more open, secure,
              and decentralized.
            </p>
          </div>
        </div>
      </div>

      {/* RE Product Section */}
      <div className="relative w-full px-4 sm:px-8 mt-10">
        {/* <div className="max-w-full mx-auto border border-black rounded-3xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl text-black font-extrabold mb-2">RE</h2>
              <h3 className="text-2xl mb-6 text-black font-bold">
                The world's leading decentralized exchange, enhanced by AI Agents.
              </h3>
              
              <div className="mb-6">
                <h4 className="text-red-500 font-semibold mb-4">Features</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-300 p-2 rounded-lg">
                      <Image src="/images/reDefi.svg" alt="DeFi Tools" width={24} height={24} />
                    </div>
                    <span className='text-black font-bold text-sm'>DeFi tools and Insurance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-300 p-2 rounded-lg">
                      <Image src="/images/reBlock.svg" alt="Analytics" width={24} height={24} />
                    </div>
                    <span className='text-black font-bold text-sm'>Blockchain Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-300 p-2 rounded-lg">
                      <Image src="/images/reAD.svg" alt="Trading Tools" width={24} height={24} />
                    </div>
                    <span className='text-black font-bold text-sm'>Advanced Trading Tools</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-300 p-2 rounded-lg">
                      <Image src="/images/reInter.svg" alt="IBC" width={35} height={24} />
                    </div>
                    <span className='text-black font-bold text-sm'>Inter Blockchain Communication Protocol (IBC)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-300 p-2 rounded-lg">
                      <Image src="/images/reMult.svg" alt="Multi-chain" width={28} height={24} />
                    </div>
                    <span className='text-black font-bold text-sm'>Multi-chain and Cross chain Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-300 p-2 rounded-lg">
                      <Image src="/images/reAI.svg" alt="AI Agents" width={80} height={50} />
                    </div>
                    <span className='text-black font-bold text-sm'>AI Agents for predictive analytics, market intelligence, sentiment analysis, high frequency trading and more.</span>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/connect"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
              >
                Connect Wallet
              </Link>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="w-full lg:w-3xl">
              <Image 
                src="/images/REP.png" 
                alt="Roll AI Dashboard" 
                width={300} 
                height={300} 
                className="rounded-lg w-full h-auto"
              />
            </div>
  
            </div>
          </div>
        </div> */}
        <div className="max-w-full mx-auto  rounded-3xl p-8 mb-12">
  <div className="flex flex-col lg:flex-row items-start gap-8">
    {/* Left Column */}
    <div className="w-full lg:w-1/2 space-y-6">
      {/* Title */}
      <h2 className="text-5xl font-extrabold text-black leading-tight">
        RE
      </h2>

      {/* Description */}
      <p className="text-xl text-justify  text-black max-w-md">
        A cutting‑edge DEX protocol enabling seamless cross‑chain and multi‑chain trading across 10+ blockchains. The platform offers advanced DeFi features, advanced trading tools, analytics, intelligence, IBC, all powered by AI Agents.
      </p>

      {/* Features */}
      <div className="space-y-4">
        <h4 className="text-red-500 font-semibold text-3xl">Features</h4>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {[
            ["reDefi.svg", "DeFi tools and Insurance"],
            ["reAD.svg", "Advanced Trading Tools"],
            ["reMult.svg", "Multi‑chain & Cross‑chain Support"],
            ["reBlock.svg", "Blockchain Analytics"],
            ["reInter.svg", "Inter‑Blockchain Comm. Protocol (IBC)"],
            ["reAI.svg", "AI Agents for predictive analytics, market intelligence, sentiment analysis, high‑frequency trading & more"],
          ].map(([icon, label]) => (
            <div key={label} className="flex items-center gap-3">
              <div className="bg-blue-300 p-3 rounded-lg">
                <Image src={`/images/${icon}`} width={24} height={24} alt="" />
              </div>
              <span className="text-black font-medium text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action */}
      <Link href="https://www.roll.exchange" className="inline-block">
                  <button className="gradient-border-btn">
                    <span className='text-xl'>Connect Wallet</span>
                  </button>
                </Link>
    </div>

    {/* Right Column */}
    <div className="w-full lg:w-1/2">
      <Image
        src="/images/REP.png"
        alt="RE Protocol UI"
        width={800}
        height={450}
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>
  </div>
</div>

        {/* Roll AI Product Section */}
        <div className="max-w-full mx-auto  rounded-3xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-3xl order-2 lg:order-1">
              <Image 
                src="/images/rollAI.png" 
                alt="Roll AI Dashboard" 
                width={500} 
                height={400} 
                className="rounded-lg w-full h-auto"
              />
            </div>
            
            <div className="w-full text-black lg:w-3/5 order-1 lg:order-2">
              <h2 className="text-4xl text-black font-extrabold mb-2">Rolling AI</h2>
              <p className="text-xl mb-4">
                RA, by Roll Protocol, is an advanced AI Agents solution that
                delivers enhanced security, market intelligence, predictive
                analytics, sentiment analysis, on-chain analytics, actionable
                insights and more.
              </p>
              
              <div className="mb-6">
                <h4 className="text-red-500 font-semibold mb-4 text-3xl">Features</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-300 p-2 rounded-lg text-xl">
                      <Image src="/images/raHigh.svg" alt="OnChain Analysis" width={24} height={24} />
                    </div>
                    <span className="text-sm font-medium">OnChain Analysis Agent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-300 p-2 rounded-lg">
                      <Image src="/images/raMarket.svg" alt="Market Intelligence" width={24} height={24} />
                    </div>
                    <span className="text-sm font-medium">Market Intelligence Agent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-300 p-2 rounded-lg">
                      <Image src="/images/raSen.svg" alt="Sentiment Analysis" width={24} height={24} />
                    </div>
                    <span className="text-sm font-medium">Sentiment Analysis Agent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-300 p-2 rounded-lg">
                      <Image src="/images/raPre.svg" alt="Predictive Analytics" width={24} height={24} />
                    </div>
                    <span className="text-sm font-medium">Predictive Analytics Agent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-300 p-2 rounded-lg">
                      <Image src="/images/raIntel.svg" alt="Advanced Security" width={24} height={24} />
                    </div>
                    <span className="text-sm font-medium">Advanced Security Agent</span>
                  </div>
                </div>
              </div>
              
              <Link href="https://www.getrolling.ai" className="inline-block">
                  <button className="gradient-border-btn">
                    <span className='text-xl'>Learn More</span>
                  </button>
                </Link>
            </div>
          </div>
        </div>
        
        {/* Research & Development Section */}
       
        {/* Careers and FooterSection */}

        {/* Desktop version */}
      <div className="hidden sm:block relative w-full overflow-hidden rounded-4xl"
      style={{
        backgroundImage: "url('/images/cxf.png')", // Update with your PNG path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} >
      {/* =====================
          Top (Careers) Section
         ===================== */}
      <div className="px-4 sm:px-8 py-16 md:w-1/2 text-white">
        <div 
          className="mb-2 font-bold text-transparent bg-clip-text"
          style={{
            background: 'linear-gradient(to right, #F72F41, #698FF3, #AEC1F3)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text'
          }}
        >
           Excited for more?
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Research &<br/>
        Development

        </h2>
        <p className="mb-8 max-w-md ml-0">
        Our research spans cryptography, distributed systems, economics, 
                programming languages, networking, zero-knowledge proofs, artificial 
                intelligence, and blockchain scalability—pushing the boundaries of 
                Web3 innovation.
        </p>
        <a href="/#rd" className="inline-block">
          <button className="gradient-border-btn">
            <span>View RD</span>
          </button>
        </a>
      </div>

      {/* =====================
          Bottom (Footer) Section
         ===================== */}
      <div className="px-4 sm:px-8 pb-16 text-black">
        {/* Top Row: Logo & Social */}
        <div className="flex flex-col md:flex-row">
          {/* Left: Logo & social media */}
          <div className="md:w-1/3 mb-10 mt-15 md:mb-0">
            <img 
              src="/images/logo.svg" 
              alt="Roll Protocol Logo" 
              className="w-24 h-24 mb-8"
            />
            <div>
              <h3 className="font-bold mb-2 text-2xl">
                Follow us on social media <br /> to stay up to date
              </h3>
            </div>
          </div>

          {/* Right: Navigation links */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 ml-50">
            <ul className="space-y-4 ml-50 font-bold text-2xl text-black">
              <li><a href="/about" className="hover:underline font-bold">About</a></li>
              <li><a href="#" className="hover:underline font-bold">Partners</a></li>
              <li><a href="#" className="hover:underline font-bold">News</a></li>
              <li><a href="#" className="hover:underline font-bold">Blog</a></li>
              <li><a href="/careers" className="hover:underline font-bold">Careers</a></li>
            </ul>
            <ul className="space-y-4 font-bold text-2xl">
              <li><a href="/products" className="hover:underline font-bold">Products</a></li>
              <li><a href="" className="hover:underline font-bold">Platforms &amp; Protocols</a></li>
              <li><a href="/#rd" className="hover:underline font-bold">Research &amp; Developments</a></li>
              <li><a href="#" className="hover:underline font-bold">Bug Bounty</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Newsletter & Legal */}
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Social media icons */}
          <div className="flex flex-wrap gap-4">
            {/* Social media icons with proper SVG paths */}
            <a href="https://www.x.com/roll_protocol" target="_blank" className="text-black hover:text-gray-700" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" target='_blank' className="text-black hover:text-gray-700" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.github.com/rollprotocol" target="_blank" className="text-black hover:text-gray-700" aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/rollprotocol" target="_blank" className="text-black hover:text-gray-700" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://t.me/roll_protocol" target="_blank" className="text-black hover:text-gray-700" aria-label="Telegram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.325.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.041-.105-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a href="#" target="_blank" className="text-black hover:text-gray-700" aria-label="Discord">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </a>
            <a href="mailto:info@rollprotocol.com" target="_blank" className="text-black hover:text-gray-700" aria-label="Email">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>

          {/* Signup form */}
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Signup for free update"
              className="gradient-border-input"
            />
            <button className="gradient-border-btn-outline ml-15">
              <span className='mr-25'>Subscribe</span>
            </button>
          </div>
        </div>

        {/* Legal links & copyright - with increased spacing */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="#" className="text-sm hover:underline">Privacy Policy</a>
              <a href="#" className="text-sm hover:underline">Terms of Conditions</a>
            </div>
            <span className="text-sm text-gray-600">© 2023 Roll Protocol. All Rights Reserved.</span>
          </div>
        </div>
      </div>
     
    </div>

    {/* Mobile version */}
    <div className="sm:hidden flex flex-col">
      {/* Careers card (dark card) */}
      <div className="bg-black rounded-xl text-white p-6 mb-6">
        <div className="mb-2 text-sm text-pink-500 font-medium">
        Excited for more?
        </div>
        <h2 className="text-3xl font-bold mb-3">
        Research &<br/>
        Development

        </h2>
        <p className="text-xl text-justify  mb-6">
        Our research spans cryptography, distributed systems, economics, 
                programming languages, networking, zero-knowledge proofs, artificial 
                intelligence, and blockchain scalability—pushing the boundaries of 
                Web3 innovation.
        </p>
        <a href="/careers" className="inline-block">
          <button className="gradient-border-btn-mobile">
            <span className='text-xl'>View RD</span>
          </button>
        </a>
      </div>

      {/* Footer card (blue card) - Update this to match image */}
      <div className="bg-blue-500 p-6 text-black rounded-xl">
        {/* Logo */}
        <div className="mb-6">
          <img 
            src="/images/logo.svg" 
            alt="Roll Protocol Logo" 
            className="w-16 h-16"
          />
        </div>
        
        <h3 className="font-bold mb-6 text-xl text-black">
          Follow us on social media<br />to stay up to date
        </h3>
        
        {/* Social icons in a row */}
        <div className="flex gap-6 mb-8">
          <a href="#" className="text-black" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="https://www.github.com/rollprotocol" className="text-black" aria-label="GitHub">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a href="mailto:info@rollprotocol.com" className="text-black" aria-label="Email">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          <a href="https://t.me/roll_protocol" className="text-black" aria-label="Telegram">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.325.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.041-.105-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>
          <a href="#" className="text-black" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/rollprotocol" className="text-black" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
        
        {/* Navigation - 2 column grid */}
        <div className="grid grid-cols-2 gap-y-5 mb-8 text-xl">
          <a href="/about" className="font-medium">About</a>
          <a href="/products" className="font-medium">Products</a>
          <a href="#" className="font-medium">Partners</a>
          <a href="#" className="font-medium">Platforms & Protocols</a>
          <a href="#" className="font-medium">News</a>
          <a href="/#rd" className="font-medium">Research & Developments</a>
          <a href="#" className="font-medium">Blog</a>
          <a href="#" className="font-medium">Bug Bounty</a>
          <a href="/careers" className="font-medium">Careers</a>
        </div>
        
        {/* Subscription form */}
        <div className="mb-8 text-xl">
          <input
            type="email"
            placeholder="Signup for free update"
            className="px-4 py-3 rounded-md w-full focus:outline-none border border-blue-300 bg-blue-400 text-black placeholder-black mb-2"
          />
          <button className="w-full bg-transparent border border-pink-500 text-black py-3 rounded-md text-xl">
            Subscribe
          </button>
        </div>
        
        {/* Legal */}
        <div className="flex justify-between text-xs text-black pt-4 border-t border-blue-400">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Conditions</a>
        </div>
        <div className="text-xs text-black mt-4">
          © 2023 Roll Protocol. All Rights Reserved.
        </div>
      </div>
    </div>
    </div>

    </div>
  )
}

export default ProductsPage 