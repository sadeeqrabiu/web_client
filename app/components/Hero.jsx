import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './MobileMenu'

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sf-pro-rounded">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png" // Update with your actual background image path
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
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center mt-20 sm:mt-32">
        <h1 className="mb-4 text-3xl sm:text-4xl text-black font-bold md:text-6xl px-4 mt-20">
          The Internet Is Broken.
        </h1>
        <h2 className="mb-8 text-4xl sm:text-5xl font-bold text-blue-500 md:text-7xl px-4">
          We&apos;re Fixing IT.
        </h2>
        <p className="mb-12 max-w-3xl text-center text-base sm:text-lg text-gray-800 px-4">
          Today's internet is fragmented, insecure, and controlled by centralized powers. We're building a new paradigm—one where blockchain technology empowers users, secures data, and fosters true decentralization. Join us in shaping the future of the web.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col w-full px-4 sm:w-auto space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link 
            href="/explore"
            className="relative rounded-full px-8 py-3 text-white font-bold transition-all w-full sm:w-auto text-center"
          >
            <span className="relative z-10">Explore Products</span>
            <span className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#F72F41] via-[#698FF3] to-[#AEC1F3] p-[1px]" />
            <span className="absolute inset-[2px] rounded-full bg-blue-500" />
          </Link>
          <Link 
            href="/build"
            className="relative rounded-full px-8 py-3 text-black font-bold transition-all w-full sm:w-auto text-center"
          >
            <span className="relative z-10">Build With Us</span>
            <span className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#F72F41] via-[#698FF3] to-[#AEC1F3] p-[1px]" />
            <span className="absolute inset-[2px] rounded-full bg-white" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero 