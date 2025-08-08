import React from 'react'
// import { Timmana } from 'next/font/google'

// const timmana = Timmana({
//   variable: "--font-timmana",
//   subsets: ["latin"],
//   weight: ["400"],
// });

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-4 border-b border-white">
      <div className="flex items-center gap-8">
        <div><img src="/menu.svg" alt="Menu button" /></div>
        <div className='flex items-center gap-2'>
          <img src="/fintrackLogo.svg" alt="Fintrack Logo" />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <img src="/search.svg" alt="Search" />
        <img src="/app-grid.svg" alt="App Grid" />
        <img src="/profile.svg" alt="Profile Picture" />
      </div>
    </header>
  )
}

export default Navbar