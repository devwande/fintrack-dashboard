"use client";
import Layout from "@/components/Layout";
import SummaryCard from "@/components/SummaryCard";
import { useState } from "react";
import AvatarGroup from "@/components/AvatarGroup";

const index = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "transactions">(
    "overview"
  );

  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-2xl font-semibold">Wallet Ledger</h1>
            <span className="px-2 py-1 text-sm bg-green-100 text-green-700 rounded-full">
              Active
            </span>
          </div>
          <AvatarGroup />
        </div>

        <div className="flex gap-4 border-b border-gray-200 mt-2 md:mt-0">
          <button
            className={`pb-2 border-b-2 text-sm ${
              activeTab === "overview"
                ? "border-blue-600 text-blue-600 font-medium"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`pb-2 border-b-2 text-sm ${
              activeTab === "transactions"
                ? "border-blue-600 text-blue-600 font-medium"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("transactions")}
          >
            Transactions
          </button>
        </div>
      </div>

      {activeTab === "overview" && (
        <>
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <SummaryCard
                label="Total Balance"
                value="$12,345"
                change="5%"
                changeType="positive"
              />
              <SummaryCard
                label="Total Credits"
                value="$7,890"
                change="3%"
                changeType="positive"
              />
              <SummaryCard
                label="Total Debits"
                value="$4,455"
                change="2%"
                changeType="negative"
              />
              <SummaryCard
                label="Transactions"
                value="150"
                change="10%"
                changeType="positive"
              />
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default index;
