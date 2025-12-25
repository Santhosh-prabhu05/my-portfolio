const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden
                    hover:shadow-xl hover:-translate-y-1 transition duration-300">
      
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Project Content */}
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
