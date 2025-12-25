const education = [
  {
    level: "Engineering",
    institution: "Velalar College Of Engineering And Technology",
    year: "2022 - Present",
    stream: "INFORMATION TECHNOLOGY",
  },
  {
    level: "HSC",
    institution: "Jai Saradha Matriculation Higher Secondary School",
    year: "2021 - 2022",
    stream: "Computer Science",
  },
  {
    level: "SSLC",
    institution: "Jai Saradha Matriculation Higher Secondary School",
    year: "2019 - 2020",
    stream: " ",
  },
];

const About = () => {
  return (
    <section className="min-h-screen bg-purple-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* About Me Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-700">ABOUT ME</h2>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
           I am a Full Stack Developer experienced in building dynamic web applications using the MERN stack.
           I have a strong passion for solving complex problems, optimizing user experiences, and delivering high-quality projects. I enjoy learning the latest technologies and applying them to create innovative solutions.
          </p>
        </div>

        {/* Academic Journey Title */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-orange-600">Academic Journey</h3>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <h4 className="text-xl font-bold text-purple-700">{edu.level}</h4>
              <p className="mt-2 text-gray-800 font-medium">{edu.institution}</p>
              <p className="mt-1 text-gray-500">{edu.stream}</p>
              <p className="mt-1 text-gray-500">{edu.year}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
