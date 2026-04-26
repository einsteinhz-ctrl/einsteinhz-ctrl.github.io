import Section from "./Section";
import { Briefcase, Shield, Sparkles, TrendingUp } from "lucide-react";

const points = [
  {
    icon: Briefcase,
    color: "infra",
    title: "FMCG & Healthcare IT Leadership",
    text: "Deep enterprise IT experience across PT Kino Indonesia, Eka Hospital, and Kalbe Farma — fast-moving, high-volume, multi-location environments.",
  },
  {
    icon: Shield,
    color: "security",
    title: "Infrastructure, Security & Governance",
    text: "Hybrid infrastructure, SDWAN, ZTNA, MFA, XDR, immutable backup, and ISO-aligned governance across enterprise asset estates.",
  },
  {
    icon: TrendingUp,
    color: "governance",
    title: "Digital Transformation & Cost Optimization",
    text: "Cloud cost optimized 35%, network cost reduced 30%, telephony recurring cost eliminated — by aligning technology decisions with business value.",
  },
  {
    icon: Sparkles,
    color: "ai",
    title: "AI as a Business Accelerator",
    text: "Believing AI is a tool — not a trend — to enhance decision-making, automation, efficiency, and competitive advantage when applied thoughtfully.",
  },
];

const Summary = () => {
  return (
    <Section
      id="summary"
      label="Executive Summary"
      title="Technology must create value — not complexity."
      description="An IT professional with strong experience in FMCG and Healthcare, focused on deploying, scaling, and driving adoption of technology that moves the business forward."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2">
        {points.map((p) => (
          <div
            key={p.title}
            className="group bg-card/60 p-7 transition-colors hover:bg-card"
            style={{ borderTop: `2px solid hsl(var(--${p.color}))` }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg border"
                style={{
                  borderColor: `hsl(var(--${p.color}) / 0.4)`,
                  backgroundColor: `hsl(var(--${p.color}) / 0.12)`,
                  color: `hsl(var(--${p.color}))`,
                }}
              >
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Summary;
