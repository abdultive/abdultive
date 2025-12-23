import LogoCard from './LogoCard';
import logo01 from '@/assets/logos/logo-01.png';
import logo02 from '@/assets/logos/logo-02.png';
import logo03 from '@/assets/logos/logo-03.png';
import logo04 from '@/assets/logos/logo-04.png';
import logo05 from '@/assets/logos/logo-05.png';
import logo06 from '@/assets/logos/logo-06.png';
import logo07 from '@/assets/logos/logo-07.png';
import logo08 from '@/assets/logos/logo-08.png';
import logo09 from '@/assets/logos/logo-09.png';
import logo10 from '@/assets/logos/logo-10.png';
import logo11 from '@/assets/logos/logo-11.png';
import logo12 from '@/assets/logos/logo-12.png';

const logos = [
  {
    id: 1,
    title: 'Nebula Tech',
    category: 'Technology',
    year: '2024',
    imageSrc: logo01,
  },
  {
    id: 2,
    title: 'Vertex Studio',
    category: 'Creative Agency',
    year: '2024',
    imageSrc: logo02,
  },
  {
    id: 3,
    title: 'Horizon Coffee',
    category: 'F&B',
    year: '2024',
    imageSrc: logo03,
  },
  {
    id: 4,
    title: 'Aurora Wellness',
    category: 'Health',
    year: '2023',
    imageSrc: logo04,
  },
  {
    id: 5,
    title: 'Forge Athletics',
    category: 'Sports',
    year: '2023',
    imageSrc: logo05,
  },
  {
    id: 6,
    title: 'Cipher Security',
    category: 'Technology',
    year: '2023',
    imageSrc: logo06,
  },
  {
    id: 7,
    title: 'Bloom Gardens',
    category: 'Lifestyle',
    year: '2023',
    imageSrc: logo07,
  },
  {
    id: 8,
    title: 'Pulse Media',
    category: 'Entertainment',
    year: '2023',
    imageSrc: logo08,
  },
  {
    id: 9,
    title: 'Terra Collective',
    category: 'Architecture',
    year: '2022',
    imageSrc: logo09,
  },
  {
    id: 10,
    title: 'Kinetic Labs',
    category: 'Research',
    year: '2022',
    imageSrc: logo10,
  },
  {
    id: 11,
    title: 'Monolith',
    category: 'Fashion',
    year: '2022',
    imageSrc: logo11,
  },
  {
    id: 12,
    title: 'Quantum Finance',
    category: 'Fintech',
    year: '2022',
    imageSrc: logo12,
  },
];

const LogoGrid = () => {
  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="container">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Selected Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tightest">
              Logo Collection
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground md:text-right">
            A curated selection of brand identities crafted for forward-thinking companies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border stagger-children">
          {logos.map((logo) => (
            <LogoCard key={logo.id} {...logo} />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-border">
          {[
            { value: '50+', label: 'Projects' },
            { value: '35+', label: 'Clients' },
            { value: '5+', label: 'Years' },
            { value: '∞', label: 'Coffee Cups' },
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="font-display text-4xl md:text-5xl font-medium mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;
