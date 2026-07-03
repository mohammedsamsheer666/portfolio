function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950 text-white px-6">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-400">My Projects</h2>
        <p className="text-gray-400 mt-3">
          Some of my work in AI, Machine Learning & Web Development
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* PROJECT 1 */}
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg hover:shadow-blue-500/30">

          <h3 className="text-2xl font-bold text-blue-400">
            Fabric Defect Detection
          </h3>

          <p className="text-gray-300 mt-4">
            AI-powered system that detects defects in fabric images using CNN and OpenCV.
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">Python</span>
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">OpenCV</span>
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">TensorFlow</span>
          </div>

          {/* BUTTON */}
          <a
            href="https://github.com/mohammedsamsheer666/Fabric-Defect-Detection-Using-YOLO-"
            target="_blank"
            className="inline-block mt-6 px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            View Code
          </a>

        </div>

        {/* PROJECT 2 */}
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg hover:shadow-blue-500/30">

          <h3 className="text-2xl font-bold text-blue-400">
            AI Chatbot (RAG System)
          </h3>

          <p className="text-gray-300 mt-4">
            Chatbot that uses Retrieval-Augmented Generation (RAG) to answer PDF questions.
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">LangChain</span>
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">Python</span>
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">LLM</span>
          </div>

          {/* BUTTON */}
          <a
            href="https://github.com/mohammedsamsheer666/pdf-chatbot.git"
            target="_blank"
            className="inline-block mt-6 px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            View Code
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;