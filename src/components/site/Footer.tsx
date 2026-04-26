const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background py-10">
      <div className="container-tight flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} IT Leadership Portfolio. All rights reserved.</div>
        <div className="mono text-xs">
          Technology must create value — not complexity.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
