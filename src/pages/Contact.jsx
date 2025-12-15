export default function Contact() {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: "url('/images/portrait-3.jpg')",
        backgroundPosition: "top center",
      }}
    >
      {/* Overlay für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end min-h-screen pb-20 p-10">
        <h1 className="text-4xl font-bold mb-6 font-montserrat text-white">
          Kontakt
        </h1>

        <div className="text-center text-gray-300 text-lg space-y-3 font-montserrat">
          <p className="font-semibold text-white">Christoph Welser</p>

          <p>
            <a
              href="mailto:chr.welser@gmail.com"
              className="hover:text-gray-100 transition underline underline-offset-4 decoration-gray-600 hover:decoration-gray-300"
            >
              chr.welser@gmail.com
            </a>
          </p>

          <p>
            <a
              href="tel:+436508390333"
              className="hover:text-gray-100 transition underline underline-offset-4 decoration-gray-600 hover:decoration-gray-300"
            >
              +43 650 8390333
            </a>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-6">
          <a
            href="https://instagram.com/christophwelser"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-80 hover:opacity-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <rect x="2" y="2" width="20" height="20" rx="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
