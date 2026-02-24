import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      <div className="relative bg-black text-white py-24 px-6 overflow-hidden">
        
        {/* Diagonal Red Background */}
        <div className="absolute -bottom-20 -right-40 w-[600px] h-[300px] bg-red-600 rotate-12 opacity-80"></div>

        {/* Big Background Text */}
        <h1 className="absolute top-6 left-1/2 -translate-x-1/2
        text-[60px] sm:text-[80px] md:text-[110px]
        font-extrabold text-gray-600 opacity-10 tracking-widest
        whitespace-nowrap pointer-events-none">
          FEATURED CLASSES
        </h1>

        {/* Heading */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold tracking-widest">
            FEATURED CLASSES
          </h2>
          <div className="w-28 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
          {classes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group/card overflow-hidden rounded-xl 
              shadow-2xl hover:-translate-y-3 
              hover:shadow-red-600/30 transition-all duration-500"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[450px] object-cover brightness-75 
                group-hover/card:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t 
              from-black via-black/50 to-transparent opacity-80 
              group-hover/card:opacity-100 transition duration-500"></div>

              {/* Text */}
              <div className="absolute bottom-10 left-10">
                <h3 className="text-2xl font-bold mb-6 tracking-wide">
                  {item.title}
                </h3>

                {/* Button */}
                <button className="relative px-8 py-3 font-semibold 
                bg-red-600 text-white overflow-hidden group/btn">
                  <span className="relative z-10 transition-colors duration-500 
                  group-hover/btn:text-black">
                    BOOK
                  </span>
                  <span className="absolute inset-0 bg-white scale-x-0 
                  group-hover/btn:scale-x-100 origin-left 
                  transition-transform duration-500"></span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= COUNTER SECTION ================= */}
      <div className="bg-red-600 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center px-6">
          {stats.map((item, index) => (
            <Counter key={index} number={item.number} label={item.label} />
          ))}
        </div>
      </div>
    </>
  );
}

/* ================= COUNTER COMPONENT ================= */

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
      <h3 className="text-5xl md:text-6xl font-extrabold text-white">
        {count}+
      </h3>

      <p className="mt-4 font-bold text-sm tracking-widest text-white">
        {label}
      </p>
    </motion.div>
  );
}

export default FeaturedClasses;