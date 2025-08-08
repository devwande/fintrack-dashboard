import React from "react";
import Image from "next/image";

interface SummaryCardProps {
  label: string;
  value: string;
  change: string;
}

const SummaryCard = ({ label, value, change }: SummaryCardProps) => {
  return (
    <div
      className="bg-faint-green p-4 md:p-5 rounded-xl border-none w-full 
                    hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
    >
      <div className="text-sm md:text-md font-semibold flex justify-between items-center text-gray-700">
        <span className="truncate pr-2">{label}</span>
        <Image
          src="/union.svg"
          alt="Union Icon"
          width={16}
          height={16}
          className="w-4 h-4 flex-shrink-0"
        />
      </div>
      <div className="text-2xl md:text-3xl font-bold mt-3 md:mt-4 text-gray-900">
        {value}
      </div>
      <div className={`text-xs md:text-sm mt-1 font-medium text-[#087A2E]`}>
        {change}
      </div>
    </div>
  );
};

export default SummaryCard;
