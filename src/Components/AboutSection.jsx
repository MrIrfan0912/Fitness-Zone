import React from "react";

function AboutSection() {
  return (
    <section className="relative bg-black text-white py-20 md:py-32 overflow-x-hidden">

      {/* Big Faded Background Text (Responsive Safe) */}
      <h1
        className="absolute top-6 left-1/2 -translate-x-1/2
        text-[45px] sm:text-[70px] md:text-[120px]
        font-extrabold text-gray-500 opacity-10 tracking-widest
        whitespace-nowrap pointer-events-none z-0"
      >
        WHO WE ARE
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Small Heading */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[4px] md:tracking-[6px]">
            WHO WE ARE
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* LEFT IMAGE SIDE */}
          <div className="relative flex justify-center md:justify-start">

            {/* Outline 01 (Mobile Safe Position) */}
            <span
              className="absolute -top-10 left-2
              text-[70px] sm:text-[110px] md:text-[170px]
              font-extrabold text-transparent
              stroke-text select-none z-20"
            >
              01
            </span>

            {/* Ultra Burn Card */}
            <div className="relative group w-full max-w-[520px] 
            h-[280px] sm:h-[350px] md:h-[420px] 
            overflow-hidden ultra-card">

              {/* Image 1 */}
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
                alt="gym1"
                className="absolute inset-0 w-full h-full object-cover img-one"
              />

              {/* Image 2 */}
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
                alt="gym2"
                className="absolute inset-0 w-full h-full object-cover img-two"
              />

              {/* Fire Sweep */}
              <div className="fire-sweep"></div>

              {/* Sparks */}
              <div className="sparks"></div>

            </div>
          </div>

          {/* RIGHT TEXT SIDE */}
          <div className="space-y-5 text-gray-300 leading-7 sm:leading-8 text-base sm:text-lg">

            <p>
              At Fitness Zone we believe Crossfitters come in all shapes and sizes.
              We are all on a journey towards our own personal best health
              and fitness levels.
            </p>

            <p>
              Our facility is unlike any other gym you've been to before.
              We pride ourselves not only in providing world class training,
              but also in creating a motivating and dynamic environment.
            </p>

            <p className="text-white font-semibold">
              Come in for a free trial class! Lose some body fat, gain some
              friends, and get fit for life!
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;