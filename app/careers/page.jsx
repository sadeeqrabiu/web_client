import Link from 'next/link'
import Image from 'next/image'
import CareersPage from '../components/CareersPage'
import MobileMenu from '../components/MobileMenu'

export default function Careers() {
  return (
    <main>
      {/* Navigation Bar Only */}
      <nav className="fixed bg-white w-full z-20 flex items-center justify-between px-4 sm:px-8 py-6">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Roll Protocol"
              width={150}
              height={50}
              className="cursor-pointer w-auto h-auto sm:w-[180px] md:w-[200px]"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex text-black font-bold text-xl items-center ml-6 space-x-10">
          <Link href="/products" className="hover:opacity-80">Products</Link>
          <a href="#products" className="hover:opacity-80">Platforms & Protocols</a>
          <a href="/#rd" className="hover:opacity-80">R&D</a>
          <Link href="/careers" className="hover:opacity-80">Careers</Link>
          <Link href="/about" className="hover:opacity-80">About</Link>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </nav>
      
      {/* Add spacing to account for the fixed navigation bar */}
      <div className="pt-20"></div>
      
      <CareersPage />
    </main>
  )
} 