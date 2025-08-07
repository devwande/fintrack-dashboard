import React from 'react'

interface SummaryCardProps {
  label: string
  value: string
  change: string
}

const SummaryCard = ({ label, value, change }: SummaryCardProps) => {
  return (
    <div className="bg-faint-green p-5 rounded-xl border border-none w-full sm:w-auto">
      <div className="text-md font-bold flex justify-between items-center">
        {label}
        <button className="text-2xl font-bold">⋯</button>
      </div>
      <div className="text-3xl font-bold mt-2">{value}</div>
      <div
        className={`text-sm mt-1 text-[#3E7383]`}
      >
        {change}
      </div>
    </div>
  )
}

export default SummaryCard