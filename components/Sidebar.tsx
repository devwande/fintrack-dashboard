"use client";
import React, { useState } from "react";
import { Public_Sans } from "next/font/google";
import Link from "next/link";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [active, setActive] = useState("Dashboard");

  const menu = [
    { id: "dashboard", label: "Dashboard", href: "/#" },
    { id: "transactions", label: "Transactions", href: "#" },
    { id: "report", label: "Report", href: "#" },
    { id: "settings", label: "Settings", href: "#" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed md:static inset-y-0 left-0 z-50 w-64 bg-white
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        ${isOpen ? "md:block" : "md:hidden"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 md:hidden">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Sidebar Content */}
          <nav className="space-y-2 flex flex-col text-sm px-3">
            {menu.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  if (item.href === "#") e.preventDefault();
                }}
                className={`${
                  publicSans.className
                } text-left px-4 py-3 rounded-full transition-all duration-200 ${
                  active === item.label
                    ? "text-[#386776] bg-light-green shadow-sm"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#386776]"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
