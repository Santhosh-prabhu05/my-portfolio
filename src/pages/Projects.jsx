import ProjectCard from "../components/ProjectCard";

// Images (optional – placeholder will be used if missing)
import ecommerceImg from "../assets/project-images/ecommerce.jpeg";
import portfolioImg from "../assets/project-images/portfolio.png";
import taskImg from "../assets/project-images/task-manager.jpeg";
import zoomImg from "../assets/project-images/zoom-gesture.jpeg";
import blinkitImg from "../assets/project-images/blinkit-dashboard.jpeg";

const Projects = () => {
  return (
    <section className="min-h-screen bg-orange-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-orange-600">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <ProjectCard
            title="E-commerce App"
            description="A full-stack shopping application with authentication and product management."
            tech="React, Node.js, MongoDB"
            image={ecommerceImg}
          />

          <ProjectCard
            title="Portfolio Website"
            description="Personal portfolio website showcasing projects and skills."
            tech="React, Tailwind CSS"
            image={portfolioImg}
          />

          <ProjectCard
            title="Task Manager"
            description="A task management application to organize daily activities efficiently."
            tech="MERN Stack"
            image={taskImg}
          />

          <ProjectCard
            title="Zoom Gesture Interpretation: From Action to Voice"
            description="A system that interprets hand gestures and converts them into voice output for accessibility."
            tech="Computer Vision, Python"
            image={zoomImg}
          />

          <ProjectCard
            title="Power BI Dashboard – Blinkit Grocery Data"
            description="Interactive Power BI dashboard analyzing sales trends and customer insights."
            tech="Power BI, Data Visualization"
            image={blinkitImg}
          />

        </div>
      </div>
    </section>
  );
};

export default Projects;
