import React from "react";
import profile from "../assets/profile.jpg";
import ProjectCard from "../components/ProjectCard";

// Import project images
import project1 from "../assets/project-images/portfolio.png";
import project2 from "../assets/project-images/ecommerce.jpeg";
import project3 from "../assets/project-images/zoom-gesture.jpeg";
import project4 from "../assets/project-images/task-manager.jpeg";
import project5 from "../assets/project-images/blinkit-dashboard.jpeg";

// Import icons
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 text-slate-800 scroll-smooth">

      {/* Home / Intro Section */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          {/* Profile Card */}
           <div className="rounded-xl shadow-xl overflow-hidden 
                  w-60 h-72 
                  md:w-72 md:h-96">
    <img
      src={profile}
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-blue-600"><span className="text-orange-700">Hello, I'm</span> SANTHOSH PRABHU</h1>
          <p className="text-lg md:text-xl">
            I am a passionate Full Stack Developer focusing on the MERN stack.
            I enjoy learning new technologies and building real-world projects
            that solve problems and improve user experience.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-20 bg-white">
  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-violet-900">
    About Me
  </h2>

  {/* About Paragraph */}
  <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12 text-center">
    I am a passionate and self-motivated web developer with a strong interest in
    building clean, responsive, and user-friendly applications. I enjoy
    transforming ideas into functional digital experiences that solve real-world
    problems. My journey in web development started with curiosity and gradually
    grew into a disciplined learning process through hands-on practice and real
    projects. I focus on writing clean, maintainable code while continuously
    improving my problem-solving skills.
    <br /><br />
    I believe learning never stops, and I actively explore new tools and
    technologies to stay up to date with modern development practices. Working on
    real-world projects has helped me understand the importance of performance,
    accessibility, and good user experience. I enjoy collaborating with others,
    sharing ideas, and learning from feedback. My goal is to grow as a developer
    while contributing meaningful solutions to impactful projects.
  </p>

  {/* Academic Journey */}
  <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-yellow-700">
    Academic Journey
  </h3>

  <div className="grid gap-6 md:grid-cols-3">
    {/* SSLC Card */}
    <div className="bg-yellow-100 rounded-lg shadow-lg p-6 text-center">
      <h4 className="font-bold text-xl mb-2">SSLC</h4>
      <p>Completed in 2020</p>
      <p>Jai Saradha Matriculation Higher Secondary School</p>
      <p>61.5%</p>
    </div>

    {/* HSC Card */}
    <div className="bg-yellow-100 rounded-lg shadow-lg p-6 text-center">
      <h4 className="font-bold text-xl mb-2">HSC</h4>
      <p>Completed in 2022</p>
      <p>Jai Saradha Matriculation Higher Secondary School</p>
      <p>78%</p>
    </div>

    {/* Engineering Card */}
    <div className="bg-yellow-100 rounded-lg shadow-lg p-6 text-center">
      <h4 className="font-bold text-xl mb-2">Engineering</h4>
      <p>2022 - Present</p>
      <p>Velalar College Of Engineering and Technology</p>
      <p>CGPA: 7.03</p>
    </div>
  </div>
</section>

     {/* Skills Section */}
<section id="skills" className="py-16 px-6 md:px-20 bg-white">
  <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
    <span className="text-gray-800">TECHNICAL</span>{" "}
    <span className="text-yellow-500">SKILLS</span>
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {[
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "C",
      "Java",
      "Power BI",
    ].map((skill, index) => (
      <div
        key={index}
        className="bg-violet-100 rounded-xl shadow-md py-6 text-center font-semibold
                   hover:shadow-lg hover:scale-105 transition"
      >
        {skill}
      </div>
    ))}
  </div>
</section>

     {/* Projects Section */}
<section id="projects" className="py-16 px-6 md:px-20 bg-white">
  <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-pink-900">
    Projects
  </h2>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    <ProjectCard
      image={project1}
      title="Portfolio Website"
      description="My personal portfolio website built with React and Tailwind CSS."
    />
    <ProjectCard
      image={project2}
      title="E-commerce App"
      description="A full-stack e-commerce application with cart and payment features."
    />
    <ProjectCard
      image={project3}
      title="Zoom Gesture App"
      description="Gesture recognition application built using modern web technologies."
    />
    <ProjectCard
      image={project4}
      title="Task Manager"
      description="A task management application for organizing daily activities."
    />
    <ProjectCard
      image={project5}
      title="Blinkit Dashboard"
      description="Dashboard UI built with React and Tailwind CSS."
    />
  </div>
</section>


      {/* Resume Section */}
<section id="resume" className="py-16 px-6 md:px-20 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-6">
    Resume
  </h2>

  <p className="text-lg max-w-3xl mx-auto mb-8">
    Below is my resume, which highlights my technical skills, academic background, and hands-on experience in building real-world web applications. It provides a clear overview of my projects, strengths, and career goals.
  </p>

  <a
    href="/resume.pdf"
    download
    className="inline-block px-6 py-3 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition"
  >
    Download Resume
  </a>
</section>



      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-20 bg-white text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">
    Get In Touch
  </h2>

  <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
  Feel free to reach out for collaborations, opportunities, or just to connect.
</p>

  <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg md:text-xl">
    {/* Email */}
    <a
      href="mailto:santhoshprabhu591@gmail.com"
      className="flex items-center gap-3 hover:text-yellow-500 transition"
    >
      <FaEnvelope className="text-2xl" />
      santhoshprabhu591@gmail.com
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/santhosh-prabhu-895a0627b/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:text-yellow-500 transition"
    >
      <FaLinkedin className="text-2xl" />
      LinkedIn
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/7845788082"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:text-yellow-500 transition"
    >
      <FaWhatsapp className="text-2xl" />
      WhatsApp
    </a>
  </div>
</section>


    </div>
  );
};

export default Home;
