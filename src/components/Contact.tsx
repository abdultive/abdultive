import { Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
            Get in Touch
          </span>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tightest leading-[0.95] mb-8">
            Let's Create
            <br />
            Something Great
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto">
            Have a project in mind? I'm always open to discussing new opportunities 
            and creative collaborations.
          </p>

          {/* DM link */}
          <a 
            href="https://twitter.com/abdultive"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-card hover:bg-secondary px-8 py-5 transition-all duration-300"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="font-mono text-lg tracking-wide">
              DM @abdultive
            </span>
            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>

          {/* Social links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-16">
            {[
              { name: 'Twitter', href: 'https://twitter.com/abdultive' },
              { name: 'Instagram', href: 'https://instagram.com/abdultive.co' },
              { name: 'Dribbble', href: 'https://dribbble.com/abdultive' },
              { name: 'Behance', href: 'https://behance.net/abdultive' },
              { name: 'LinkedIn', href: 'https://linkedin.com/in/abdultive' },
              { name: 'Layers', href: 'https://layers.to/abdultive' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors link-underline"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
