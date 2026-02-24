import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Trainer from "./Pages/Trainer";
import Gallery from "./Pages/Gallery";
import Errorpage from "./Pages/Errorpage";
import GymOrbitLoader from "./Components/GymOrbitLoader";
import CursorFollower from "./Components/CursorFollower";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <GymOrbitLoader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      {/* 🔥 Custom Cursor */}
      <CursorFollower />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>

      {/* ================= FLOATING CONTACT BUTTONS ================= */}
<div className="fixed bottom-6 right-5 sm:right-8 flex flex-col items-center gap-4 z-[999]">

  {/* CALL BUTTON */}
  <a
    href="tel:+919628725861"
    className="group bg-red-600 text-white w-14 h-14
    flex items-center justify-center
    rounded-full shadow-2xl
    hover:scale-110
    hover:shadow-[0_0_40px_red]
    transition-all duration-300"
  >
    <FaPhoneAlt className="text-xl group-hover:rotate-12 transition duration-300" />
  </a>

  {/* WHATSAPP BUTTON */}
  <a
    href="https://wa.me/919628725861?text=Hi%20I%20want%20to%20join%20Fitness%20Zone%20Gym%20💪"
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-green-500 text-white w-14 h-14
    flex items-center justify-center
    rounded-full shadow-2xl
    hover:scale-110
    hover:shadow-[0_0_40px_#25D366]
    transition-all duration-300"
  >
    <FaWhatsapp className="text-xl group-hover:rotate-12 transition duration-300" />
  </a>

</div>
    </>
  );
}

export default App;