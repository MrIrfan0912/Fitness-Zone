import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 pt-16 pb-8 border-t border-red-600 overflow-hidden">

      {/* Water Drops Background (Slow + Premium) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="water-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          ></span>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo Section */}
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            Fitness<span className="text-red-600">Zone</span>
          </h1>
          <p className="mt-4 text-gray-400 text-sm leading-6">
            Train hard. Stay strong. Become unstoppable.
            Your fitness journey starts here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 relative inline-block">
            Quick Links
            <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-red-600"></span>
          </h2>
          <ul className="space-y-2 mt-4">
            <li className="hover:text-red-600 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red-600 transition duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-red-600 transition duration-300">
              <Link to="/trainer">Trainers</Link>
            </li>
            <li className="hover:text-red-600 transition duration-300">
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 relative inline-block">
            Working Hours
            <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-red-600"></span>
          </h2>
          <div className="space-y-2 mt-4 text-gray-400 text-sm">
            <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
            <p>Saturday: 7:00 AM - 8:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 relative inline-block">
            Follow Us
            <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-red-600"></span>
          </h2>
          <div className="flex gap-4 mt-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
              <div
                key={index}
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="relative text-center mt-16 border-t border-gray-800 pt-8 space-y-4">

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} FITNESS ZONE. All Rights Reserved.
        </p>

        <p className="text-sm text-gray-400 tracking-wide">
          Design & Developed by{" "}
          <span className="text-red-600 font-semibold hover:text-red-500 transition duration-300">
            Irfan Ahmad
          </span>{" "}
          <span className="text-gray-500">
            | Trainee at{" "}
            <a
              href="https://skillmanthan.in"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white font-medium group"
            >
              SkillManthan Technologies Pvt. Ltd.
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </span>
        </p>

      </div>

    </footer>
  );
}

export default Footer;