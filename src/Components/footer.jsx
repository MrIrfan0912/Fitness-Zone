import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 border-t border-red-600">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo Section */}
        <div>
          <h1 className="text-3xl font-extrabold text-white">
            Fitness<span className="text-red-600">Zone</span>
          </h1>
          <p className="mt-4 text-gray-400 text-sm leading-6">
            Train hard. Stay strong. Become unstoppable.
            Your fitness journey starts here.
          </p>
        </div>

       

{/* Quick Links */}
<div>
  <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
  <ul className="space-y-2">
    <li className="hover:text-red-600 transition">
      <Link to="/">Home</Link>
    </li>
    <li className="hover:text-red-600 transition">
      <Link to="/about">About</Link>
    </li>
    <li className="hover:text-red-600 transition">
      <Link to="/trainer">Trainers</Link>
    </li>
    <li className="hover:text-red-600 transition">
      <Link to="/gallery">Gallery</Link>
    </li>
  </ul>
</div>

        {/* Working Hours */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Working Hours</h2>
          <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
          <p>Saturday: 7:00 AM - 8:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <div className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition cursor-pointer">
              <FaInstagram />
            </div>
            <div className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition cursor-pointer">
              <FaTwitter />
            </div>
            <div className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition cursor-pointer">
              <FaYoutube />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center mt-12 border-t border-gray-800 pt-6 text-sm text-gray-500">
        © 2026 FITNESS ZONE. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;