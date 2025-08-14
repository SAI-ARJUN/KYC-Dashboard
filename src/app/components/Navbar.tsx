'use client';
import { useEffect, useState } from 'react';
import { Search, Bell, Menu } from 'lucide-react';

export default function Navbar({ onToggleSidebar }: { onToggleSidebar?: () => void }) {
  const [dateText, setDateText] = useState('');

  useEffect(() => {
    // Client-only to avoid hydration mismatches
    setDateText(new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }));
  }, []);

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-20">
      <div className="px-4 py-3 flex items-center justify-between gap-4">
        {/* Left: Menu button + Breadcrumb */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={onToggleSidebar}
          >
            <Menu size={18} />
          </button>
          <nav className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
            <span>Home</span>
            <span className="mx-1">/</span>
            <span className="font-medium text-gray-900 dark:text-gray-100">
              Dashboard
            </span>
          </nav>
        </div>

        {/* Right: Search + Notifications + Profile */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          {/* Search */}
          <div className="relative max-w-xs w-full hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-3 py-2 w-full rounded-md bg-gray-100 dark:bg-gray-700 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              className="absolute left-2 top-2.5 text-gray-400 dark:text-gray-500"
              size={16}
            />
          </div>

          {/* Notification */}
          <button className="relative p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <Bell className="text-gray-600 dark:text-gray-300" size={18} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Profile */}
          <div className="flex flex-col text-right">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Sai
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {dateText}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
