import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function FeaturedClasses() {
  const classes = [
    {
      title: "CROSSFIT - BEGINNERS CLASS",
      img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "CROSSFIT - GYMNASTICS",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "CROSSFIT - OLYMPIC LIFTING",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "CROSSFIT - FEMALE ONLY",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
    },
  ];

  const stats = [
    { number: 45, label: "DIFFERENT MODULES" },
    { number: 60, label: "MINUTES PER CLASS" },
    { number: 20, label: "CLASSES PER WEEK" },
    { number: 1, label: "UNITED GOAL" },
  ];

  return (
    <>
      {/* ================= FEATURED CLASSES ================= */}
      <div className="relative bg-black text-white py-20 px-4 overflow-x-hidden">

        {/* Safe Red Background Shape */}
        <div className="absolute bottom-0 right-0 w-72 h-40 bg-red-600 opacity-70 rotate-6"></div>

        {/* Big Background Text */}
        <h1 className="absolute top-8 left-1/2 -translate-x-1/2
        text-[40px] sm:text-[60px] md:text-[110px]
        font-extrabold text-gray-600 opacity-10 tracking-widest
        whitespace-nowrap pointer-events-none">
          FEATURED CLASSES
        </h1>

        {/* Heading */}
        <div className="text-center mb-14 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest">
            FEATURED CLASSES
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
          {classes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl 
              shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[320px] sm:h-[380px] md:h-[450px] object-cover brightness-75 
                group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t 
              from-black via-black/50 to-transparent opacity-90"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <button className="px-6 py-2 bg-red-600 font-semibold hover:bg-white hover:text-black transition duration-300">
                  BOOK
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= COUNTER SECTION ================= */}
      <div className="bg-red-600 py-16 overflow-x-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
          {stats.map((item, index) => (
            <Counter key={index} number={item.number} label={item.label} />
          ))}
        </div>
      </div>
    </>
  );
}

/* ================= COUNTER ================= */

function Counter({ number, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = number / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= number) {
          setCount(number);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center"
    >
      <h3 className="text-4xl md:text-6xl font-extrabold text-white">
        {count}+
      </h3>

      <p className="mt-3 font-bold text-xs md:text-sm tracking-widest text-white">
        {label}
      </p>
    </motion.div>
  );
}

export default FeaturedClasses;