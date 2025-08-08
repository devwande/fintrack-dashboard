"use client";
import React, { useState } from "react";
import Image from "next/image";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery("");
    }
  };

  return (
    <header className="flex items-center justify-between py-4 px-4 md:px-6 relative z-50">
      <div className="flex items-center gap-4 md:gap-8">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
        >
          <Image src="/menu.svg" alt="Menu button" className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <Image
            src="/fintrackLogo.svg"
            alt="Fintrack Logo"
            className="h-6 md:h-8"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        {/* Search Animation Container */}
        <div className="relative flex items-center">
          <div
            className={`
            absolute right-0 top-1/2 -translate-y-1/2 
            transition-all duration-300 ease-in-out
            ${
              isSearchOpen
                ? "w-32 sm:w-64 md:w-80 opacity-100"
                : "w-0 opacity-0"
            }
            overflow-hidden
          `}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search transactions..."
              className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-full 
                       focus:outline-none focus:ring-2 focus:ring-white 
                       bg-white"
              autoFocus={isSearchOpen}
            />
          </div>
          <button
            onClick={toggleSearch}
            className={`
              p-2 rounded-lg transition-all duration-300
              ${isSearchOpen ? "bg-[#437D8E]" : ""}
              relative z-10
            `}
          >
            <Image
              src="/search.svg"
              alt="Search"
              className={`w-5 h-5 transition-all duration-300 ${
                isSearchOpen ? "filter brightness-0 invert " : ""
              }`}
            />
          </button>
        </div>

        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors hidden md:block">
          <Image src="/app-grid.svg" alt="App Grid" className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Image
            src="/profile.svg"
            alt="Profile Picture"
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </button>
      </div>

      {/* Search Overlay for Mobile */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 md:hidden z-40"
          onClick={toggleSearch}
        />
      )}
    </header>
  );
};

export default Navbar;
