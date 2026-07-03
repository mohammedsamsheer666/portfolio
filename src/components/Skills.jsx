function Skills() {
  const skills = [
    { name: "Python", level: "90%" },
    { name: "React", level: "60%" },
    { name: "html", level: "70%%" },
    { name: "JavaScript", level: "80%" },
    { name: "Machine Learning", level: "75%" },
    { name: "RAG / LangChain", level: "70%" },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 text-white px-6">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-400">My Skills</h2>
        <p className="text-gray-400 mt-3">
          Technologies I use to build AI & Web Applications
        </p>
      </div>

      {/* SKILLS GRID */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-white/10 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg hover:shadow-blue-500/20"
          >

            {/* SKILL NAME */}
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold">{skill.name}</span>
              <span className="text-blue-400">{skill.level}</span>
            </div>

            {/* PROGRESS BAR BACKGROUND */}
            <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">

              {/* PROGRESS BAR FILL */}
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-700"
                style={{ width: skill.level }}
              ></div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;