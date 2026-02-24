import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Trainer", path: "/trainer" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/90 border-b border-red-800">

      <div className="flex justify-between items-center px-6 md:px-12 py-4">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl md:text-4xl font-black tracking-wider bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent"
        >
          FITNESS ZONE
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 text-lg font-semibold">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative transition-all duration-300 ${
                    isActive
                      ? "text-red-500"
                      : "text-white hover:text-red-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden text-white text-3xl cursor-pointer">
          {isOpen ? (
            <HiX onClick={() => setIsOpen(false)} />
          ) : (
            <HiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-lg transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg font-semibold">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition-all duration-300 ${
                    isActive
                      ? "text-red-500"
                      : "text-white hover:text-red-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;