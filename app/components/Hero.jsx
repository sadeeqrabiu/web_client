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
          sizes="100vw"
          quality={100}
          className="object-cover"
          priority
        />
      </div>

      {/* Navigation */}
      <nav className="fixed bg-white w-full z-20 flex items-center justify-between px-4 sm:px-8 py-6">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo3.png"
              alt="Roll Protocol"
              width={150}
              height={50}
              className="cursor-pointer w-80 h-25 xs:w-40 xs:h-16 sm:w-[180px] sm:h-auto md:w-[200px]"
              priority
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex text-black font-bold text-2xl items-center space-x-10">
          <Link href="/products" className="hover:opacity-80">Products</Link>
          <a href="#products" className="hover:opacity-80">Platforms & Protocols</a>
          <a href="/#rd" className="hover:opacity-80">R&D</a>
          <Link href="/careers" className="hover:opacity-80">Careers</Link>
          <Link href="/about" className="hover:opacity-80">About</Link>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center h-screen px-8">
        <div className="flex flex-col items-center">
          <h1 className="hero-title hero-title-desktop text-center text-black font-extrabold text-3xl xs:text-3xl mb-2 md:text-5xl lg:text-6xl">
            The Internet Is Broken.
          </h1>
          <h2 className="hero-subtitle hero-subtitle-desktop text-center font-extrabold text-blue-500 text-6xl xs:text-3xl sm:text-3xl mb-2 md:text-6xl lg:text-8xl mt-0">
            We&apos;re Fixing IT.
          </h2>
          <p className="hero-description hero-description-desktop text-center text-gray-800 text-1xl xs:text-sm sm:text-base font-medium mt-4 mb-8 sm:max-w-3xl md:text-lg max-w-[335px] mx-auto">
            Today's internet is fragmented, insecure, and controlled by centralized powers. We&apos;re building a new paradigm—one where blockchain technology empowers users, secures data, and fosters true decentralization. Join us in shaping the future of the web.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex space-x-4">
            <Link 
              href="/products"
              className="relative rounded-full px-8 py-3 text-white font-bold transition-all text-center"
            >
              <span className="relative z-10">Explore Products</span>
              <span className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#F72F41] via-[#698FF3] to-[#AEC1F3] p-[1px]" />
              <span className="absolute inset-[2px] rounded-full bg-blue-500" />
            </Link>
            <Link 
              href="/products"
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