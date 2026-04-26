const features = [
  {
    code: "01",
    title: "Schema-first architecture",
    body: "Define data contracts once. Syntagm enforces them across every service, queue, and edge function automatically.",
  },
  {
    code: "02",
    title: "Deterministic routing",
    body: "Replace probabilistic load balancing with a routing engine that proves correctness before execution.",
  },
  {
    code: "03",
    title: "Zero-orphan guarantee",
    body: "Every node, edge, and reference is accounted for. No silent drift. No 3 a.m. pages.",
  },
];

const Features = () => (
  <section id="architecture" className="border-t border-hairline/60 mt-24 pt-20 pb-20">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
      <div className="md:col-span-4">
        <span className="text-xs font-mono text-accent">§ Architecture</span>
      </div>
      <div className="md:col-span-8">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-balance leading-[1.1] max-w-[24ch]">
          A structural primitive for the systems you can&apos;t afford to guess about.
        </h2>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
      {features.map((f) => (
        <div key={f.code} className="bg-background p-8 flex flex-col gap-6 min-h-[280px]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-foreground/40">{f.code}</span>
            <span className="size-1.5 rounded-full bg-accent" />
          </div>
          <h3 className="text-xl font-medium tracking-tight mt-auto">{f.title}</h3>
          <p className="text-sm text-foreground/60 leading-relaxed font-light">{f.body}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
