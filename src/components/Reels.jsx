export default function Reels() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-12">
        Instagram Reels
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div
          className="w-full flex justify-center"
          dangerouslySetInnerHTML={{
            __html: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C6mPPdzLSfr/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>`,
          }}
        ></div>
        <div
          className="w-full flex justify-center"
          dangerouslySetInnerHTML={{
            __html: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DBCRW4cy8rw/" data-instgrm-version="14"></blockquote>`,
          }}
        ></div>
      </div>

      <script async src="//www.instagram.com/embed.js"></script>
    </section>
  );
}
