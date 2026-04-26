const stats = [
  ["Total Nodes Mapped", "1,847,204"],
  ["Max Depth Traversal", "O(1)"],
  ["Uptime (90d)", "99.998%"],
  ["Query Latency", "P99 < 12ms"],
];

const Stats = () => (
  <section className="border-t border-hairline/60 pt-10 mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
    {stats.map(([label, value]) => (
      <div key={label}>
        <div className="text-xs font-mono text-foreground/50 mb-3">{label}</div>
        <div className="text-2xl md:text-3xl font-light tabular-nums tracking-tight">{value}</div>
      </div>
    ))}
  </section>
);

export default Stats;
