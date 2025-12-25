import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-2xl max-w-lg text-center shadow-2xl">
        
        <h2 className="text-3xl font-bold text-gray-800">
          My Resume
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          You can download my resume to know more about my skills, projects,
          and experience as a MERN Stack Developer. Feel free to reach out
          after reviewing it.
        </p>

        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 px-7 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Download Resume
        </a>

      </div>
    </section>
  );
};

export default Resume;

