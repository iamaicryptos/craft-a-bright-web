const Footer = () => (
  <footer className="border-t border-hairline/60 py-10 flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-foreground/50">
    <div>© {new Date().getFullYear()} Syntagm Systems</div>
    <div className="flex gap-6">
      <a href="#" className="hover:text-foreground">Status</a>
      <a href="#" className="hover:text-foreground">Security</a>
      <a href="#" className="hover:text-foreground">Privacy</a>
    </div>
  </footer>
);

export default Footer;
