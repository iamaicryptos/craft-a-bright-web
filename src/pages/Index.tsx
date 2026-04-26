import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import Features from "@/components/site/Features";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Syntagm — Structural integrity for complex datasets";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Syntagm is a mathematical architecture layer that enforces referential consistency across your entire infrastructure.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply blueprint-grid max-w-[1440px] mx-auto w-full" />
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <Nav />
        <main>
          <Hero />
          <Stats />
          <Features />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
