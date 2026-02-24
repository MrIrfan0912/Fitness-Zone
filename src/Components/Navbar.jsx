import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const linkRefs = useRef([]);

  // 🔥 Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🧲 Magnetic Smooth Effect
  useEffect(() => {
    linkRefs.current.forEach((el) => {
      if (!el) return;

      const move = (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
        el.style.transform = `translate(${x}px, ${y}px)`;
      };

      const reset = () => {
        el.style.transform = "translate(0px, 0px)";
      };

      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", reset);
    });
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Trainer", path: "/trainer" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav
      className={`fixed w-full top-4 z-50 flex justify-center transition-all duration-500`}
    >
      <div
        className={`flex justify-between items-center w-[95%] md:w-[85%] px-8 transition-all duration-500 rounded-2xl
        ${
          scrolled
            ? "py-3 bg-white/10 backdrop-blur-2xl shadow-[0_0_60px_rgba(255,0,0,0.35)] border border-white/20"
            : "py-5 bg-black/60 backdrop-blur-xl border border-white/10"
        }`}
      >
        {/* 🔥 Animated 3D Logo */}
        <NavLink
          to="/"
          className="text-3xl md:text-4xl font-black tracking-widest relative group"
        >
          <span className="bg-gradient-to-r from-red-600 via-red-400 to-red-600 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent group-hover:scale-110 transition duration-500">
            FITNESS ZONE
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold relative">
          {menuItems.map((item, index) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                ref={(el) => (linkRefs.current[index] = el)}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative px-5 py-2 rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? "text-red-400"
                      : "text-white hover:text-red-300"
                  }
                  hover:shadow-[0_0_25px_rgba(255,0,0,0.4)]
                  hover:-translate-y-1`
                }
              >
                {item.name}

                {/* Glass Hover Layer */}
                <span className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 hover:opacity-100 rounded-xl transition duration-300 -z-10"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white text-3xl cursor-pointer hover:scale-110 transition">
          {isOpen ? (
            <HiX onClick={() => setIsOpen(false)} />
          ) : (
            <HiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-24 w-[90%] md:hidden bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/10 transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg font-semibold">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-red-400 transition"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Gradient Animation */}
      <style>
        {`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientMove 5s ease infinite;
        }
        `}
      </style>
    </nav>
  );
}

export default Navbar;