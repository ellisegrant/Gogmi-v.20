import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// Import GoGMI Logo from assets - path goes UP one level from Components to src
//import GoGMI_PNG from "../assets/images/GoGMI_PNG.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Changed to track which dropdown is open
  const [closeTimeout, setCloseTimeout] = useState(null); // Add timeout for delayed closing
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState("/");

  // Keep currentPath in sync with router location
  useEffect(() => {
    setCurrentPath(location.pathname || "/");
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { 
      name: "Services", 
      path: "/services",
      dropdown: [
        { name: "Advocacy", path: "/services/advocacy" },
        { name: "Research", path: "/services/research" },
        { name: "Capacity Building", path: "/capacity-building" },
        { name: "Secretariat Services", path: "/services/secretariat-services" },
      ],
    },
    { name: "Executive Chairman", path: "/ExecutiveChairman" },
    // { name: "Projects", path: "/projects" },
    {
      name: "Resources", path: "/resources",
      dropdown: [
        { name: "Library", path: "/resources" },
        { name: "Blog & News", path: "/blog" },
        { name: "Membership", path: "/Membership" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => currentPath === path;

  // Handle dropdown open with immediate opening
  const handleDropdownEnter = (itemName) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setDropdownOpen(itemName);
  };

  // Handle dropdown close with delay
  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(null);
    }, 300); // 300ms delay before closing
    setCloseTimeout(timeout);
  };

  // Use router navigation
  const handleNavClick = (path) => {
    // If same path, still close mobile menu
    if (path && path !== currentPath) {
      navigate(path);
    }
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F5F7FA]/95 backdrop-blur-lg shadow-lg py-3"
          : "bg-[#132552]/90 backdrop-blur-md py-5"
      }`}
    >
      <div className="w-full flex items-center justify-between px-12">
        {/* Logo Section - UPDATED WITH REAL LOGO */}
        <button
          onClick={() => handleNavClick("/")}
          className="flex items-center space-x-3 group flex-shrink-0"
          aria-label="Go to home"
        >
          {/* GoGMI REAL LOGO - Located in /public folder */}
          <img 
            src="/GoGMI_PNG.png"
            alt="GoGMI Logo" 
            className="h-14 w-14 md:h-16 md:w-16 object-contain transform group-hover:scale-105 transition-transform"
          />
          <div>
            <div
              className={`text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap ${
                scrolled ? "text-[#132552]" : "text-[#F5F7FA]"
              }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              GoGMI
            </div>
            <div
              className={`text-xs font-medium whitespace-nowrap ${
                scrolled ? "text-[#1F2933]" : "text-[#F5F7FA]/80"
              }`}
              style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
            >
              Gulf Of Guinea Maritime Institute
            </div>
          </div>
        </button>

        {/* Desktop Navigation - Centered and evenly spaced */}
        <div className="hidden lg:flex items-center flex-1 justify-center">
          <div className="flex items-center gap-6">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    type="button"
                    className={`px-4 py-2 cursor-pointer rounded-lg font-medium transition-all flex items-center gap-1 hover:-translate-y-0.5 ${
                      isActive(item.path) || currentPath.startsWith(item.path)
                        ? scrolled
                          ? "bg-[#132552] text-[#F5F7FA]"
                          : "bg-[#F5F7FA]/30 text-[#F5F7FA]"
                        : scrolled
                        ? "text-[#1F2933] hover:bg-[#C1A875]/10 hover:text-[#132552]"
                        : "text-[#F5F7FA] hover:bg-[#F5F7FA]/20"
                    }`}
                    style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {dropdownOpen === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-[#132552] rounded-xl shadow-2xl py-2 border border-[#C1A875]/30 z-50">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.path}
                          onClick={() => handleNavClick(subItem.path)}
                          className="block w-full text-left px-4 py-2.5 text-[#F5F7FA] hover:bg-[#C1A875] hover:text-[#132552] transition-colors"
                          style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Use button + navigate (or you could use <Link>)
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-4 py-2 rounded-lg cursor-pointer font-medium transition-all hover:-translate-y-0.5 whitespace-nowrap ${
                    isActive(item.path)
                      ? scrolled
                        ? "bg-[#132552] text-[#F5F7FA]"
                        : "bg-[#F5F7FA]/30 text-[#F5F7FA]"
                      : scrolled
                      ? "text-[#1F2933] hover:bg-[#C1A875]/10 hover:text-[#132552]"
                      : "text-[#F5F7FA] hover:bg-[#F5F7FA]/20"
                  }`}
                  style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        </div>

        {/* Get Started Button - Right side */}
        <div className="hidden lg:block flex-shrink-0 mr-4">
          <button
            onClick={() => handleNavClick("/contact")}
            className="bg-[#C1A875] text-[#132552] px-6 py-2.5 rounded-lg font-semibold hover:bg-[#7A4E3A] hover:text-[#F5F7FA] transition-all shadow-lg hover:scale-105 whitespace-nowrap"
            style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden transition-colors p-2 ${
            scrolled ? "text-[#132552]" : "text-[#F5F7FA]"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F7FA]/98 backdrop-blur-xl border-t border-gray-200 shadow-2xl">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.path}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(dropdownOpen === item.name ? null : item.name)}
                    className="flex items-center justify-between w-full text-left py-3 px-4 text-[#1F2933] font-medium rounded-lg hover:bg-[#C1A875]/10"
                    style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen === item.name && (
                    <div className="pl-4 space-y-1 mt-2 bg-[#132552] rounded-lg p-2">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.path}
                          onClick={() => handleNavClick(subItem.path)}
                          className="block w-full text-left py-2.5 px-4 text-[#F5F7FA] hover:bg-[#C1A875] hover:text-[#132552] text-sm rounded-lg transition-colors"
                          style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all ${
                    isActive(item.path)
                      ? "bg-[#132552] text-[#F5F7FA]"
                      : "text-[#1F2933] hover:bg-[#C1A875]/10"
                  }`}
                  style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                >
                  {item.name}
                </button>
              )
            )}

            {/* Mobile Get Started Button */}
            <button
              onClick={() => handleNavClick("/contact")}
              className="block w-full text-center bg-[#C1A875] text-[#132552] px-6 py-3 rounded-lg font-semibold hover:bg-[#7A4E3A] hover:text-[#F5F7FA] transition-all shadow-lg"
              style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;