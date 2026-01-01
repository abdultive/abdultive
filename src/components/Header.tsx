import { useState, useEffect } from 'react';

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="container py-6 flex items-center justify-between">
        <a
          href="/"
          className="font-display text-lg font-medium tracking-tight text-foreground hover:opacity-70 transition-opacity"
        >
          Abdultive.co
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#work" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#about" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        <div className="font-mono text-xs text-muted-foreground tracking-wider">
          {formatTime(time)} WIB
        </div>
      </nav>
    </header>
  );
};

export default Header;
