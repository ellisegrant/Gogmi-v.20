import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState("/");
  
  const { isAuthenticated, user, isMember, logout } = useAuth();

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
      name: "Areas of Work", 
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
        { name: "Gulf Spectrum Podcast", path: "/gulf-spectrum-podcast" },
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
    setUserDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    setUserDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate('/');
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

        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          {!isAuthenticated ? (
            <>
              <button
                onClick={() => handleNavClick("/login")}
                className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  scrolled
                    ? "text-[#1F2933] hover:bg-[#8E3400]/10"
                    : "text-[#F5F7FA] hover:bg-[#F5F7FA]/20"
                }`}
                style={{ fontWeight: 600 }}
              >
                Member Login
              </button>
              <button
                onClick={() => handleNavClick("/membership")}
                className="bg-[#8E3400] text-white px-6 py-2.5 rounded-lg hover:bg-[#6B2700] transition-all shadow-lg hover:scale-105 whitespace-nowrap"
                style={{ fontWeight: 600 }}
              >
                Join Now
              </button>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  scrolled
                    ? "bg-[#132552] text-[#F5F7FA]"
                    : "bg-[#F5F7FA]/30 text-[#F5F7FA]"
                }`}
                style={{ fontWeight: 600 }}
              >
                <User className="w-4 h-4" />
                <span className="max-w-[150px] truncate">{user?.full_name}</span>
                {isMember && (
                  <span className="ml-1 px-2 py-0.5 text-xs bg-[#8E3400] text-white rounded-full">
                    Member
                  </span>
                )}
                <ChevronDown className={`w-4 h-4 transition-transform ${userDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {userDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-[#132552] rounded-xl shadow-2xl py-2 border border-[#8E3400]/30 z-50">
                  <div className="px-4 py-3 border-b border-[#F5F7FA]/10">
                    <p className="text-sm text-[#F5F7FA] font-semibold truncate" style={{ fontWeight: 600 }}>
                      {user?.full_name}
                    </p>
                    <p className="text-xs text-[#F5F7FA]/70 truncate" style={{ fontWeight: 400 }}>
                      {user?.email}
                    </p>
                    {isMember && (
                      <p className="text-xs text-[#8E3400] mt-1" style={{ fontWeight: 600 }}>
                        Active Member
                      </p>
                    )}
                  </div>
                  
                  {!isMember && (
                    <button
                      onClick={() => handleNavClick('/membership')}
                      className="block w-full text-left px-4 py-2.5 text-[#F5F7FA] hover:bg-[#8E3400] hover:text-white transition-colors"
                      style={{ fontWeight: 400 }}
                    >
                      Become a Member
                    </button>
                  )}
                  
                  <button
                    onClick={() => handleNavClick('/resources')}
                    className="block w-full text-left px-4 py-2.5 text-[#F5F7FA] hover:bg-[#8E3400] hover:text-white transition-colors"
                    style={{ fontWeight: 400 }}
                  >
                    My Resources
                  </button>
                  
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2.5 text-[#F5F7FA] hover:bg-red-600 hover:text-white transition-colors flex items-center gap-2"
                    style={{ fontWeight: 400 }}
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
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

            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => handleNavClick("/login")}
                  className="block w-full text-center bg-white border-2 border-[#132552] text-[#132552] px-6 py-3 rounded-lg hover:bg-gray-50 transition-all"
                  style={{ fontWeight: 600 }}
                >
                  Member Login
                </button>
                <button
                  onClick={() => handleNavClick("/membership")}
                  className="block w-full text-center bg-[#8E3400] text-white px-6 py-3 rounded-lg hover:bg-[#6B2700] transition-all shadow-lg"
                  style={{ fontWeight: 600 }}
                >
                  Join Now
                </button>
              </>
            ) : (
              <>
                <div className="bg-[#132552] rounded-lg p-4 mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-5 h-5 text-[#F5F7FA]" />
                    <p className="text-sm text-[#F5F7FA] font-semibold truncate" style={{ fontWeight: 600 }}>
                      {user?.full_name}
                    </p>
                  </div>
                  <p className="text-xs text-[#F5F7FA]/70 truncate mb-2" style={{ fontWeight: 400 }}>
                    {user?.email}
                  </p>
                  {isMember && (
                    <span className="inline-block px-3 py-1 text-xs bg-[#8E3400] text-white rounded-full">
                      Active Member
                    </span>
                  )}
                </div>

                {!isMember && (
                  <button
                    onClick={() => handleNavClick('/membership')}
                    className="block w-full text-center bg-[#8E3400] text-white px-6 py-3 rounded-lg hover:bg-[#6B2700] transition-all"
                    style={{ fontWeight: 600 }}
                  >
                    Become a Member
                  </button>
                )}

                <button
                  onClick={() => handleNavClick('/resources')}
                  className="block w-full text-left py-3 px-4 text-[#1F2933] hover:bg-[#8E3400]/10 rounded-lg transition-all"
                  style={{ fontWeight: 600 }}
                >
                  My Resources
                </button>

                <button
                  onClick={handleLogout}
                  className="block w-full text-left py-3 px-4 text-red-600 hover:bg-red-50 rounded-lg transition-all flex items-center gap-2"
                  style={{ fontWeight: 600 }}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;