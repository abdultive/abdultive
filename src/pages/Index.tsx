import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoGrid from '@/components/LogoGrid';
import About from '@/components/About';
import PaymentMethods from '@/components/PaymentMethods';
import Marquee from '@/components/Marquee';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <LogoGrid />
        <Marquee />
        <About />
        <PaymentMethods />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
