import Section from "./Section";
import { ArrowUpRight } from "lucide-react";

const metrics = [
  { value: "35%", label: "Cloud cost optimized", detail: "At Eka Hospital, through usage optimization and right-sizing strategy.", color: "infra" },
  { value: "30%", label: "Network cost reduction", detail: "Across Eka Hospital connectivity via vendor negotiation and SDWAN adoption.", color: "infra" },
  { value: "100%", label: "Telephony recurring cost eliminated", detail: "Migrated from Cisco Telephony to an open platform system.", color: "governance" },
  { value: "Hybrid", label: "Infrastructure & Microservices adopted", detail: "At PT Kino Indonesia to improve performance, stability, and efficiency for business apps.", color: "ai" },
  { value: "Multi-site", label: "Enterprise infrastructure managed", detail: "Data Center, network, and branch IT across Kalbe Group operations.", color: "governance" },
  { value: "Zero Trust", label: "Security stack implemented", detail: "SDWAN, MFA, ZTNA, XDR, BitLocker, and immutable backup systems.", color: "security" },
];

const outcomes = [
  "Drove adoption of Hybrid IT Infrastructure and Microservices at PT Kino Indonesia",
  "Migrated workloads to EKS and Hyperconverged Platform at Eka Hospital",
  "Implemented immutable backup and NAS file sharing for resilience",
  "Built DevOps capability across people, process, and technology at Kalbe Group",
  "Negotiated vendor contracts delivering measurable cost reduction",
  "Led change management and user adoption across distributed teams",
];

const Impact = () => {
  return (
    <Section
      id="impact"
      label="Leadership & Impact"
      title="Outcomes that move the business — not tasks."
      description="Measurable improvements in cost discipline, resilience, and adoption — delivered across FMCG and Healthcare enterprises in Indonesia."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-3">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-card/60 p-7"
            style={{ borderTop: `2px solid hsl(var(--${m.color}))` }}
          >
            <div
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: `hsl(var(--${m.color}))` }}
            >
              {m.value}
            </div>
            <div className="mt-3 text-sm font-semibold text-foreground">{m.label}</div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-3 sm:grid-cols-2">
        {outcomes.map((o) => (
          <div
            key={o}
            className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/40 p-4 transition-colors hover:border-primary/40"
          >
            <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span className="text-sm text-foreground/90">{o}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Impact;
