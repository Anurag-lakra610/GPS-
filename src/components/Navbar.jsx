import React, { useState, useEffect, useRef } from 'react';
import { Search, User, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  {
    name: 'Store',
    path: 'https://www.gpsfdk.com/',
    children: [
      { name: 'Canvas', path: 'https://www.gpsfdk.com/canvas' },
      { name: 'House Nameplates', path: 'https://www.gpsfdk.com/house-nameplates' }
    ]
  },
  { name: 'School of Learning', path: '#', active: true },
  { name: 'Love', path: 'https://www.gpsfdk.com/love' },
  { name: 'Vision', path: 'https://www.gpsfdk.com/vision' },
  { name: 'Partner', path: 'https://www.gpsfdk.com/partner' },
  { name: 'Support', path: 'https://www.gpsfdk.com/support' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [storeDropdownOpen, setStoreDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col font-sans select-none">
      <nav
        className={`transition-all duration-500 w-full ${
          scrolled ? 'bg-[#FFF7E7]/95 backdrop-blur-lg shadow-md' : 'bg-[#FFF7E7]'
        }`}
      >
        <div className="w-full max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between lg:justify-center lg:gap-10 h-[60px] w-full">
            {/* Left: Brand Logo & Desktop Nav Links */}
            <div className="flex items-center lg:gap-10 h-full">
              {/* Official GPS Logo */}
              <a
                href="https://www.gpsfdk.com/"
                className="flex items-center gap-2 group h-full py-2 shrink-0"
                aria-label="GPSFDK Home"
              >
                <img
                  src="/assets/gps-logo.webp"
                  alt="GPSFDK"
                  className="max-w-[42px] sm:max-w-[50px] h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </a>

              {/* Desktop Nav Items */}
              <div className="hidden lg:flex items-center gap-10 h-full">
                {NAV_ITEMS.map((item) =>
                  item.children ? (
                    <div
                      key={item.name}
                      ref={dropdownRef}
                      className="relative group h-full flex items-center"
                      onMouseEnter={() => setStoreDropdownOpen(true)}
                      onMouseLeave={() => setStoreDropdownOpen(false)}
                    >
                      <a
                        href={item.path}
                        className="flex items-center gap-1 text-xs font-normal text-[#424245] hover:text-[#F15A29] transition-colors duration-300"
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-300 ${
                            storeDropdownOpen ? 'rotate-180 text-[#F15A29]' : 'group-hover:rotate-180'
                          }`}
                        />
                      </a>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute left-1/2 top-full w-max -translate-x-1/2 translate-y-1 pt-2 transition-all duration-200 ${
                          storeDropdownOpen
                            ? 'visible opacity-100 translate-y-0'
                            : 'invisible opacity-0'
                        }`}
                      >
                        <div className="flex flex-col gap-1.5 bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[200px]">
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.path}
                              className="flex items-center justify-between gap-6 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F15A29]/10 hover:text-[#F15A29] transition-colors"
                            >
                              <span>{child.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.path}
                      className={`text-xs font-normal transition-colors duration-300 ${
                        item.active
                          ? 'text-[#F15A29] font-medium'
                          : 'text-[#424245] hover:text-[#F15A29]'
                      }`}
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Right Action Icons (Exact like gpsfdk.com) */}
            <div className="flex items-center gap-0.5 sm:gap-2 shrink-0">
              {/* Search Icon */}
              <button
                type="button"
                aria-label="Search"
                className="p-2 text-[#424245] hover:text-[#F15A29] transition-colors duration-300 cursor-pointer"
                onClick={() => window.open('https://www.gpsfdk.com/', '_blank')}
              >
                <Search className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6]" />
              </button>

              {/* Account / User Icon */}
              <a
                href="https://www.gpsfdk.com/register"
                aria-label="Sign in"
                className="p-2 text-[#424245] hover:text-[#F15A29] transition-colors duration-300 block"
              >
                <User className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6]" />
              </a>

              {/* Shopping Bag / Cart Icon */}
              <a
                href="https://www.gpsfdk.com/"
                aria-label="Cart"
                className="relative p-2 text-[#424245] hover:text-[#F15A29] transition-colors duration-300 block"
              >
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6]" />
              </a>

              {/* Mobile Menu Hamburger / Close Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
                className="lg:hidden p-2 text-[#424245] hover:text-[#F15A29] transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[1.8]" />
                ) : (
                  <Menu className="w-6 h-6 stroke-[1.8]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Exact like gpsfdk.com with bg-secondary #0B5D3B) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B5D3B] pt-[60px] animate-in fade-in slide-in-from-right duration-300">
          <div className="p-6 space-y-1 h-full overflow-y-auto pb-32">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="border-b border-white/10">
                <a
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-xl font-semibold py-3 transition-colors ${
                    item.active ? 'text-[#F15A29]' : 'text-white hover:text-[#F15A29]'
                  }`}
                >
                  {item.name}
                </a>
                {item.children && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-base font-normal py-2 text-white/80 hover:text-[#F15A29] transition-colors"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="https://www.gpsfdk.com/"
              className="block w-full text-left text-xl text-white font-semibold py-3 border-b border-white/10 hover:text-[#F15A29] transition-colors"
            >
              Search
            </a>
            <a
              href="https://www.gpsfdk.com/"
              className="block w-full text-left text-xl text-white font-semibold py-3 border-b border-white/10 hover:text-[#F15A29] transition-colors"
            >
              Cart
            </a>
            <a
              href="https://www.gpsfdk.com/register"
              className="block text-xl text-[#F15A29] font-semibold py-3 hover:underline"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
