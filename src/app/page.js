import './globals.css'
import { HeroSection } from '@/components/HeroSection';
import { AboutMe } from '@/components/AboutMe';
import { Projects } from '@/components/Projects';
import { ContactMe } from '@/components/ContactMe';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col ">
      <HeroSection />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}


