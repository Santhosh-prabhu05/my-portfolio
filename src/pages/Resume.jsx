import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
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
          href={resume}
          download
          className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-3 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-700 transition"
        >
          📄 Download Resume
        </a>

      </div>
    </section>
  );
};

export default Resume;
