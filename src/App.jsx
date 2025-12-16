import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Services from "./sections/Services";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 overflow-x-hidden">
      <div className="relative">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl animate-pulse" />
          <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute -bottom-10 left-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 h-96 w-96 rounded-full bg-pink-500/5 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>

        <Navbar />

        <main className="relative z-10 pt-20">
          <Hero />
          <Services />
          <Projects />
          <Experience />
          <Skills />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
