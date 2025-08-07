'use client'
import React, { useState } from 'react'
import { Public_Sans } from 'next/font/google'

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const Sidebar = () => {
  const [active, setActive] = useState('Dashboard')

  const navItems = ['Dashboard', 'Transactions', 'Reports', 'Settings']

  return (
    <aside className="w-[320px] min-h-screen border-r border-white hidden md:flex flex-col px-4">
      <nav className="space-y-4 flex flex-col text-sm">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`${publicSans.className} text-left px-3 py-2 rounded-full transition-colors ${
              active === item
                ? 'text-[#386776] bg-[#8DC3D4]'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
