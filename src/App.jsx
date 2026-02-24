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

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <GymOrbitLoader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
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
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

        {/* CALL BUTTON */}
        <a
          href="tel:+919628725861"
          className="bg-red-600 text-white p-4 rounded-full
          shadow-2xl hover:scale-110
          hover:shadow-[0_0_30px_red]
          transition-all duration-300 animate-pulse"
        >
          <FaPhoneAlt className="text-xl" />
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/919628725861?text=Hi%20I%20want%20to%20join%20Fitness%20Zone%20Gym%20💪"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full
          shadow-2xl hover:scale-110
          hover:shadow-[0_0_30px_#25D366]
          transition-all duration-300"
        >
          <FaWhatsapp className="text-xl animate-bounce" />
        </a>

      </div>
    </>
  );
}

export default App;