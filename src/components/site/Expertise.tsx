import Section from "./Section";
import { Bot, Cloud, Cog, Lock, Network, Workflow } from "lucide-react";

const groups = [
  {
    icon: Network,
    title: "IT Strategy & Governance",
    color: "governance",
    items: ["IT roadmap & planning", "Vendor & cost strategy", "ITSM / ITIL", "Asset management", "Business-value framework"],
  },
  {
    icon: Cloud,
    title: "Infrastructure & Cloud",
    color: "infra",
    items: ["Hybrid infrastructure", "EKS & Microservices", "Hyperconverged platform", "Data Center operations", "Cloud cost optimization"],
  },
  {
    icon: Lock,
    title: "Security & Asset Management",
    color: "security",
    items: ["SDWAN · ZTNA · MFA", "XDR endpoint security", "Immutable backup & DR", "BitLocker / device security", "Compliance readiness"],
  },
  {
    icon: Cog,
    title: "Collaboration & Operations",
    color: "infra",
    items: ["Cloud collaboration tools", "Open-platform telephony", "Guest-facing IT services", "SIMRS reliability", "Multi-location ops"],
  },
  {
    icon: Bot,
    title: "AI Adoption & Intelligent Systems",
    color: "ai",
    items: ["AI for decision-making", "Workflow automation", "AIOps adoption", "Practical AI literacy", "Outcome-driven AI use"],
  },
  {
    icon: Workflow,
    title: "Transformation & Change",
    color: "ai",
    items: ["User adoption programs", "Cross-functional alignment", "Process consolidation", "Cultural change", "Stakeholder communication"],
  },
];

const Expertise = () => {
  return (
    <Section
      id="expertise"
      label="Core Expertise"
      title="Where infrastructure meets business and AI."
      description="A blend of deep technical foundations, executive judgment, and a forward lens on intelligent automation — sharpened in FMCG and Healthcare."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="glass-card group p-6 transition-all duration-300 hover:-translate-y-0.5"
            style={{ borderTop: `2px solid hsl(var(--${g.color}))` }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg border"
              style={{
                borderColor: `hsl(var(--${g.color}) / 0.4)`,
                backgroundColor: `hsl(var(--${g.color}) / 0.12)`,
                color: `hsl(var(--${g.color}))`,
              }}
            >
              <g.icon className="h-5 w-5" />
            </div>
            <span
              className="mt-5 inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest"
              style={{
                borderColor: `hsl(var(--${g.color}) / 0.5)`,
                color: `hsl(var(--${g.color}))`,
                backgroundColor: `hsl(var(--${g.color}) / 0.08)`,
              }}
            >
              {g.color === "infra" && "Infrastructure"}
              {g.color === "security" && "Security"}
              {g.color === "governance" && "Governance"}
              {g.color === "ai" && "AI · Transformation"}
            </span>
            <h3 className="mt-3 text-base font-semibold text-foreground">{g.title}</h3>
            <ul className="mt-4 space-y-2">
              {g.items.map((it) => (
                <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span
                    className="h-1 w-1 rounded-full"
                    style={{ backgroundColor: `hsl(var(--${g.color}) / 0.8)` }}
                  />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Expertise;
