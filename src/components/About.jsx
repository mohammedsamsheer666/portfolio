function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-950 text-white px-6"
    >
      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-blue-400">About Me</h2>
        <p className="text-gray-400 mt-3">
          Get to know more about me, my skills and my goals
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT - TEXT */}
        <div className="space-y-6">

          <h3 className="text-2xl font-bold">
            Passionate Developer & UI/UX Learner
          </h3>

          <p className="text-gray-400 leading-relaxed">
            I am a Bachelor of Computer Applications (BCA) student with a strong interest
            in Artificial Intelligence, Machine Learning, and modern web development.
            I enjoy building clean, responsive, and user-friendly interfaces.
          </p>

          <p className="text-gray-400 leading-relaxed">
            My focus is on creating real-world AI applications using Python, RAG,
            LangChain, and modern frontend technologies like React and Tailwind CSS.
          </p>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="p-4 bg-slate-900 border border-white/10 rounded-xl hover:scale-105 transition">
              <h4 className="text-blue-400 font-bold">Education</h4>
              <p className="text-gray-400 text-sm mt-1">
                BCA Student
              </p>
            </div>

            <div className="p-4 bg-slate-900 border border-white/10 rounded-xl hover:scale-105 transition">
              <h4 className="text-blue-400 font-bold">Focus</h4>
              <p className="text-gray-400 text-sm mt-1">
                AI & UI/UX Development
              </p>
            </div>

            <div className="p-4 bg-slate-900 border border-white/10 rounded-xl hover:scale-105 transition">
              <h4 className="text-blue-400 font-bold">Tech Stack</h4>
              <p className="text-gray-400 text-sm mt-1">
                React, Python, Tailwind
              </p>
            </div>

            <div className="p-4 bg-slate-900 border border-white/10 rounded-xl hover:scale-105 transition">
              <h4 className="text-blue-400 font-bold">Goal</h4>
              <p className="text-gray-400 text-sm mt-1">
                AI Engineer
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT - UI CARD */}
        <div className="flex justify-center">

          <div className="relative">

            {/* glow background */}
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

            {/* main card */}
            <div className="relative bg-slate-900 border border-white/10 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">

              <h3 className="text-xl font-bold text-blue-400 mb-4">
                My Journey
              </h3>

              <ul className="space-y-4 text-gray-400">

                <li>✔ Started learning Python & Web Development</li>
                <li>✔ Built AI projects using ML & OpenCV</li>
                <li>✔ Learned React & Tailwind CSS</li>
                <li>✔ Built portfolio with UI/UX design</li>

              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;