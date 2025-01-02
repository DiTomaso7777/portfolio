import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand/Logo Section */}
        <div className="flex items-center">
  <Link href="/" className="flex items-center space-x-2 group">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="transform group-hover:scale-110 transition-transform duration-200"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      <path
        d="M10 25 C10 28 12 30 15 30 L25 30 C28 30 30 28 30 25 C32 25 35 23 35 20 C35 17 32 15 30 15 C30 12 28 10 25 10 C22 10 20 12 20 15 C18 12 15 10 12 10 C8 10 5 13 5 17 C5 21 8 25 10 25"
        fill="url(#gradient)"
        className="animate-pulse"
      />
    </svg>
    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
      Skynet Cloud
    </span>
  </Link>
</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link 
            href="/" 
            className={`transition ${
              pathname === '/' 
                ? 'text-blue-500 font-semibold' 
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/learn-more" 
            className={`transition ${
              pathname === '/learn-more' 
                ? 'text-blue-500 font-semibold' 
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            About
          </Link>
          <Link 
            href="/my-projects" 
            className={`transition ${
              pathname === '/my-projects' 
                ? 'text-blue-500 font-semibold' 
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            Projects
          </Link>
          <Link 
            href="/contact-me" 
            className={`transition ${
              pathname === '/contact-me' 
                ? 'text-blue-500 font-semibold' 
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-blue-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      <div className="w-full h-5 md:h-[2px] bg-gradient-to-r from-blue-500 to-blue-600" />
    </header>
  );
}