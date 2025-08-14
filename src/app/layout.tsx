import './globals.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Sidebar />
        <div className="flex-1 min-h-screen flex flex-col">
          <Navbar />
          <main className="p-4 md:p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
