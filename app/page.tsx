import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import ProjectList from '@/components/Projects/ProjectList';
import Principles from '@/components/Principles';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="top">
        <Hero />
        <About />
        <Experience />
        <ProjectList />
        <Principles />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}