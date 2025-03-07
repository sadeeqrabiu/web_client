"use client"

import { useState } from 'react'
import Link from 'next/link'

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

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white text-black p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link href="/products" className="hover:opacity-80">Products</Link>
            <Link href="/platforms" className="hover:opacity-80">Platforms & Protocols</Link>
            <Link href="/rd" className="hover:opacity-80">R&D</Link>
            <Link href="/careers" className="hover:opacity-80">Careers</Link>
            <Link href="/about" className="hover:opacity-80">About</Link>
          </div>
        </div>
      )}
    </div>
  )
} 