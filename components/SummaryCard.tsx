import React from 'react'

interface SummaryCardProps {
  label: string
  value: string
  change: string
  changeType: 'positive' | 'negative'
}

const SummaryCard = ({ label, value, change, changeType }: SummaryCardProps) => {
  return (
    <div className="bg-gray-50 p-4 rounded-xl border w-full sm:w-auto">
      <div className="text-sm text-gray-500 flex justify-between items-center">
        {label}
        <button className="text-gray-400 text-lg">⋯</button>
      </div>
      <div className="text-2xl font-semibold mt-2">{value}</div>
      <div
        className={`text-sm mt-1 ${
          changeType === 'positive' ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {changeType === 'positive' ? '+' : ''}
        {change}
      </div>
    </div>
  )
}

export default SummaryCard