import React from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaInfinity, FaClock } from "react-icons/fa";

const plans = [
  {
    name: "FLEXI",
    price: "₹99.99",
    icon: <FaDumbbell />,
    features: [
      "12 Classes Per Month",
      "3 Classes Per Week",
      "No Joining Fees",
    ],
  },
  {
    name: "ALL ACCESS",
    price: "₹199.99",
    icon: <FaInfinity />,
    features: [
      "Unlimited Classes",
      "3 Classes Per Day",
      "No Joining Fees",
    ],
    featured: true,
  },
  {
    name: "OFF-PEAK",
    price: "₹149.99",
    icon: <FaClock />,
    features: [
      "20 Classes Per Month",
      "5 Classes Per Week",
      "No Joining Fees",
    ],
  },
];

function Memberships() {
  return (
    <section className="relative bg-black text-white py-28 px-6 overflow-hidden">

      {/* Big Background Text */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 
      text-[70px] md:text-[140px] font-extrabold 
      text-white/5 tracking-widest whitespace-nowrap pointer-events-none">
        MEMBERSHIPS
      </h1>

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest">
          MEMBERSHIPS
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 relative z-10">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              rotateX: 6,
              rotateY: -6,
              scale: 1.05,
            }}
            className={`relative p-10 rounded-2xl 
            border transition-all duration-500 group
            ${
              plan.featured
                ? "bg-gradient-to-br from-red-600 to-black border-red-600 shadow-[0_0_40px_rgba(220,38,38,0.6)] scale-105"
                : "bg-zinc-900 border-zinc-800 hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >

            {/* ICON */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className={`text-5xl mb-6 inline-block transition-all duration-500
              ${
                plan.featured
                  ? "text-white"
                  : "text-red-600 group-hover:text-white"
              }`}
            >
              {plan.icon}
            </motion.div>

            {/* Plan Name */}
            <h3 className="text-2xl font-bold tracking-widest mb-6">
              {plan.name}
            </h3>

            {/* Price */}
            <p className="text-4xl font-extrabold mb-8">
              {plan.price}
              <span className="text-lg font-medium"> / month</span>
            </p>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="relative w-full py-3 font-bold tracking-widest 
            bg-red-600 overflow-hidden group">
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                JOIN TODAY
              </span>
              <span className="absolute inset-0 bg-white scale-x-0 
              group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </button>

          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Memberships;