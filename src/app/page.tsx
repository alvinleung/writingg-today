export default function Home() {
  return (
    <section className="font-serif text-base mx-auto max-w-[80ch] min-h-svh flex flex-col">
      <div className="grid md:grid-cols-3 min-h-svh pt-4 px-4">
        <h1 className="md:col-span-1 mb-8">Beyond the hype</h1>
        <div className="md:col-span-2 flex flex-col gap-4 h-full">
          <p>Writing is thinking. And this is my attempt to think.</p>
          <p>
            To make AI truly fulfill its promise of improving the time we have
            on this planet, simply building is not enough. The ambition of this
            project is to stay in tune with the latest in tech, while critically
            examining the human factor of adopting intelligence.
          </p>
          <p>
            This, in my opinion, is where the tastebuds of building AI
            experiences can grow for a product designer in this age—akin to
            doing layout exercises.
          </p>
          <p>100% organic, free-range writing.</p>
          <p>- Alvin</p>
          <div className="opacity-50 mt-2">Actual writing coming soon...</div>
          <div className="mt-auto pb-4 pt-24 opacity-60 text-sm">
            <div>
              Typeface — Old Style Now by a{" "}
              <a
                href="http://audreychow.com/"
                className="underline"
                target="blank"
              >
                good friend
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
