function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-800 text-white flex items-center justify-center px-8"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-5xl font-bold mb-8">About Me</h2>

        <p className="text-xl leading-9 text-gray-300">
          Hello! I'm <span className="text-blue-400 font-semibold">Mohammed Samsheer</span>,
         Bachelor of Computer Applications (BCA) Student with a strong passion for Artificial
          Intelligence and Python development.

          <br /><br />

          I enjoy building AI-powered applications such as document chatbots,
          Retrieval-Augmented Generation (RAG) systems, and machine learning
          projects. I'm continuously learning modern AI technologies like
          LangChain, LangGraph, embeddings, vector databases, and LLMs.

          <br /><br />

          My goal is to become a skilled AI Engineer and contribute to building
          intelligent applications that solve real-world problems.
        </p>
      </div>
    </section>
  );
}

export default About;