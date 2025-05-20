import ProductsPage from '../components/ProductsPage'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from '../components/MobileMenu'

export default function Products() {
  return (
    <main>
      {/* Navigation Bar Only */}
      <nav className="fixed bg-white w-full z-20 flex items-center justify-between px-4 sm:px-8 py-6">
      <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo3.png"
              alt="Roll Protocol"
              width={150}
              height={50}
              className="cursor-pointer w-58 h-18 xs:w-40 xs:h-16 sm:w-[180px] sm:h-auto md:w-[200px]"
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
      
      {/* Add spacing to account for the fixed navigation bar */}
      <div className="pt-20"></div>
      
      <ProductsPage />
    </main>
  )
} 