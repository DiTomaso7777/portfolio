import Link from "next/link";

export default function Header() {
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
        d="M20 5L30 15L20 25L10 15L20 5Z"
        fill="url(#gradient)"
        className="animate-pulse"
      />
      <circle cx="20" cy="20" r="15" stroke="url(#gradient)" strokeWidth="2" fill="none" />
    </svg>
    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
      Skynet Cloud
    </span>
  </Link>
</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-500 transition">
            About
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-blue-500 transition">
            Services
          </Link>
          <Link href="/contact-me" className="text-gray-600 hover:text-blue-500 transition">
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
    </header>
  );
}