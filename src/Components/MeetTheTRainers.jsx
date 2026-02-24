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
    <section className="relative bg-black text-white py-28 overflow-hidden">

      {/* Big Background Text */}
      <h1 className="absolute top-6 left-1/2 -translate-x-1/2
      text-[80px] md:text-[110px] font-extrabold
      text-gray-600 opacity-10 tracking-widest
      whitespace-nowrap pointer-events-none">
        MEET THE TRAINERS
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[6px]">
            MEET THE TRAINERS
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {trainers.map((trainer, index) => (
            <div key={index} className="trainer-card group">
              
              <img
                src={trainer.img}
                alt={trainer.name}
                className="trainer-img"
              />

              <div className="trainer-overlay">
                <h3>{trainer.name}</h3>
                <p>{trainer.role}</p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default MeetTheTrainers;