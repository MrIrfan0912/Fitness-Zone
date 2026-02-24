import React, { useState } from "react";
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

  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelected(images[index]);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const next = (currentIndex + 1) % images.length;
    setCurrentIndex(next);
    setSelected(images[next]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prev = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prev);
    setSelected(images[prev]);
  };

  return (
    <div className="bg-black min-h-screen py-28 px-6 relative">

      {/* Big Background Text with Shadow */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 
        text-[90px] sm:text-[140px] md:text-[150px]
        font-black tracking-widest
        text-white/5
        whitespace-nowrap pointer-events-none select-none
        drop-shadow-[0_20px_40px_rgba(220,38,38,0.6)]
        z-0">
        GALLERY
      </h1>

      {/* Foreground Heading */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-widest">
          OUR GALLERY
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid"
            onClick={() => openLightbox(index)}
          >
            <img
              src={img}
              alt="Gallery"
              className="w-full rounded-2xl transition duration-700 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 
              group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <span className="text-red-600 text-2xl font-bold tracking-widest">
                VIEW
              </span>
            </div>

            {/* Red Glow */}
            <div className="absolute inset-0 rounded-2xl 
              group-hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]
              transition duration-500 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal with Next/Prev */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            {/* Close on click outside */}
            <div className="absolute inset-0" />

            <motion.img
              src={selected}
              alt="Selected"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="max-h-[90vh] rounded-xl relative z-10"
            />

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 
                text-white text-4xl px-5 py-3 backdrop-blur-md bg-white/10 rounded-full
                hover:bg-red-600 transition z-50"
            >
              ❮
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 
                text-white text-4xl px-5 py-3 backdrop-blur-md bg-white/10 rounded-full
                hover:bg-red-600 transition z-50"
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