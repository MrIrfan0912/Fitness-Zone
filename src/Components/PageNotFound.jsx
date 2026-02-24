import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">

      {/* Gym Funny GIF Background */}
      <img
        src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
        alt="gym fail"
        className="absolute w-full h-full object-cover opacity-30"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        {/* Big 404 */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-extrabold text-red-600"
        >
          404 💪
        </motion.h1>

        {/* Funny Line */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white text-2xl md:text-4xl mt-4 font-bold"
        >
          Oops! You skipped this page like leg day!
        </motion.h2>

        <p className="text-gray-400 mt-3 text-sm md:text-base">
          The page you're trying to lift... doesn't exist.
        </p>

        {/* Funny Animated Button */}
        <motion.button
          whileHover={{ scale: 1.15, rotate: 2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/")}
          className="mt-8 px-10 py-3 bg-red-600 text-white font-semibold rounded-full 
          shadow-[0_0_20px_red] hover:shadow-[0_0_40px_red] 
          transition-all duration-300"
        >
          🏋️ Back to Home
        </motion.button>

      </div>
    </div>
  );
}

export default PageNotFound;