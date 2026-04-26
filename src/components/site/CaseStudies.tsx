import Section from "./Section";

const cases = [
  {
    tag: "Infrastructure Modernization · Eka Hospital",
    color: "infra",
    title: "From legacy stack to Zero-Trust, cloud-optimized hospital IT",
    problem:
      "A growing hospital group needed reliable guest-facing services (SIMRS, WiFi), modern security posture, and disciplined cloud spend across multiple sites.",
    approach:
      "Implemented SDWAN, MFA, ZTNA, XDR, BitLocker on mobile devices, migrated workloads to EKS, deployed Hyperconverged Platform, and rolled out immutable backup with NAS-based file sharing. Embedded continuous cloud cost governance.",
    tech: ["SDWAN", "ZTNA", "MFA", "XDR", "EKS", "Hyperconverged", "Immutable Backup"],
    impact: [
      { k: "35%", v: "Cloud cost reduction" },
      { k: "30%", v: "Network cost reduction" },
      { k: "Zero", v: "Telephony recurring cost (Cisco → Open Platform)" },
    ],
  },
  {
    tag: "Hybrid Infrastructure · PT Kino Indonesia",
    color: "ai",
    title: "Hybrid infrastructure & microservices for FMCG scale",
    problem:
      "FMCG operations across multiple locations needed faster, more stable business applications without a heavy-handed infrastructure rebuild.",
    approach:
      "Drove adoption of Hybrid IT Infrastructure and Microservices Technology, evaluated vendors using a business-value framework, and reduced operational complexity through consolidation and automation — collaborating with business leaders to translate needs into IT roadmaps.",
    tech: ["Hybrid Cloud", "Microservices", "Cloud Collaboration", "ITSM"],
    impact: [
      { k: "Stable", v: "Performance for business apps" },
      { k: "High", v: "User adoption of new tooling" },
      { k: "Aligned", v: "IT roadmap to business strategy" },
    ],
  },
  {
    tag: "Enterprise Foundations · Kalbe Group",
    color: "governance",
    title: "Operating Data Centers and DevOps capability at group scale",
    problem:
      "One of Indonesia's largest healthcare groups needed disciplined operation of multiple Data Centers, branch IT, and a maturing DevOps capability.",
    approach:
      "Operated Data Center One and Data Center Two, managed end-to-end network, server, and storage layers, and built DevOps Infrastructure capability across people, process, and technology — backed by structured 3rd-party contracts.",
    tech: ["Data Center Ops", "Network", "Storage", "DevOps", "Vendor Mgmt"],
    impact: [
      { k: "Multi-DC", v: "Daily operations sustained" },
      { k: "Group-wide", v: "Network & storage managed" },
      { k: "Built", v: "Internal DevOps capability" },
    ],
  },
];

const CaseStudies = () => {
  return (
    <Section
      id="case-studies"
      label="Transformation Case Studies"
      title="Three transformations. One operating philosophy."
      description="Real programs across Indonesia's leading FMCG and Healthcare enterprises — focused on value, adoption, and disciplined cost."
    >
      <div className="space-y-6">
        {cases.map((c, i) => (
          <article
            key={c.title}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-7 transition-colors sm:p-10"
            style={{ borderTop: `2px solid hsl(var(--${c.color}))` }}
          >
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div
                  className="mono text-xs uppercase tracking-widest"
                  style={{ color: `hsl(var(--${c.color}))` }}
                >
                  Case 0{i + 1} · {c.tag}
                </div>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {c.title}
                </h3>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {c.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border bg-secondary/60 px-2 py-0.5 text-xs text-muted-foreground"
                      style={{ borderColor: `hsl(var(--${c.color}) / 0.35)` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6 lg:col-span-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Problem
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">{c.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Approach
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">{c.approach}</p>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Impact
                </div>
                <div className="mt-3 space-y-3">
                  {c.impact.map((m) => (
                    <div
                      key={m.v}
                      className="rounded-lg border border-border/60 bg-secondary/40 p-3"
                    >
                      <div
                        className="text-xl font-bold"
                        style={{ color: `hsl(var(--${c.color}))` }}
                      >
                        {m.k}
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default CaseStudies;
