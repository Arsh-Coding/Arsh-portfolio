import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';

export default function Home() {
  return (
    <div className="bg-[#0F172A] text-white min-h-screen w-full">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] ">
          <Navbar />
          <Hero />
        </div>
      </div>
 
      <About />
      <Project/>

      <Contact />
    </div>
  );
}
