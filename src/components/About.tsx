const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 spotlight pointer-events-none rotate-180" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              About
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tightest leading-[1.1] mb-8">
              Design is
              <br />
              <span className="text-muted-foreground">Problem Solving</span>
            </h2>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a brand identity designer focused on creating logos and visual systems 
              that help companies stand out. With a minimalist approach and attention to 
              detail, I craft marks that are both timeless and memorable.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Every project starts with understanding the core of your brand—its values, 
              audience, and aspirations. From there, I distill these elements into a 
              visual identity that speaks volumes without saying too much.
            </p>

            {/* Services */}
            <div className="grid grid-cols-2 gap-6">
              {[
                'Logo Design',
                'Brand Identity',
                'Visual Systems',
                'Brand Guidelines',
                'Typography',
                'Art Direction',
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-3 text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                  <span className="font-mono uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
