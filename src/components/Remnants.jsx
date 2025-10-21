import { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

export default function Remnants() {
  const video = {
    title: "Kurzfilm - Remnants (unreleased)",
    desc: "Ein Kurzfilm über Freundschaft, Verrat und Vergebung.",
    src: "https://vimeo.com/1117393192/a850f6bad3?share=copy",
    thumbnail: "/images/nationalpark-thumb.jpg",
  };

  const [playing, setPlaying] = useState(false);
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
      {/* Info links */}
      <div className="w-full md:w-1/5 flex flex-col justify-center gap-4">
        <h2 className="text-3xl font-bold text-orange-400">{video.title}</h2>
        <p className="text-gray-300">{video.desc}</p>
        <div className="flex flex-wrap gap-2">
            <span className="bg-orange-400 text-black px-2 py-1 rounded text-sm">Camera Operator</span>
            <span className="bg-orange-400 text-black px-2 py-1 rounded text-sm">DIT</span>
        </div>
    
      </div>

      {/* Video rechts */}
      <div
        className="w-full md:w-4/5 aspect-video relative overflow-hidden"
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
          muted={true}
          controls={true}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </div>
    </div>
  );
}