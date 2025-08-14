'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  CreditCard,
  FileCog,
  Bell,
  FileSignature,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const nav = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/applications', label: 'Applications', icon: FileText },
  { href: '/billing', label: 'Billing', icon: CreditCard },
  { href: '/rate-card', label: 'Rate Card', icon: FileCog },
  { href: '/agreement-copy', label: 'Agreement Copy', icon: FileSignature },
  { href: '/notices', label: 'Notices', icon: Bell }
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderNavLinks = () =>
    nav.map((item) => {
      const Icon = item.icon;
      const active = pathname === item.href;
      return (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors
            ${active
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}
          `}
          onClick={() => setMobileOpen(false)}
        >
          <Icon size={18} />
          {open && <span>{item.label}</span>}
        </Link>
      );
    });

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen transition-all duration-200 hidden md:flex flex-col
          ${open ? 'w-64' : 'w-16'}
        `}
      >
        <div className="flex items-center justify-between p-4">
          <div className="font-bold text-lg">{open ? 'KYC Portal' : 'KYC'}</div>
          <button
            className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-blue-600"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu size={20} />
          </button>
        </div>
        <nav className="px-2 py-2 space-y-1">{renderNavLinks()}</nav>
      </aside>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden transition-opacity duration-300
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-lg z-50 w-64 p-4 transform transition-transform duration-300 md:hidden
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="font-bold text-lg">KYC Portal</div>
          <button
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
            onClick={() => setMobileOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        <nav className="space-y-1">{renderNavLinks()}</nav>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white shadow-lg"
        onClick={() => setMobileOpen(true)}
      >
        <Menu size={20} />
      </button>
    </>
  );
}
