import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  FaDumbbell,
  FaFire,
  FaHeartbeat,
  FaRunning,
  FaBolt,
  FaMedal
} from "react-icons/fa";

function GymOrbitLoader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const icons = [
    <FaDumbbell />,
    <FaFire />,
    <FaHeartbeat />,
    <FaRunning />,
    <FaBolt />,
    <FaMedal />
  ];

  const radius = 85; // 👈 Perfect circle radius (match ring size)

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">

      {/* Soft Glow */}
      <div className="absolute w-56 h-56 bg-red-600 blur-[100px] opacity-20 rounded-full" />

      {/* Outer Ring */}
      <div className="absolute w-52 h-52 border border-red-600 rounded-full shadow-[0_0_30px_rgba(255,0,0,0.6)]" />

      {/* Rotating Orbit */}
      <motion.div
        className="relative w-52 h-52"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      >
        {icons.map((Icon, index) => {
          const angle = (index / icons.length) * 2 * Math.PI;

          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
              }}
            >
              <div className="bg-red-600 text-white p-2 rounded-full shadow-lg text-sm">
                {Icon}
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Center Core */}
      <motion.div
        className="absolute w-24 h-24 bg-black border border-red-600 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(255,0,0,0.7)]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <h1 className="text-xs font-bold text-red-500 tracking-widest text-center">
          FITNESS
          <br />
          ZONE
        </h1>
      </motion.div>
    </div>
  );
}

export default GymOrbitLoader;