"use client";
import Layout from "@/components/Layout";
import SummaryCard from "@/components/SummaryCard";
import { useEffect, useMemo, useState } from "react";
import AvatarGroup from "@/components/AvatarGroup";
import { Transaction } from "@/types";
import TransactionTable from "@/components/TransactionTable";
import { Public_Sans } from "next/font/google";
import Image from "next/image";
import LoadingSkeleton from "@/components/skeletons/LoadingSkeleton";
import SummaryCardSkeleton from "@/components/skeletons/SummaryCardSkeleton";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Page = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "transactions">(
    "overview"
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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

  // Filter transactions based on search query
  const filteredTransactions = useMemo(() => {
    if (!searchQuery.trim()) return transactions;

    const query = searchQuery.toLowerCase().trim();
    return transactions.filter(
      (transaction) =>
        transaction.remark.toLowerCase().includes(query) ||
        transaction.type.toLowerCase().includes(query) ||
        transaction.currency.toLowerCase().includes(query) ||
        transaction.date.includes(query) ||
        transaction.amount.toString().includes(query)
    );
  }, [searchQuery, transactions]);

//This is just to simulate the loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Layout onSearch={handleSearch} searchQuery={searchQuery}>
      <div className={`${publicSans.className} space-y-6`}>
        {/* Header Section */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex justify-between items-center w-full md:w-auto">
              <div className="flex items-center gap-2 md:gap-4">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Wallet Ledger
                  </h1>
                  <Image
                    src="/arrow.svg"
                    alt="Drop-down Arrow"
                    width={3}
                    height={3}
                    className="h-3 w-3 cursor-pointer"
                  />
                </div>
                <div className="flex items-center gap-2 px-2 md:px-3 py-1 bg-faint-green rounded-full">
                  <div className="w-2 h-2 bg-[#087A2E] rounded-full"></div>
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    Active
                  </span>
                </div>
              </div>

              <div>
                <button
                  className="py-2 px-4 md:px-6 bg-[#4B8B9F]
                                 text-sm font-medium rounded-full
                                 transition-colors duration-200 shadow-sm cursor-pointer hidden max-md:block"
                >
                  Share
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <button
                className="py-2 px-4 md:px-6 bg-[#4B8B9F]
                               text-sm font-medium rounded-full 
                               transition-colors duration-200 shadow-sm cursor-pointer max-md:hidden"
              >
                Share
              </button>
              <button
                className="p-2 border-2 border-light-gray rounded-full 
                               hover:bg-light-gray transition-colors duration-200 max-ls:hidden"
              >
                <Image
                  src="/union.svg"
                  alt="Union icon"
                  width={4}
                  height={4}
                  className="w-4 h-4 cursor-pointer"
                />
              </button>
            </div>
          </div>

          <AvatarGroup />

          {/* Tab Navigation */}
          <div className="w-full flex gap-6 md:gap-8 border-b border-gray-200 overflow-x-auto">
            <button
              className={`pb-2 px-5 border-b-2 text-sm md:text-base whitespace-nowrap ${
                activeTab === "overview"
                  ? "border-[#437D8E] text-[#437D8E] font-medium"
                  : "border-transparent text-[#15272D]"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`pb-2 px-5 border-b-2 text-sm md:text-base whitespace-nowrap ${
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

        {/* Content */}
        {activeTab === "overview" && (
          <div className="space-y-6 md:space-y-8">
            {/* Summary Section */}
            <section>
              <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-gray-900">
                Summary
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {isLoading ? (
                  <>
                    <SummaryCardSkeleton />
                    <SummaryCardSkeleton />
                    <SummaryCardSkeleton />
                    <SummaryCardSkeleton />
                  </>
                ) : (
                  <>
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
                    <SummaryCard label="Total Debits" value="$4,455" change="-2%" />
                    <SummaryCard label="Transactions" value="150" change="+10%" />
                  </>
                )}
              </div>
            </section>

            <section>
              {isLoading ? (
                <LoadingSkeleton />
              ) : (
                <TransactionTable
                  transactions={filteredTransactions}
                  searchQuery={searchQuery}
                />
              )}
            </section>
          </div>
        )}

        {activeTab === "transactions" && (
          <section>
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                All Transactions
              </h2>
              <div className="text-sm text-gray-600">
                {filteredTransactions.length} transactions
                {searchQuery && ` (filtered from ${transactions.length})`}
              </div>
            </div>
            {isLoading ? (
              <LoadingSkeleton />
            ) : (
              <TransactionTable
                transactions={filteredTransactions}
                searchQuery={searchQuery}
              />
            )}
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Page;
