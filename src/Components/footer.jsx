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
<div className="text-center mt-16 border-t border-gray-800 pt-8 space-y-4">

  <p className="text-sm text-gray-500">
    © {new Date().getFullYear()} FITNESS ZONE. All Rights Reserved.
  </p>

  <p className="text-sm text-gray-400 tracking-wide">
    Design & Developed by{" "}
    <span className="text-red-600 font-semibold hover:text-red-500 transition duration-300 cursor-pointer">
      Irfan Ahmad
    </span>{" "}
    <span className="text-gray-500">
      Trainee at{" "}
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