export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-6 font-montserrat">Kontakt</h1>

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
          <img
            src="/images/icons/instagram.svg"
            alt="Instagram"
            className="w-7 h-7"
          />
        </a>
      </div>
    </div>
  );
}
