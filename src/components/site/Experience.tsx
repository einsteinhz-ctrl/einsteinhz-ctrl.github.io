import Section from "./Section";
import { Building2 } from "lucide-react";

const roles = [
  {
    company: "PT Kino Indonesia Tbk",
    title: "Head of IT Infrastructure, Security, Governance & Asset Management",
    period: "Jul 2025 — Present",
    location: "Indonesia · On-site",
    focus: "Cloud Collaboration · Hybrid Infrastructure · Microservices · IT Strategy",
    points: [
      "Drove adoption of Hybrid IT Infrastructure and Microservices to improve performance, stability, and efficiency for business applications.",
      "Managed enterprise infrastructure, security readiness, and continuity planning.",
      "Improved user productivity through practical, high-adoption solutions.",
      "Evaluated technologies and vendors using a business-value framework — balancing brand, cost, scalability, and long-term ROI.",
      "Translated business needs into achievable IT roadmaps with cross-functional leaders.",
      "Reduced operational complexity through workflow optimization, consolidation, and automation.",
    ],
  },
  {
    company: "Eka Hospital",
    title: "Head of IT Operations",
    period: "Feb 2023 — Jul 2025 · 2 yrs 6 mos",
    location: "Indonesia · On-site",
    focus: "IT Operations · Cloud Cost Optimization · Security Modernization",
    points: [
      "Led systems administration, network management, and technical support across the hospital group.",
      "Optimized cloud cost by 35% through monitoring, governance, and usage discipline.",
      "Implemented SDWAN, MFA, ZTNA, XDR, EKS migration, Hyperconverged Platform, immutable backup, and NAS file sharing.",
      "Migrated telephony from Cisco to an open platform — eliminating recurring cost.",
      "Reduced network cost by 30% through vendor negotiation across hospital connectivity.",
      "Enforced security protocols including BitLocker for mobile devices and disaster recovery planning.",
      "Ensured guest-facing services (SIMRS, Guest WiFi) remained dependable and exceeded user expectations.",
    ],
  },
  {
    company: "PT Kalbe Farma, Tbk",
    title: "Head of Corporate IT Infrastructure",
    period: "Aug 2021 — Feb 2023 · 1 yr 7 mos",
    location: "Jakarta, Indonesia",
    focus: "Data Center · Network · DevOps Capability",
    points: [
      "Managed IT operational infrastructure: Data Center, network, facility, and branch IT across Kalbe Group.",
      "Operated Data Center One and Data Center Two in daily operations.",
      "Built and developed DevOps Infrastructure capability across people, process, and technology.",
      "Managed all network, server, and storage infrastructure layers across the group.",
      "Owned 3rd-party maintenance contracts and vendor relationships.",
    ],
  },
  {
    company: "PT Kalbe Farma, Tbk",
    title: "14+ years across IT Infrastructure roles",
    period: "Earlier roles",
    location: "Jakarta, Indonesia",
    focus: "Foundations in enterprise IT operations and infrastructure",
    points: [
      "Progressive responsibility across infrastructure, operations, and project delivery within one of Indonesia's largest healthcare groups.",
    ],
  },
];

const Experience = () => {
  return (
    <Section
      id="experience"
      label="Career Journey"
      title="18+ years across Indonesia's largest FMCG and Healthcare groups."
      description="A progression from hands-on infrastructure to enterprise IT leadership — at Kalbe Farma, Eka Hospital, and PT Kino Indonesia."
    >
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2" aria-hidden />
        <div className="space-y-8">
          {roles.map((r, i) => (
            <article
              key={r.company + r.title}
              className="relative grid gap-6 md:grid-cols-2 md:gap-12"
            >
              <div
                className={`md:${i % 2 === 0 ? "pr-12 text-right" : "col-start-2 pl-12"}`}
              >
                <div className="relative rounded-2xl border border-border/60 bg-card/60 p-6 transition-colors hover:border-primary/40">
                  <div className="flex items-center gap-3 md:justify-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/60 text-primary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <div className="mono text-xs uppercase tracking-widest text-primary">
                        {r.company}
                      </div>
                      <div className="text-xs text-muted-foreground">{r.period}</div>
                    </div>
                  </div>

                  <h3 className="mt-5 text-left text-lg font-semibold text-foreground">
                    {r.title}
                  </h3>
                  <div className="mt-1 text-left text-xs text-muted-foreground">
                    {r.location}
                  </div>
                  <div className="mt-3 text-left text-xs font-medium text-foreground/80">
                    {r.focus}
                  </div>

                  <ul className="mt-4 space-y-2 text-left">
                    {r.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/70" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-primary md:left-1/2 md:block" />
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
