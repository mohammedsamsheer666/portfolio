import chatbotPdf from "../assets/chatbot pdf.png";
import fabricDetection from "../assets/fabric detection.png";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-800 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition duration-300">

            <img
              src={chatbotPdf}
              alt="AI PDF Chatbot"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-blue-400">
                AI PDF Chatbot
              </h3>

              <p className="mt-4 text-gray-300">
                An AI-powered chatbot that allows users to upload PDF
                documents and ask questions using Retrieval-Augmented
                Generation (RAG).
              </p>

              <div className="mt-5">
                <h4 className="font-semibold text-white">
                  Technologies Used
                </h4>

                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>Python</li>
                  <li>Streamlit</li>
                  <li>LangChain</li>
                  <li>ChromaDB</li>
                  <li>Ollama</li>
                </ul>
              </div>

              <a
                href="PASTE_YOUR_AI_PDF_CHATBOT_GITHUB_LINK_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View on GitHub
              </a>

            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition duration-300">

            <img
              src={fabricDetection}
              alt="Fabric Defect Detection"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-blue-400">
                Fabric Defect Detection
              </h3>

              <p className="mt-4 text-gray-300">
                Developed an AI-powered Fabric Defect Detection system
                using deep learning and computer vision techniques to
                identify defects in fabric images.
              </p>

              <div className="mt-5">
                <h4 className="font-semibold text-white">
                  Technologies Used
                </h4>

                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>Python</li>
                  <li>TensorFlow</li>
                  <li>OpenCV</li>
                  <li>YOLO</li>
                  <li>Streamlit</li>
                </ul>
              </div>

              <a
                href="https://github.com/mohammedsamsheer666/Fabric-Defect-Detection-Using-YOLO-"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View on GitHub
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;