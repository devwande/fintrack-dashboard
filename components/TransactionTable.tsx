"use client";
import { useState } from "react";
import { Transaction } from "@/types";
import Image from "next/image";

interface Props {
  transactions: Transaction[];
}

type SortKey = "date" | "remark" | "amount" | "type";

const TransactionTable = ({ transactions }: Props) => {
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [asc, setAsc] = useState<boolean>(true);

  const sorted = [...transactions].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];

    if (aVal < bVal) return asc ? -1 : 1;
    if (aVal > bVal) return asc ? 1 : -1;
    return 0;
  });

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setAsc(!asc);
    } else {
      setSortKey(key);
      setAsc(true);
    }
  };

  const HeaderCell = ({
    label,
    keyName,
    clickable = true,
  }: {
    label: string;
    keyName?: SortKey;
    clickable?: boolean;
  }) => {
    const isActive = !!keyName && sortKey === keyName;
    return (
      <th
        className={`p-3 w-auto ${clickable ? "cursor-pointer" : ""}`}
        onClick={clickable && keyName ? () => toggleSort(keyName) : undefined}
      >
        <div className="flex items-center gap-2">
          {label}
          <Image
            src="/chevronDown.svg"
            alt="Sort icon"
            className={`w-2 h-2 transition-transform duration-200 ${
              isActive ? (asc ? "rotate-0" : "rotate-180") : ""
            }`}
          />
        </div>
      </th>
    );
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="hidden md:block">
          <table className="min-w-full text-sm">
            <thead className="text-light-gray text-left">
              <tr>
                <HeaderCell label="Date" keyName="date" />
                <HeaderCell label="Remark" keyName="remark" />
                <HeaderCell label="Amount" keyName="amount" />
                {/* Currency: shows arrow but not clickable/sortable */}
                <HeaderCell label="Currency" clickable={false} />
                <HeaderCell label="Type" keyName="type" />
              </tr>
            </thead>
            <tbody>
              {sorted.map((tx) => (
                <tr key={tx.id} className="border-t-2 border-light-gray">
                  <td className="p-3 w-[50%]">{tx.date}</td>
                  <td className="p-3 w-[12.5%]">{tx.remark}</td>
                  <td className="p-3 w-[8%] text-black">
                    {tx.amount < 0 ? "-" : ""}$
                    {Math.abs(tx.amount).toLocaleString()}
                  </td>
                  <td className="p-3 w-[8%]">{tx.currency}</td>
                  <td className="p-3 w-[8%]">
                    <span className="bg-faint-green inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs text-black">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          tx.type === "Credit" ? "bg-[#087A2E]" : "bg-[#C6381B]"
                        }`}
                      />
                      {tx.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {/* Mobile Sort Dropdown */}
          <div className="mb-4">
            <select
              value={`${sortKey}-${asc ? "asc" : "desc"}`}
              onChange={(e) => {
                const [key, direction] = e.target.value.split("-");
                setSortKey(key as SortKey);
                setAsc(direction === "asc");
              }}
              className="w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none  bg-white text-sm"
            >
              <option value="date-desc">Date (Newest First)</option>
              <option value="date-asc">Date (Oldest First)</option>
              <option value="remark-asc">Remark (A-Z)</option>
              <option value="remark-desc">Remark (Z-A)</option>
              <option value="amount-desc">Amount (High to Low)</option>
              <option value="amount-asc">Amount (Low to High)</option>
              <option value="type-asc">Type (Credit First)</option>
              <option value="type-desc">Type (Debit First)</option>
            </select>
          </div>

          <div className="">
            {sorted.map((tx) => (
              <div
                key={tx.id}
                className="p-4 border-t-2 border-light-gray hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {tx.remark}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{tx.date}</p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-sm font-semibold text-gray-900">
                      {tx.amount < 0 ? "-" : ""}$
                      {Math.abs(tx.amount).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">{tx.currency}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="bg-faint-green inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        tx.type === "Credit" ? "bg-[#087A2E]" : "bg-[#C6381B]"
                      }`}
                    />
                    {tx.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
