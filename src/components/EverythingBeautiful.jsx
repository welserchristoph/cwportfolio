import { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

export default function EverythingBeautiful() {
  const video = {
    title: "Kurzfilm – Everything Beautiful began After",
    desc: "Ein interaktiver Kurzfilm über Misshandlung und Heilung.",
    src: "https://www.youtube.com/watch?v=B7L7n_7drmg",
    thumbnail: "/images/everything-beautiful-thumb.jpg",
  };

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true); // start muted
  const sectionRef = useRef(null);

  // IntersectionObserver: automatisch starten/pau­sieren beim Scrollen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPlaying(true);
        } else {
          setPlaying(false);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="snap-start min-h-screen flex flex-col md:flex-row items-center justify-center p-6 gap-6 bg-black"
    >
      {/* Player */}
      <div
        className="w-full md:w-4/5 aspect-video relative overflow-hidden"
        onClick={() => setMuted((prev) => !prev)}
      >
        {!playing && video.thumbnail && (
          <img
            src={video.thumbnail}
            alt={video.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <ReactPlayer
          src={video.src}
          width="100%"
          height="100%"
          playing={playing}
          muted={muted}
          controls={true}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </div>

{/* Info */}
<div className="w-full md:w-1/5 flex flex-col justify-center gap-4">
  <h2 className="text-3xl font-bold text-white font-montserrat">{video.title}</h2>
  <p className="text-gray-300 font-montserrat">{video.desc}</p>
  <div className="flex flex-wrap gap-2">
    {/* Dezente Tags */}
    <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm">Gaffer</span>
    <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm">AC</span>
  </div>
</div>

    </div>
  );
}

