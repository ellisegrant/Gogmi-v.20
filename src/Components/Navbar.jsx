import React, { useState, useEffect } from "react";
import { Menu, X, Waves, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    {
      name: "Resources",
      path: "/resources",
      dropdown: [
        { name: "Publications", path: "/resources/publications" },
        { name: "Blog & News", path: "/blog" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => currentPath === path;

  // Use router navigation
  const handleNavClick = (path) => {
    // If same path, still close mobile menu
    if (path && path !== currentPath) {
      navigate(path);
    }
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
          : "bg-blue-900/90 backdrop-blur-md py-5"
      }`}
    >
      <div className="w-full flex items-center justify-between px-12">
        {/* Logo Section */}
        <button
          onClick={() => handleNavClick("/")}
          className="flex items-center space-x-3 group flex-shrink-0"
          aria-label="Go to home"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500 rounded-xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-lg">
              <Waves className="w-7 h-7 text-yellow-400" strokeWidth={2.5} />
            </div>
          </div>
          <div className="">
            <div
              className={`text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap ${
                scrolled ? "text-blue-900" : "text-white"
              }`}
            >
              GOGMI
            </div>
            <div
              className={`text-xs font-medium whitespace-nowrap ${
                scrolled ? "text-gray-600" : "text-white/80"
              }`}
            >
              Maritime Institute
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
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className={`px-4 py-2 cursor-pointer rounded-lg font-medium transition-all flex items-center gap-1 hover:-translate-y-0.5 ${
                      isActive(item.path) || currentPath.startsWith(item.path)
                        ? scrolled
                          ? "bg-blue-900 text-white"
                          : "bg-white/30 text-white"
                        : scrolled
                        ? "text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 z-50">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.path}
                          onClick={() => handleNavClick(subItem.path)}
                          className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
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
                        ? "bg-blue-900 text-white"
                        : "bg-white/30 text-white"
                      : scrolled
                      ? "text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                      : "text-white hover:bg-white/20"
                  }`}
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
            className="bg-yellow-500 text-gray-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-yellow-600 transition-all shadow-lg hover:scale-105 whitespace-nowrap"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden transition-colors p-2 ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-200 shadow-2xl">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.path}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((s) => !s)}
                    className="flex items-center justify-between w-full text-left py-3 px-4 text-gray-700 font-medium rounded-lg hover:bg-blue-50"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {dropdownOpen && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.path}
                          onClick={() => handleNavClick(subItem.path)}
                          className="block w-full text-left py-2.5 px-4 text-gray-600 hover:text-blue-900 text-sm rounded-lg hover:bg-blue-50"
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
                      ? "bg-blue-900 text-white"
                      : "text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  {item.name}
                </button>
              )
            )}

            {/* Mobile Get Started Button */}
            <button
              onClick={() => handleNavClick("/contact")}
              className="block w-full text-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all shadow-lg"
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
