const Nav = () => {
  return (
    <nav className="h-20 flex items-center justify-between border-b border-hairline/60">
      <div className="flex items-center gap-12">
        <a href="#" className="font-medium tracking-tight text-lg">
          Syntagm<span className="text-accent">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-foreground/60">
          <a href="#architecture" className="hover:text-foreground transition-colors">Architecture</a>
          <a href="#schema" className="hover:text-foreground transition-colors">Schema</a>
          <a href="#deployments" className="hover:text-foreground transition-colors">Deployments</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-foreground/50">
          <span className="block size-1.5 bg-accent rounded-full animate-pulse" />
          System Operational
        </div>
        <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Log in</a>
      </div>
    </nav>
  );
};

export default Nav;
