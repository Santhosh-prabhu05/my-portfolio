const ProjectCard = ({ title, description, tech, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
      
      {/* Thumbnail */}
      <img
        src={image || "https://via.placeholder.com/600x400"}
        alt={title}
        className="w-full h-44 object-cover"
      />

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-800">
          {title}
        </h3>

        <p className="text-slate-600 text-sm mt-2">
          {description}
        </p>

        <p className="text-sm text-orange-600 mt-3 font-medium">
          {tech}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
