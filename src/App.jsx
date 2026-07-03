import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import profile from "./assets/profile.png";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center max-w-4xl">

          {/* Profile Photo */}
          <motion.div
            className="flex justify-center mb-6 mt-18"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <img
                src={profile}
                alt="Mohammed Samsheer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Mohammed Samsheer
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-2xl text-gray-300 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Bachelor of Computer Applications (BCA) Student
            <span className="text-blue-400">
              {" | "}Aspiring AI Engineer
            </span>
          </motion.p>

          {/* Description */}
          <motion.p
            className="mt-6 text-base md:text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Passionate about Artificial Intelligence, Python, Machine Learning,
            Retrieval-Augmented Generation (RAG), and building real-world AI
            applications.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex justify-center gap-4 flex-wrap"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 transition"
            >
              View My Projects
            </a>

            <a
              href="/samsheer.cv.pdf"
              download
              className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 hover:scale-105 transition"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center gap-8 mt-10 text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <a
              href="https://github.com/mohammedsamsheer666"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mohammed-samsheer-40a6583aa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:mohammedsamsheer39@gmail.com"
              className="hover:text-blue-400 hover:scale-125 transition"
            >
              <FaEnvelope />
            </a>
          </motion.div>

        </div>
      </motion.section>

      {/* Other Sections */}
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