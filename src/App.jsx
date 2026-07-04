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
        className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center justify-center px-6"
      >
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-blue-400 uppercase tracking-[5px] font-semibold">
              Welcome To My Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">
              Mohammed <br />
              <span className="text-blue-400">Samsheer</span>
            </h1>

            <p className="mt-6 text-2xl text-gray-300">
              Bachelor of Computer Applications (BCA) Student
            </p>

            <p className="mt-4 text-gray-400 leading-8 text-lg max-w-xl">
              Passionate about Artificial Intelligence, Python, Machine
              Learning, Retrieval-Augmented Generation (RAG), React and
              building modern AI applications with excellent UI/UX.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#projects"
                className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-lg"
              >
                View Projects
              </a>

              <a
                href="/samsheer.cv.pdf"
                download="Mohammed_Samsheer_Resume.pdf"
                className="px-8 py-3 rounded-xl border border-blue-500 hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-300"
              >
                Download Resume
              </a>

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-4 bg-blue-500 rounded-full blur-3xl opacity-30"></div>

              {/* Profile */}
              <img
                src={profile}
                alt="Mohammed Samsheer"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl hover:scale-105 transition duration-500"
              />

            </div>
          </motion.div>

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