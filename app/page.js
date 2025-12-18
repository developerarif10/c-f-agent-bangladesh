import About from '../components/About';
import Calculator from '../components/Calculator';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Calculator />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}