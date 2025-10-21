import { useEffect, useState } from "react";

const images = [
  "/images/portrait1.jpg",
  "/images/portrait2.jpg",
  "/images/portrait3.jpg",
];

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background images with parallax */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`bg-${i}`}
            className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-500"
            style={{
              transform: `translate(${offset.x * (i + 1)}px, ${offset.y * (i + 1)}px) scale(1.05)`,
              zIndex: i,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-12">
        {/* Name */}
        <h1 className="text-orange-500 font-cactus text-6xl md:text-8xl tracking-wide drop-shadow-[0_0_15px_rgba(255,120,0,0.6)] mb-6 md:mb-0 md:mr-12">
          Christoph Welser
        </h1>

        {/* Text / Slogan */}
        <div className="text-white text-center md:text-left max-w-md md:max-w-lg">
          <p className="text-xl md:text-2xl mb-4">
            Kreativer Filmemacher & Medientechniker. Interaktive Kurzfilme und cineastische Projekte.
          </p>
          <p className="text-gray-300">
            Ich erzähle Geschichten, die bewegen – vom Konzept bis zum fertigen Film. Scroll nach unten, um meine Arbeiten zu entdecken.
          </p>
        </div>
      </div>
    </div>
  );
}
