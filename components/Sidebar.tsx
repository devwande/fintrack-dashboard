import React from 'react'

const Sidebar = () => {
  return (
    <aside className="w-60 min-h-screen bg-gray-50 border-r hidden md:flex flex-col py-6 px-4">
      <div className="text-xl font-semibold mb-8 text-blue-700">FinTrack</div>
      <nav className="space-y-4 flex flex-col text-sm">
        <a href="#" className="text-blue-700 font-medium">Dashboard</a>
        <a href="#">Transactions</a>
        <a href="#">Reports</a>
        <a href="#">Settings</a>
      </nav>
    </aside>
  )
}

export default Sidebar