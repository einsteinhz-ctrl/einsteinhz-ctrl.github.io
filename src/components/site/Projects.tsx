import Section from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Hybrid Infrastructure & Microservices",
    role: "Head of Infrastructure",
    problem: "Modernize FMCG business applications for performance and stability across multi-location operations.",
    stack: ["Hybrid Cloud", "Microservices", "Containers"],
    tag: "Infrastructure · PT Kino Indonesia",
  },
  {
    name: "Cloud Cost Optimization Program",
    role: "Lead",
    problem: "Reduce cloud spend without sacrificing reliability across hospital workloads.",
    stack: ["FinOps", "Governance", "Right-sizing"],
    tag: "Cloud · Eka Hospital",
  },
  {
    name: "Zero-Trust Security Stack",
    role: "Architect",
    problem: "Modernize hospital security posture with practical, adoptable controls.",
    stack: ["SDWAN", "ZTNA", "MFA", "XDR", "BitLocker"],
    tag: "Security · Eka Hospital",
  },
  {
    name: "Open-Platform Telephony Migration",
    role: "Lead",
    problem: "Eliminate recurring telephony cost while maintaining service reliability.",
    stack: ["Open Telephony", "VoIP", "Migration"],
    tag: "Cost · Eka Hospital",
  },
  {
    name: "EKS & Hyperconverged Platform",
    role: "Architect",
    problem: "Modernize compute platform for resilience, scaling, and operational simplicity.",
    stack: ["AWS EKS", "Hyperconverged", "Immutable Backup", "NAS"],
    tag: "Platform · Eka Hospital",
  },
  {
    name: "DevOps Capability Build-out",
    role: "Head of Corporate IT Infra",
    problem: "Establish DevOps practice across people, process, and tooling at group scale.",
    stack: ["DevOps", "CI/CD", "Automation"],
    tag: "Capability · Kalbe Group",
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      label="Selected Initiatives"
      title="A curated set of real enterprise programs."
      description="Each initiative solves a real operational or transformation problem — and reflects how I think about systems, cost, people, and AI."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.name}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
          >
            <div className="absolute inset-0 bg-gradient-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mono text-xs uppercase tracking-widest text-primary">{p.tag}</div>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{p.name}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.problem}</p>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span className="mono whitespace-nowrap text-xs text-muted-foreground">{p.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
