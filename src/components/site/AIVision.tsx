import Section from "./Section";
import { Bot, Cpu, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "AI as a business accelerator",
    text: "I believe AI will be a key accelerator for business performance — not as a trend, but as a tool to enhance decision-making, automation, efficiency, and competitive advantage when applied thoughtfully.",
  },
  {
    icon: Sparkles,
    title: "What I'm exploring today",
    text: "Practical AI use cases in IT operations: LLM-assisted runbooks, knowledge copilots grounded in internal policies, and lightweight automation that augments — not replaces — IT teams.",
  },
  {
    icon: Bot,
    title: "Vision: AI-augmented IT for FMCG & Healthcare",
    text: "Infrastructure that observes itself, services that explain themselves, and IT teams empowered by intelligent systems aligned to measurable business outcomes — adopted at the speed real organizations move.",
  },
];

const AIVision = () => {
  return (
    <Section
      id="ai"
      label="AI & Future Direction"
      title="Building the next decade of IT — augmented by AI."
      description="A pragmatic, governance-first approach to bringing intelligent systems into infrastructure, security, and operations."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-7"
            style={{ borderTop: "2px solid hsl(var(--ai))" }}
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-ai/10 blur-3xl" />
            <div className="relative">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg border"
                style={{
                  borderColor: "hsl(var(--ai) / 0.4)",
                  backgroundColor: "hsl(var(--ai) / 0.12)",
                  color: "hsl(var(--ai))",
                }}
              >
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Architecture diagram */}
      <div className="mt-12 overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-8 sm:p-12">
        <div className="mono mb-6 text-xs uppercase tracking-widest text-primary">
          Reference architecture · AI-augmented IT operations
        </div>
        <div className="grid gap-3 text-center sm:grid-cols-3">
          {[
            { t: "Signal Layer", d: "Observability · Tickets · Logs · Assets" },
            { t: "Intelligence Layer", d: "LLMs · RAG · Agents · Evaluators" },
            { t: "Action Layer", d: "Runbooks · ITSM · Provisioning · Comms" },
          ].map((c, i) => (
            <div key={c.t} className="relative">
              <div className="rounded-xl border border-border bg-secondary/40 p-5">
                <div className="text-sm font-semibold text-foreground">{c.t}</div>
                <div className="mt-2 text-xs text-muted-foreground">{c.d}</div>
              </div>
              {i < 2 && (
                <div className="hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-primary to-transparent absolute right-[-24px] top-1/2 sm:block" />
              )}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Grounded in business outcomes, governed by policy, measured by impact — not novelty.
        </p>
      </div>
    </Section>
  );
};

export default AIVision;
