function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-slate-950 text-white px-6"
    >
      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-blue-400">
          Education
        </h2>
        <p className="text-gray-400 mt-3">
          My academic background and learning journey
        </p>
      </div>

      {/* CONTAINER */}
      <div className="max-w-4xl mx-auto relative">

        {/* VERTICAL LINE */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-blue-500/30"></div>

        {/* ITEM 1 */}
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-center">

          {/* DOT */}
          <div className="hidden md:flex w-1/2 justify-end pr-6">
            <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
          </div>

          {/* CARD */}
          <div className="md:w-1/2 bg-slate-900 border border-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold text-blue-400">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-gray-300 mt-2">
              Currently pursuing BCA with focus on programming, AI, and software development.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              2023 - Present
            </p>
          </div>

        </div>

        {/* ITEM 2 */}
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-center">

          {/* CARD (left on desktop) */}
          <div className="md:w-1/2 bg-slate-900 border border-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition md:text-right">
            <h3 className="text-xl font-bold text-blue-400">
              Self Learning - AI & Python
            </h3>
            <p className="text-gray-300 mt-2">
              Learning Python, Machine Learning, RAG, LangChain and AI development.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              2024 - Present
            </p>
          </div>

          {/* DOT */}
          <div className="hidden md:flex w-1/2 justify-start pl-6">
            <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;