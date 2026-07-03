import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import profile from "./assets/profile.png";

import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section
  id="home"
  className="min-h-screen relative flex items-center justify-center bg-black text-white px-6 overflow-hidden"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute w-[600px] h-[600px] bg-blue-600 rounded-full blur-[200px] opacity-30 top-[-200px] left-[-200px]"></div>
  <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[180px] opacity-20 bottom-[-200px] right-[-200px]"></div>

  <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center z-10">

    {/* LEFT TEXT */}
    <div className="space-y-6">

      <p className="text-blue-400 tracking-[6px] uppercase text-xs">
        AI Engineer • UI/UX Developer
      </p>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Mohammed <br /> Samsheer
      </h1>

      <p className="text-xl text-gray-300">
        Bachelor of Computer Applications (BCA) Student
        <span className="text-blue-400"> | Future AI Engineer</span>
      </p>

      <p className="text-gray-400 leading-relaxed max-w-xl">
        I build modern AI-powered applications and clean UI/UX designs using React,
        Tailwind CSS, and machine learning technologies. Passionate about solving real-world problems.
      </p>

      {/* BUTTONS */}
      <div className="flex gap-5 flex-wrap pt-4">

        <a
          href="#projects"
          className="px-7 py-3 bg-blue-600 rounded-full hover:scale-105 transition shadow-lg hover:shadow-blue-500/40"
        >
          Explore Projects
        </a>

        <a
          href="#contact"
          className="px-7 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
        >
          Contact Me
        </a>

      </div>

      {/* STATS */}
      <div className="flex gap-8 pt-8 text-sm text-gray-400">

        <div>
          <p className="text-white text-xl font-bold">2+</p>
          Projects
        </div>

        <div>
          <p className="text-white text-xl font-bold">AI</p>
          Focus
        </div>

        <div>
          <p className="text-white text-xl font-bold">2026</p>
          Graduate
        </div>

      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">

      <div className="relative">

        {/* rotating glow ring */}
        <div className="absolute w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

        {/* IMAGE CARD */}
        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:scale-105 transition duration-500">

          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover"
          />

        </div>

      </div>

    </div>

  </div>
</section>

      {/* ================= OTHER SECTIONS ================= */}
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;