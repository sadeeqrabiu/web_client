import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './MobileMenu'

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sf-pro-rounded">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navigation */}
      <nav className="fixed bg-white w-full z-20 flex items-center justify-between px-4 sm:px-8 py-6">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Roll Protocol"
            width={150}
            height={50}
            className="cursor-pointer w-auto h-auto sm:w-[180px] md:w-[200px]"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex text-black font-bold text-2xl items-center space-x-8">
          <Link href="/products" className="hover:opacity-80">Products</Link>
          <Link href="/platforms"
           className="hover:opacity-80">Platforms & Protocols</Link>
          <Link href="/rd" className="hover:opacity-80">R&D</Link>
          <Link href="/careers" className="hover:opacity-80">Careers</Link>
          <Link href="/about" className="hover:opacity-80">About</Link>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center h-screen px-8">
        <div className="flex flex-col items-center">
          <h1 className="hero-title text-center text-4xl text-black font-bold md:text-6xl mb-0">
            The Internet Is Broken.
          </h1>
          <h2 className="hero-subtitle text-center text-5xl font-bold text-blue-500 md:text-7xl mt-0">
            We&apos;re Fixing IT.
          </h2>
          <p className="hero-description text-center max-w-[335px] text-base text-gray-800 mt-6 mb-8 sm:max-w-3xl">
            Today's internet is fragmented, insecure, and controlled by centralized powers. We're building a new paradigm—one where blockchain technology empowers users, secures data, and fosters true decentralization. Join us in shaping the future of the web.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex space-x-4">
            <Link 
              href="/explore"
              className="relative rounded-full px-8 py-3 text-white font-bold transition-all text-center"
            >
              <span className="relative z-10">Explore Products</span>
              <span className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#F72F41] via-[#698FF3] to-[#AEC1F3] p-[1px]" />
              <span className="absolute inset-[2px] rounded-full bg-blue-500" />
            </Link>
            <Link 
              href="/build"
              className="relative rounded-full px-8 py-3 text-black font-bold transition-all text-center"
            >
              <span className="relative z-10">Build With Us</span>
              <span className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#F72F41] via-[#698FF3] to-[#AEC1F3] p-[1px]" />
              <span className="absolute inset-[2px] rounded-full bg-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 