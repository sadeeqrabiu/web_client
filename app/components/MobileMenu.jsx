"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black p-2"
      >
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div 
        className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-white text-black p-4 shadow-lg flex flex-col z-50 transform transition-transform duration-900 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6 xs:mb-8">
          <Link href="/">
            <Image
              src="/images/logo3.png"
              alt="Roll Protocol"
              width={150}
              height={50}
              className="cursor-pointer w-58 h-18 xs:w-40 xs:h-16 sm:w-[180px] sm:h-8 md:w-[200px]"
              priority
            />
          </Link>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-black p-2"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-3 xs:space-y-8 mt-2 xs:mt-15 overflow-y-auto">
          <Link href="/products" className="font-bold text-2xl xs:text-3xl sm:text-2xl leading-relaxed hover:opacity-80">Products</Link>
          <a href="#products" onClick={() => setIsOpen(false)} className="font-bold text-2xl xs:text-3xl sm:text-2xl leading-relaxed hover:opacity-80">Platforms & Protocols</a>
          <a href="/#rd" onClick={() => setIsOpen(false)} className="font-bold text-2xl xs:text-3xl sm:text-2xl leading-relaxed hover:opacity-80">Research and Development</a>
          <Link href="/careers" className="font-bold text-2xl xs:text-3xl sm:text-2xl leading-relaxed hover:opacity-80">Careers</Link>
          <Link href="/about" className="font-bold text-2xl xs:text-3xl sm:text-2xl leading-relaxed hover:opacity-80">About</Link>
          <Link href="/blog" className="font-bold text-2xl xs:text-3xl sm:text-2xl leading-relaxed hover:opacity-80">Blog</Link>
          <Link href="/press" className="font-bold text-2xl xs:text-3xl sm:text-2xl leading-relaxed hover:opacity-80">News</Link>
          <Link href="/privacy" className="text-lg xs:text-xl sm:text-2xl leading-relaxed hover:opacity-80">Privacy Policy</Link>
          <Link href="/terms" className="text-lg xs:text-xl sm:text-2xl leading-relaxed hover:opacity-80">Terms of Service</Link>
          
          <div className="border-t border-blue-600 pt-4">
            <div className="flex flex-col xs:flex-row items-center rounded-md overflow-hidden bg-blue-100 mt-4">
              <input 
                type="email" 
                placeholder="Signup for free update" 
                className="w-full flex-grow px-4 py-3 bg-blue-100 text-gray-800 outline-none text-sm xs:text-base" 
              />
              <button className="w-full xs:w-auto bg-blue-600 text-white px-4 xs:px-8 py-3 font-medium text-sm xs:text-base mt-2 xs:mt-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 