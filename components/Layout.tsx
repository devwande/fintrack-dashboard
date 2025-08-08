'use client'
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
  onSearch?: (query: string) => void;
  searchQuery?: string;
  onNavigate?: (page: string) => void;
  activePage?: string;
}

const Layout = ({ children, onSearch, searchQuery, onNavigate, activePage = "dashboard" }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Handle initial sidebar state and hydration
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    handleResize();
    setIsHydrated(true);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // Prevent layout shift during hydration
  if (!isHydrated) {
    return (
      <div className="min-h-screen max-w-[1600px] mx-auto">
        <Navbar onMenuClick={toggleSidebar} onSearch={onSearch} searchQuery={searchQuery}/>
        <div className="flex">
          <aside className="hidden md:block w-64 bg-white">
            <div className="h-full"></div>
          </aside>
          <main className="flex-1 px-4 max-w-full overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-[1600px] mx-auto">
      <Navbar onMenuClick={toggleSidebar} onSearch={onSearch} searchQuery={searchQuery}/>
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} onNavigate={handleNavigate} activePage={activePage} />
        <main className="flex-1 px-4 max-w-full overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
