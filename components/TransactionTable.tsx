"use client";
import { useState } from "react";
import { Transaction } from "@/types";


interface Props {
  transactions: Transaction[]
}

type SortKey = 'date' | 'remark' | 'amount' | 'type'

const TransactionTable = ({transactions}: Props) => {
  const [sortKey, setSortKey] = useState<SortKey>('date')
  const [asc, setAsc] = useState<boolean>(true)

  const sorted = [...transactions].sort((a, b) => {
    const aVal = a[sortKey]
    const bVal = b[sortKey]

    if (aVal < bVal) return asc ? -1 : 1
    if (aVal > bVal) return asc ? 1 : -1
    return 0
  })

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setAsc(!asc)
    } else {
      setSortKey(key)
      setAsc(true)
    }
  }
  return (
    <div className="overflow-x-auto border rounded-xl">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-gray-600 text-left">
          <tr>
            <th className="p-3 cursor-pointer" onClick={() => toggleSort('date')}>Date</th>
            <th className="p-3 cursor-pointer" onClick={() => toggleSort('remark')}>Remark</th>
            <th className="p-3 cursor-pointer" onClick={() => toggleSort('amount')}>Amount</th>
            <th className="p-3">Currency</th>
            <th className="p-3 cursor-pointer" onClick={() => toggleSort('type')}>Type</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map(tx => (
            <tr key={tx.id} className="border-t">
              <td className="p-3">{tx.date}</td>
              <td className="p-3">{tx.remark}</td>
              <td className="p-3">
                {tx.amount < 0 ? '-' : ''}
                ${Math.abs(tx.amount).toLocaleString()}
              </td>
              <td className="p-3">{tx.currency}</td>
              <td className="p-3">
                <span
                  className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs ${
                    tx.type === 'Credit'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current" />
                  {tx.type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionTable