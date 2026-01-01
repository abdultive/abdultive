const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="reveal-up mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Logo Designer & Brand Identity
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tightest leading-[0.9] mb-8 reveal-up animate-delay-100">
            Abdul
            <br />
            <span className="text-muted-foreground">Memorable</span>
            <br />
            Identities
          </h1>

          {/* Description */}
          <p className="max-w-lg text-lg text-muted-foreground leading-relaxed mb-12 reveal-up animate-delay-200">
            Focused on creating distinctive logos and brand identities that resonate. 
            Every mark tells a story.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-8 reveal-up animate-delay-300">
            <a 
              href="#work" 
              className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest"
            >
              <span className="link-underline">View Work</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 reveal-up animate-delay-500">
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
