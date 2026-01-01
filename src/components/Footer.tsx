const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-muted-foreground">
            © {currentYear} Abdultive. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-xs text-muted-foreground">
              Based in Jakarta, ID
            </span>
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground">
              Available for projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
