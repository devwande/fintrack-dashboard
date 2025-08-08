"use client";
import Layout from "@/components/Layout";
import SummaryCard from "@/components/SummaryCard";
import { useState } from "react";
import AvatarGroup from "@/components/AvatarGroup";
import { Transaction } from "@/types";
import TransactionTable from "@/components/TransactionTable";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const index = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "transactions">(
    "overview"
  );

  const transactions: Transaction[] = [
    {
      id: "1",
      date: "2023-10-01",
      remark: "Salary",
      amount: 3000,
      currency: "USD",
      type: "Credit",
    },
    {
      id: "2",
      date: "2023-10-02",
      remark: "Groceries",
      amount: -150,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "3",
      date: "2023-10-03",
      remark: "Gym Membership",
      amount: -50,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "4",
      date: "2023-10-04",
      remark: "Dinner",
      amount: -40,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "5",
      date: "2023-10-05",
      remark: "Movie Tickets",
      amount: -30,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "6",
      date: "2023-10-06",
      remark: "Rent",
      amount: -1200,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "7",
      date: "2023-10-07",
      remark: "Utilities",
      amount: -100,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "8",
      date: "2023-10-08",
      remark: "Car Payment",
      amount: -400,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "9",
      date: "2023-10-09",
      remark: "Insurance",
      amount: -200,
      currency: "USD",
      type: "Debit",
    },
  ];

  return (
    <Layout>
      <div
        className={`${publicSans.className} flex md:flex-row md:items-center justify-between mb-4 gap-2`}
      >
        <div className="w-full space-y-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-semibold">Wallet Ledger </h1>
                <img src="/arrow.svg" alt="Drop-down Arrow" />
              </div>

              <div className="flex items-center gap-2 px-2 py-1 bg-faint-green rounded-full">
                <div className="p-[3] bg-[#087A2E] rounded-full"></div>
                <h1 className="text-sm">Active</h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="py-2 px-4 bg-[#4B8B9F] rounded-3xl">Share</button>
              <img src="/union.svg" alt="Union icon" className="py-4 px-3 border-2 border-light-gray rounded-full"/>
            </div>
          </div>



          <div>
            <AvatarGroup />
          </div>

          <div className="w-full flex gap-4 border-b border-gray-200 mt-2 md:mt-0">
            <button
              className={`pb-2 px-5 border-b-2 text-sm ${
                activeTab === "overview"
                  ? "border-[#437D8E] text-[#437D8E] font-medium"
                  : "border-transparent text-[#15272D]"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`pb-2 px-5 border-b-2 text-sm ${
                activeTab === "transactions"
                  ? "border-[#437D8E] text-[#437D8E] font-medium"
                  : "border-transparent text-[#15272D]"
              }`}
              onClick={() => setActiveTab("transactions")}
            >
              Transactions
            </button>
          </div>
        </div>
      </div>

      {activeTab === "overview" && (
        <>
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <SummaryCard
                label="Total Balance"
                value="$12,345"
                change="+5%"
              />
              <SummaryCard
                label="Total Credits"
                value="$7,890"
                change="+3%"
              />
              <SummaryCard
                label="Total Debits"
                value="$4,455"
                change="-2%"
              />
              <SummaryCard
                label="Transactions"
                value="150"
                change="+10%"
              />
            </div>
          </section>

          <section>
            <TransactionTable transactions={transactions} />
          </section>
        </>
      )}
    </Layout>
  );
};

export default index;
