import Section from "./Section";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "you@example.com", href: "mailto:you@example.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://linkedin.com" },
];

const Contact = () => {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Always open to discussions, connections, and collaboration."
      description="Open to leadership conversations, advisory engagements, and opportunities to build smarter, more impactful technology environments — especially across FMCG and Healthcare."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group relative flex items-start justify-between gap-4 overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/60 text-primary transition-colors group-hover:border-primary/50">
                <l.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
                {l.label}
              </div>
              <div className="mt-1 text-base font-semibold text-foreground">{l.value}</div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Contact;
