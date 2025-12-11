import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState("/");

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
    { 
      name: "About Us", 
      path: "/about",
      dropdown: [
        {name: "Who We Are", path: "/about"},
        {name: "Partners", path: "/partners"},
        {name: "Careers", path: "/CareersOpportunities"}
      ]
    },
    { 
      name: "Services", 
      path: "/services",
      dropdown: [
        { name: "Advocacy", path: "/services/advocacy" },
        { name: "Research", path: "/services/research" },
        { name: "Capacity Building", path: "/services/CapacityBuilding" },
        { name: "Secretariat Services", path: "/secretariat" },
      ],
    },
    { 
      name: "Our Team", 
      path: "/ExecutiveChairman",
      dropdown: [
        { name: "Board Of Directors", path: "/ExecutiveChairman" },
        { name: "Advisory Board", path: "/AdvisoryBoard" },
        { name: "Management", path: "/Management" }
      ]
    },
    {
      name: "Resources", 
      path: "/resources",
      dropdown: [
        { name: "Library", path: "/resources" },
        { name: "Events, Blog & News", path: "/blog" },
        { name: "Membership", path: "/Membership" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => currentPath === path;

  const handleDropdownEnter = (itemName) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setDropdownOpen(itemName);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(null);
    }, 300);
    setCloseTimeout(timeout);
  };

  const handleNavClick = (path) => {
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
      style={{ fontFamily: "'Inter', 'Circular', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      <div className="w-full flex items-center justify-between px-12">
        <button
          onClick={() => handleNavClick("/")}
          className="flex items-center space-x-3 group flex-shrink-0"
          aria-label="Go to home"
        >
          <img 
            src="/GoGMI_PNG.png"
            alt="GoGMI Logo" 
            className="h-14 w-14 md:h-16 md:w-16 object-contain transform group-hover:scale-105 transition-transform"
          />
          <div>
            <div
              className={`text-xl md:text-2xl tracking-tight whitespace-nowrap ${
                scrolled ? "text-[#132552]" : "text-[#F5F7FA]"
              }`}
              style={{ fontWeight: 700 }}
            >
              GoGMI
            </div>
            <div
              className={`text-xs whitespace-nowrap ${
                scrolled ? "text-[#1F2933]" : "text-[#F5F7FA]/80"
              }`}
              style={{ fontWeight: 600 }}
            >
              Gulf Of Guinea Maritime Institute
            </div>
          </div>
        </button>

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
                    className={`px-4 py-2 cursor-pointer rounded-lg transition-all flex items-center gap-1 hover:-translate-y-0.5 whitespace-nowrap ${
                      isActive(item.path) || currentPath.startsWith(item.path)
                        ? scrolled
                          ? "bg-[#132552] text-[#F5F7FA]"
                          : "bg-[#F5F7FA]/30 text-[#F5F7FA]"
                        : scrolled
                        ? "text-[#1F2933] hover:bg-[#8E3400]/10 hover:text-[#132552]"
                        : "text-[#F5F7FA] hover:bg-[#F5F7FA]/20"
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {dropdownOpen === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-[#132552] rounded-xl shadow-2xl py-2 border border-[#8E3400]/30 z-50">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.path}
                          onClick={() => handleNavClick(subItem.path)}
                          className="block w-full text-left px-4 py-2.5 text-[#F5F7FA] hover:bg-[#8E3400] hover:text-white transition-colors whitespace-nowrap"
                          style={{ fontWeight: 400 }}
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
                  className={`px-4 py-2 rounded-lg cursor-pointer transition-all hover:-translate-y-0.5 whitespace-nowrap ${
                    isActive(item.path)
                      ? scrolled
                        ? "bg-[#132552] text-[#F5F7FA]"
                        : "bg-[#F5F7FA]/30 text-[#F5F7FA]"
                      : scrolled
                      ? "text-[#1F2933] hover:bg-[#8E3400]/10 hover:text-[#132552]"
                      : "text-[#F5F7FA] hover:bg-[#F5F7FA]/20"
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        </div>

        <div className="hidden lg:block flex-shrink-0 mr-4">
          <button
            onClick={() => handleNavClick("/contact")}
            className="bg-[#8E3400] text-white px-6 py-2.5 rounded-lg hover:bg-[#132552] transition-all shadow-lg hover:scale-105 whitespace-nowrap"
            style={{ fontWeight: 600 }}
          >
            Get Started
          </button>
        </div>

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

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F7FA]/98 backdrop-blur-xl border-t border-gray-200 shadow-2xl">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.path}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(dropdownOpen === item.name ? null : item.name)}
                    className="flex items-center justify-between w-full text-left py-3 px-4 text-[#1F2933] rounded-lg hover:bg-[#8E3400]/10"
                    style={{ fontWeight: 600 }}
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
                          className="block w-full text-left py-2.5 px-4 text-[#F5F7FA] hover:bg-[#8E3400] hover:text-white text-sm rounded-lg transition-colors"
                          style={{ fontWeight: 400 }}
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
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all ${
                    isActive(item.path)
                      ? "bg-[#132552] text-[#F5F7FA]"
                      : "text-[#1F2933] hover:bg-[#8E3400]/10"
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {item.name}
                </button>
              )
            )}

            <button
              onClick={() => handleNavClick("/contact")}
              className="block w-full text-center bg-[#8E3400] text-white px-6 py-3 rounded-lg hover:bg-[#132552] transition-all shadow-lg"
              style={{ fontWeight: 600 }}
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