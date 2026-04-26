import { useEffect } from "react";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Summary from "@/components/site/Summary";
import Impact from "@/components/site/Impact";
import Experience from "@/components/site/Experience";
import Expertise from "@/components/site/Expertise";
import Projects from "@/components/site/Projects";
import CaseStudies from "@/components/site/CaseStudies";
import AIVision from "@/components/site/AIVision";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "IT Infrastructure Leader · FMCG & Healthcare · Digital Transformation & AI";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      "IT leader with strong experience in FMCG and Healthcare — infrastructure, security, governance, asset management, digital transformation, and AI adoption."
    );
    setMeta(
      "keywords",
      "IT Leadership, IT Infrastructure, FMCG IT, Healthcare IT, Digital Transformation, AI Adoption, Cloud Optimization, ZTNA, SDWAN, EKS, Hybrid Infrastructure, Microservices, Kalbe, Eka Hospital, Kino Indonesia"
    );

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.origin + "/";

    // JSON-LD Person
    const ldId = "ld-person";
    let script = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = ldId;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      jobTitle: "Head of IT Infrastructure, Security, Governance & Asset Management",
      description:
        "IT professional with strong experience in FMCG and Healthcare — infrastructure, security, governance, digital transformation, and AI adoption.",
      url: window.location.origin,
      worksFor: {
        "@type": "Organization",
        name: "PT Kino Indonesia Tbk",
      },
      knowsAbout: [
        "IT Infrastructure",
        "IT Governance",
        "Hybrid Cloud",
        "Microservices",
        "Cybersecurity",
        "ZTNA",
        "SDWAN",
        "Digital Transformation",
        "Artificial Intelligence",
        "FMCG IT",
        "Healthcare IT",
      ],
    });
  }, []);

  return (
    <main className="relative min-h-screen bg-background">
      <Nav />
      <Hero />
      <Summary />
      <Impact />
      <Experience />
      <Expertise />
      <Projects />
      <CaseStudies />
      <AIVision />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
