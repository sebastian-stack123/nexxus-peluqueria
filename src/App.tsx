import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import History from './components/History';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="font-sans antialiased selection:bg-gold selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <History />
        <Gallery />
        <Testimonials />
        <Products />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
