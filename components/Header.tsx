import React from 'react'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 border-b">
      <div className="flex items-center gap-4">
        <button className="md:hidden">☰</button>
        <h1 className="text-lg font-semibold">Wallet Ledger</h1>
        <span className="text-sm px-2 py-1 bg-green-100 text-green-700 rounded-full">Active</span>
      </div>

      <div className="flex items-center gap-4">
        <button>🔍</button>
        <button>📦</button>
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  )
}

export default Header