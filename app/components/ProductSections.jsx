import Image from 'next/image'
import Link from 'next/link'

const ProductSections = () => {
  return (
    <div id="products" className="w-full px-4 sm:px-8 py-12 sm:py-16 bg-white">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
         <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl text-black font-bold">
                <span className="block xs:inline">Explore our product suite</span>{" "}
                <span className="block xs:inline">and discover our</span>{" "}
                <span className="block xs:inline">vision for web3</span>
                <br className="hidden sm:block" />
            </h2>
            <Link href="/products" className="inline-block ml-4">
              <button className="gradient-border-btn">
                <span>All Products</span>
              </button>
            </Link>
          </div>
       </div>


      {/* RE Product Section */}
      <div className="mb-12 sm:mb-20">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center">
          
          <div className="relative w-full lg:w-1/2 mx-auto rounded-[25px] overflow-hidden " style={{ maxWidth: '100%' }}>
            {/* SVG as background */}
            <div className="aspect-[4/3] sm:aspect-auto mt-4 sm:mt-7">
              <img
                src="/images/reframe.svg"
                alt="Background SVG"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay container */}
            <div className="absolute inset-0 flex flex-col justify-center p-4 xs:p-5 sm:p-7">
              <div className="mb-2 sm:mb-4">
                <span className="text-4xl sm:text-5xl font-black text-black">RE</span>
              </div>
              <p className="text-gray-700 mb-4 sm:mb-7 text-left text-xl xs:text-base sm:text-lg leading-tight xs:leading-6 sm:leading-7 max-w-[95%] sm:max-w-[90%]">
                A cutting-edge DEX protocol enabling seamless cross-chain
                and multi-chain trading across 10+ blockchains. The
                platform offers advanced DeFi features, including insurance,
                trading tools, analytics, and IBC, all powered by AI Agents.
              </p>
              <div className="flex flex-row justify-between mb-4 sm:mb-7 pr-4 sm:pr-6">
                <div>
                  <p className="text-xl sm:text-sm uppercase text-black font-medium">USERS</p>
                  <p className="text-3xl sm:text-3xl text-black font-bold">50K+</p>
                </div>
                <div>
                  <p className="text-xl sm:text-sm uppercase text-black font-medium">MONTHLY TRANSACTIONS</p>
                  <p className="text-3xl sm:text-3xl text-black font-bold">$100K+</p>
                </div>
              </div>
              <div>
                <Link href="https://www.roll.exchange" className="inline-block">
                  <button className="gradient-border-btn">
                    <span className='text-xl'>Connect Wallet</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-8 sm:mt-16 lg:mt-0">
            <Image
              src="/images/re.png"
              alt="RE Product"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* RA Product Section */}
      <div className="mb-12 sm:mb-20">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center">
          
          <div className="relative w-full lg:w-1/2 mx-auto rounded-[25px] overflow-hidden " style={{ maxWidth: '100%' }}>
            {/* SVG as background */}
            <div className="aspect-[4/3] sm:aspect-auto mt-4 sm:mt-7">
              <img
                src="/images/raframe.svg"
                alt="Background SVG"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay container */}
            <div className="absolute inset-0 flex flex-col justify-center p-4 xs:p-5 sm:p-7">
              <div className="mb-2 sm:mb-4">
                <span className="text-4xl sm:text-5xl font-black text-black">RA</span>
              </div>
              <p className="text-gray-700 mb-4 sm:mb-7 text-left text-xl xs:text-base sm:text-lg leading-tight xs:leading-6 sm:leading-7 max-w-[95%] sm:max-w-[90%]">
                RA is an advanced AI Agents solution developed by Roll Protocol, 
                designed to provide market intelligence, predictive analytics, 
                sentiment analysis, high frequency trading, insights and more.
              </p>
              <div className="flex flex-row justify-between mb-4 sm:mb-7 pr-4 sm:pr-6">
                <div>
                  <p className="text-xl sm:text-sm uppercase text-black font-medium">USERS</p>
                  <p className="text-3xl sm:text-3xl text-black font-bold">50K+</p>
                </div>
              </div>
              <div>
                <Link href="https://www.getrolling.ai" className="inline-block">
                  <button className="gradient-border-btn">
                    <span className='text-xl'>Learn More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-8 sm:mt-16 lg:mt-0">
            <Image
              src="/images/ra.png"
              alt="RA Product"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* R&D Section */}
      <div id="rd" className="mb-8 sm:mb-12">
        <h2 className="text-3xl xs:text-3xl sm:text-4xl text-black font-bold mb-4 sm:mb-8">
          Research & Development
        </h2>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          {/* Left Column - Stacked Cards */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">
            {/* MPC Card */}
            <div className="relative group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl md:mr-20 lg:mr-40">
              <div className="aspect-[16/9] w-full">
                <img
                  src="/images/cypher.png"
                  alt="Multi-party computation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                <span className="bg-white text-xl text-black font-medium px-2 py-1 rounded-full">
                  Cryptography
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 xs:p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <a 
                  href="https://medium.com/@rollprotocol/is-multi-party-computation-secure-218763b2fda1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block cursor-pointer"
                >
                  <h3 className="text-white text-3xl xs:text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                    Is multi-party computation secure?
                  </h3>
                </a>
              </div>
            </div>

            {/* SSI Card */}
            <div className="relative group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl md:mr-20 lg:mr-40">
              <div className="aspect-[16/9] w-full">
                <img
                  src="/images/identity.png"
                  alt="Self-sovereign identity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                <span className="bg-white text-xl text-black font-medium px-2 py-1 rounded-full">
                  Identity
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 xs:p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <a 
                  href="https://medium.com/@rollprotocol/how-self-sovereign-identity-ssi-is-redefining-digital-identity-in-the-age-of-decentralization-53bbd5321640" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block cursor-pointer"
                >
                  <h3 className="text-white text-3xl xs:text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                    How Self-Sovereign Identity (SSI) is redefining digital identity in the age of decentralization
                  </h3>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Extra Card */}
          <div className="w-full md:w-1/2 mt-4 sm:mt-0">
            <div className="relative h-full group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl">
              <div className="aspect-[9/16] md:aspect-auto w-full">
                <img
                  src="/images/sustain.png"
                  alt="Sustainable Computing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-white text-xl text-black font-medium px-2 py-1 rounded-2xl">
                  Sustain
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <a 
                  href="https://medium.com/@rollprotocol/harnessing-ai-and-blockchain-for-sustainable-computing-and-reduced-carbon-footprint-9c07a20eab4d" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block cursor-pointer"
                >
                <h3 className="text-white text-3xl sm:text-2xl md:text-4xl font-bold mb-2">
                  Harnessing AI and Blockchain for Sustainable Computing and Reduced Carbon Footprint
                </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          Rebuild. Reimagine
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Start over.
          <br />
          Build better.
        </h2>
        <p className="mb-8 max-w-md ml-0">
          The future of the Internet is open, decentralized, 
          and built for the next generation.
        </p>
        <a href="/careers" className="inline-block">
          <button className="gradient-border-btn">
            <span>View Careers</span>
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
            <a href="https://discord.gg/2fYC2AZe" target="_blank" className="text-black hover:text-gray-700" aria-label="Discord">
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
      <div className="bg-black rounded-xl text-white p-4 xs:p-6 mb-4 xs:mb-6">
        <div className="mb-2 text-xs xs:text-sm text-pink-500 font-medium">
          Rebuild. Reimagine
        </div>
        <h2 className="text-3xl xs:text-2xl font-bold mb-2 xs:mb-3">
          Start over.
          <br />
          Build better.
        </h2>
        <p className="text-2xl xs:text-sm mb-4 xs:mb-6">
          The future of the Internet is open, decentralized, 
          and built for the next generation.
        </p>
        <a href="/careers" className="inline-block">
          <button className="gradient-border-btn-mobile">
            <span className='text-xl'>View Careers</span>
          </button>
        </a>
      </div>

      {/* Footer card (blue card) - Update this to match image */}
      <div className="bg-blue-500 p-4 xs:p-6 text-black rounded-xl">
        {/* Logo */}
        <div className="mb-4 xs:mb-6">
          <img 
            src="/images/logo.svg" 
            alt="Roll Protocol Logo"
            className="w-16 xs:w-20 h-16 xs:h-20" 
          />
        </div>

        {/* Navigation links */}
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

        {/* Social icons & Subscribe */}
        <div className="mb-4 xs:mb-6">
          <h4 className="text-base xs:text-lg font-bold mb-2 xs:mb-3">Stay Connected</h4>
          <div className="flex flex-wrap gap-3 mb-4 xs:mb-6">
            <a href="https://www.x.com/roll_protocol" target="_blank" className="text-black hover:text-gray-700" aria-label="Twitter">
              <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-black hover:text-gray-700" aria-label="Facebook">
              <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.github.com/rollprotocol" target="_blank" className="text-black hover:text-gray-700" aria-label="GitHub">
              <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/rollprotocol" target="_blank" className="text-black hover:text-gray-700" aria-label="LinkedIn">
              <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://t.me/roll_protocol" target="_blank" className="text-black hover:text-gray-700" aria-label="Telegram">
              <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.325.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.041-.105-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
         <div className="mb-8">
          <input
            type="email"
            placeholder="Signup for free update"
            className="px-4 py-3 rounded-md w-full focus:outline-none border border-blue-300 bg-blue-400 text-xl text-black placeholder-black mb-2"
          />
          <button className="w-full bg-transparent border border-pink-500 text-black text-xl py-3 rounded-md">
            Subscribe
          </button>
        </div>
        </div>

        {/* Legal */}
        <div className="pt-4 border-t border-white/20 text-xs xs:text-sm flex flex-col xs:flex-row justify-between">
          <div className="flex space-x-4 mb-2 xs:mb-0">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
          <div>© 2023 Roll Protocol. All Rights Reserved.</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductSections 