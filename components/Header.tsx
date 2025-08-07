import React from 'react'
import { Timmana } from 'next/font/google'

const timmana = Timmana({
  variable: "--font-timmana",
  subsets: ["latin"],
  weight: ["400"],
});

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 border-b border-white">
      <div className="flex items-center gap-8">
        <div><img src="/menu.svg" alt="Menu button" /></div>
        <div className='flex items-center gap-2'>
          <img src="/logo.svg" alt="Fintrack Logo" />
          <h1 className={`${timmana.className} text-2xl text-[#437D8E] `}>FinTrack</h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <img src="/search.svg" alt="Search" />
        <img src="/app-grid.svg" alt="App Grid" />
        <img src="/profile.svg" alt="Profile Picture" />
      </div>
    </header>
  )
}

export default Header