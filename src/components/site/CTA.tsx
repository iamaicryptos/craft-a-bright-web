const CTA = () => (
  <section className="border-t border-hairline/60 py-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
    <div className="md:col-span-8">
      <span className="text-xs font-mono text-accent">§ Begin</span>
      <h2 className="mt-6 text-4xl md:text-6xl font-light tracking-tight text-balance leading-[1.05] max-w-[18ch]">
        Stop debugging consistency. Start designing it.
      </h2>
    </div>
    <div className="md:col-span-4 flex flex-col gap-4">
      <button className="bg-foreground text-background px-6 py-4 text-sm font-medium hover:bg-accent transition-colors">
        Initialize workspace
      </button>
      <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2">
        Schedule a technical briefing
        <span className="font-mono text-accent">→</span>
      </a>
    </div>
  </section>
);

export default CTA;
