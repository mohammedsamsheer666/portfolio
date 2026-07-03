function Skills() {
  const skills = [
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Machine Learning",
    "Artificial Intelligence",
    "LangChain",
    "RAG",
    "Git",
    "GitHub",
    "SQL",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 text-white py-20 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:bg-blue-600 transition duration-300"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;