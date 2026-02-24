import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Slider() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
      title: "NO PAIN",
      highlight: "NO GAIN",
      desc: "Push harder than yesterday if you want a different tomorrow.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
      title: "BUILD YOUR",
      highlight: "STRENGTH",
      desc: "Train insane or remain the same.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2070&auto=format&fit=crop",
      title: "INTENSE",
      highlight: "WORKOUTS",
      desc: "Built for serious athletes.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black group">

      {/* Progress Bar */}
      <motion.div
        key={current}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 6, ease: "linear" }}
        className="absolute top-0 left-0 h-1 bg-red-600 z-30"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full"
        >
          {/* Background Image */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 6, ease: "linear" }}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[current].image})`,
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="text-white max-w-4xl">

              <motion.h2
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-extrabold tracking-wider"
              >
                {slides[current].title}
              </motion.h2>

              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-6xl md:text-8xl font-black text-red-600 mt-4"
              >
                {slides[current].highlight}
              </motion.h1>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-6 text-lg md:text-xl text-gray-300"
              >
                {slides[current].desc}
              </motion.p>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 
        text-white text-3xl backdrop-blur-md bg-white/10 
        px-5 py-3 rounded-full 
        opacity-0 group-hover:opacity-100 
        -translate-x-5 group-hover:translate-x-0
        transition-all duration-500 z-30"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 
        text-white text-3xl backdrop-blur-md bg-white/10 
        px-5 py-3 rounded-full 
        opacity-0 group-hover:opacity-100 
        translate-x-5 group-hover:translate-x-0
        transition-all duration-500 z-30"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              index === current
                ? "bg-red-600 scale-125 shadow-[0_0_15px_red]"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
  );
}

export default Slider;