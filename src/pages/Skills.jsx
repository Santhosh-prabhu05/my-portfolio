const skills = [
  "C",
  "Java",
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "Power BI",
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-12">
          Technical Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <p className="text-xl font-semibold text-slate-700">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
