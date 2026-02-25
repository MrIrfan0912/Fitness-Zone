import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function GallerySection() {
  const images = [
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=900",
    "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=700",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=850",
    "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=950",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=750",
    "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=880",
    "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?q=80&w=820",
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Scroll lock + ESC
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      const handleKey = (e) => e.key === "Escape" && closeLightbox();
      window.addEventListener("keydown", handleKey);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKey);
      };
    }
  }, [selectedIndex]);

  return (
    <div className="bg-black min-h-screen py-24 px-4 relative overflow-x-hidden">

      {/* Background Text (Overflow Safe) */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 
        text-[60px] sm:text-[100px] md:text-[140px]
        font-black tracking-widest text-white/5
        whitespace-nowrap pointer-events-none select-none
        z-0 max-w-full">
        GALLERY
      </h1>

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-widest">
          OUR GALLERY
        </h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
      </div>

      {/* Masonry Grid FIXED */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-full object-cover rounded-2xl transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 
                group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-red-600 text-xl font-bold tracking-widest">
                  VIEW
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence mode="wait">
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.img
              key={images[selectedIndex]}
              src={images[selectedIndex]}
              alt="Selected"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-h-[80vh] max-w-full rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-6 text-white text-sm">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 
                text-white text-3xl px-3 py-2 bg-white/10 rounded-full
                hover:bg-red-600 transition"
            >
              ❮
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 
                text-white text-3xl px-3 py-2 bg-white/10 rounded-full
                hover:bg-red-600 transition"
            >
              ❯
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default GallerySection;