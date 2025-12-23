const Marquee = () => {
  const items = [
    'Logo Design',
    '•',
    'Brand Identity',
    '•',
    'Visual Systems',
    '•',
    'Creative Direction',
    '•',
    'Typography',
    '•',
  ];

  return (
    <div className="py-8 border-y border-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, index) => (
              <span 
                key={index}
                className="mx-6 font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
