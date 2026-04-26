import heroImage from "@/assets/hero-topology.jpg";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-20 md:pt-28 pb-20 items-start">
      <div className="md:col-span-6 flex flex-col md:pr-8">
        <div className="mb-8 inline-flex items-center gap-3 border border-hairline bg-surface/60 px-3 py-1.5 backdrop-blur-sm self-start">
          <span className="text-xs font-medium text-accent font-mono">V 2.4.0</span>
          <span className="w-px h-3 bg-hairline" />
          <span className="text-xs text-foreground/70">Deterministic routing engine live</span>
        </div>

        <h1 className="text-5xl md:text-[3.5rem] lg:text-[4rem] leading-[1.02] tracking-tight font-light text-balance mb-8">
          Absolute structural integrity for complex datasets.
        </h1>

        <p className="text-lg text-foreground/60 leading-relaxed text-pretty font-light mb-12 max-w-[45ch]">
          Syntagm provides a mathematical architecture layer that enforces referential
          consistency across your entire infrastructure — before a single query executes.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <button className="bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-accent transition-colors duration-300">
            Initialize workspace
          </button>
          <a href="#" className="text-sm font-medium flex items-center gap-2 hover:text-accent transition-colors group">
            Read documentation
            <span className="font-mono text-accent group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      <div className="md:col-span-6 relative mt-12 md:mt-0">
        <div className="aspect-square md:aspect-[4/3] w-full bg-hairline/30 relative p-4 border border-hairline/60">
          <img
            src={heroImage}
            alt="Isometric blueprint of a node topology"
            width={1280}
            height={960}
            className="w-full h-full object-cover"
          />

          <div className="absolute -left-6 -bottom-6 md:-left-8 md:-bottom-8 w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] bg-surface/80 backdrop-blur-xl border border-surface shadow-[0_16px_40px_rgba(0,0,0,0.06)] p-6">
            <div className="flex justify-between items-end mb-6 pb-4 border-b border-hairline">
              <div>
                <h3 className="text-xs font-mono text-foreground/50 uppercase tracking-widest mb-1">
                  Active Topology
                </h3>
                <p className="font-medium">Production Cluster Alpha</p>
              </div>
              <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1">Synced</span>
            </div>

            <div className="space-y-4 font-mono text-sm">
              {[
                ["Schema Validation", "100.00%"],
                ["Edge Resolution", "0.04ms"],
                ["Orphaned Nodes", "0"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between">
                  <span className="text-foreground/60">{k}</span>
                  <span className="tabular-nums">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
