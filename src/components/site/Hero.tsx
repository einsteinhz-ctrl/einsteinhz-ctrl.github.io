import { ArrowRight, Linkedin, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Glow */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-glow animate-glow-pulse" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />

      <div className="container-tight">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/40 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="mono">Currently leading</span>
            <span>IT Infrastructure at PT Kino Indonesia Tbk</span>
          </div>

          <h1 className="text-balance text-5xl font-bold tracking-tightest text-gradient sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up">
            Bridging Technology &amp; Business in FMCG &amp; Healthcare
          </h1>

          <p
            className="mt-6 text-lg font-medium text-foreground/90 sm:text-xl animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Infrastructure · Security · Governance · Digital Transformation · AI Adoption
          </p>

          <p
            className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            Turning technology into{" "}
            <span className="text-foreground">real business impact</span> — value, not complexity —
            across fast-moving, multi-location enterprises.
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href="#impact"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: "hsl(var(--ai))" }}
            >
              View Leadership Impact
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              Career Journey
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-secondary/40"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn Profile
            </a>
          </div>

          {/* Stat bar */}
          <div
            className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-4 animate-fade-up"
            style={{ animationDelay: "420ms" }}
          >
            {[
              { k: "18+", v: "Years in Enterprise IT", color: "infra" },
              { k: "35%", v: "Cloud cost reduction", color: "security" },
              { k: "30%", v: "Network cost reduction", color: "governance" },
              { k: "Multi-site", v: "FMCG & Healthcare", color: "ai" },
            ].map((s) => (
              <div
                key={s.v}
                className="relative bg-card/80 p-5 backdrop-blur"
                style={{ borderTop: `2px solid hsl(var(--${s.color}))` }}
              >
                <div
                  className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                  style={{ color: `hsl(var(--${s.color}))` }}
                >
                  {s.k}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
