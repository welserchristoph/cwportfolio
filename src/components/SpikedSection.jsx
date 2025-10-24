import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SpikedSection() {
  const iframeRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // 30% sichtbar -> aktiv
    );

    if (iframeRef.current) observer.observe(iframeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={iframeRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-8 py-20"
    >
    <div className="text-center mb-10 font-montserrat">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
        SPIKED
      </h2>
      <p className="max-w-3xl mx-auto text-gray-300">
        Eine interaktive Web Experience über Gruppendruck, Entscheidungen und
        Selbstkontrolle – erlebe, wie kleine Momente alles verändern können.
      </p>
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {/* Dezente Tags */}
        <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded text-sm">DOP</span>
        <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded text-sm">Editor</span>
      </div>
    </div>

      <div className="w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
        <AnimatePresence mode="wait">
          {visible && (
            <motion.iframe
              key="spiked-iframe"
              src="https://spiked--ko-a7cz58zp.web.app/?p=english"
              title="Spiked Web Experience"
              className="w-full h-full border-0"
              allow="autoplay; fullscreen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            ></motion.iframe>
          )}
        </AnimatePresence>
        {!visible && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              Scrolle hierher, um <span className="text-orange-400">SPIKED</span> zu starten
            </motion.span>
          </div>
        )}
      </div>
    </section>
  );
}