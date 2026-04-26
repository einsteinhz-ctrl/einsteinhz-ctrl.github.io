import { useReveal } from "@/hooks/use-reveal";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, label, title, description, children, className = "" }: SectionProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="container-tight">
        <div
          ref={ref}
          className={`mb-14 max-w-2xl transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="section-label">
            <span className="h-1 w-1 rounded-full bg-primary" />
            {label}
          </span>
          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tightest text-foreground sm:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
