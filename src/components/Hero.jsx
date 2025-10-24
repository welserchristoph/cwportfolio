import { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40; // schnellerer Parallax
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hintergrundbild mit Parallax-Effekt */}
      <div className="absolute inset-0">
        <img
          src="/images/portrait-2.jpeg"
          alt="portrait"
          className="absolute inset-0 w-full h-full object-cover brightness-90 transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(1.05)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40"></div>
      </div>

      {/* Inhaltsebene */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-12">
        {/* Logo statt Text */}
        <img
          src="/images/logo-cw-white.svg"
          alt="Christoph Welser Logo"
          className="w-64 md:w-80 drop-shadow-[0_0_20px_rgba(255,120,0,0.4)] mb-6 md:mb-0 md:mr-12"
        />

        {/* Text / Slogan */}
        <div className="text-white text-center md:text-left max-w-md md:max-w-lg">
          <p className="text-xl md:text-2xl mb-4">
            Kreativer Filmemacher & Medientechniker. Interaktive Kurzfilme und cineastische Projekte.
          </p>
          <p className="text-gray-300">
            Ich erzähle Geschichten, die bewegen – vom Konzept bis zum fertigen Film.  
            Scroll nach unten, um meine Arbeiten zu entdecken.
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          const nextSection = document.querySelector("#everything-beautiful"); // ID vom Abschnitt unter Hero
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <svg
          className="w-12 h-12 text-white animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>


    </div>
  );
}
