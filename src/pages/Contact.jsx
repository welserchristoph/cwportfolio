import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Danke! Ich melde mich bald bei dir.");
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-6">Kontakt</h1>
      <p className="text-gray-300 mb-6 text-center max-w-xl">
        Schreib mir eine Nachricht, wenn du an Projekten interessiert bist oder
        zusammenarbeiten möchtest.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Dein Name"
          className="p-3 rounded-md bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Deine E-Mail"
          className="p-3 rounded-md bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Deine Nachricht"
          className="p-3 rounded-md bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
        >
          Absenden
        </button>
      </form>

      {formStatus && (
        <p className="mt-4 text-green-400 font-medium text-center">{formStatus}</p>
      )}
    </div>
  );
}
