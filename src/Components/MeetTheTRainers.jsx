import React from "react";

const trainers = [
  {
    name: "ALEX CARTER",
    role: "Strength Coach",
    img: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "EMMA WATSON",
    role: "Fitness Trainer",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "TOM DOWNEY",
    role: "Crossfit Coach",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "SOPHIA LEE",
    role: "Yoga Instructor",
    img: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "DAVID KING",
    role: "Weightlifting Coach",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "LISA BROWN",
    role: "Cardio Expert",
    img: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=2070&auto=format&fit=crop"
  }
];

function MeetTheTrainers() {
  return (
    <section className="relative bg-black text-white py-24 overflow-x-hidden">

      {/* Big Background Text (Overflow Safe) */}
      <h1 className="absolute top-6 left-1/2 -translate-x-1/2
        text-[50px] sm:text-[80px] md:text-[110px]
        font-extrabold tracking-widest
        text-white/5 whitespace-nowrap
        pointer-events-none select-none">
        TRAINERS
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[6px]">
            MEET THE TRAINERS
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >

              {/* Image */}
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-full h-[380px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl 
                group-hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]
                transition duration-500 pointer-events-none">
              </div>

              {/* Content */}
              <div className="absolute bottom-0 w-full p-6 
                bg-gradient-to-t from-black via-black/70 to-transparent
                translate-y-6 group-hover:translate-y-0
                transition duration-500">

                <h3 className="text-xl font-bold tracking-wider">
                  {trainer.name}
                </h3>

                <p className="text-red-500 mt-1 text-sm tracking-wide">
                  {trainer.role}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default MeetTheTrainers;