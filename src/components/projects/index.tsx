import Title from "../title";

const projects = [
  {
    // name: "KitobQand",
    image: "/kitobqand.png",
  },
  {
    // name: "Irmoqlar",
    image: "/irmoqlar.png",
  },
  {
    // name: "Kitob-Ulash",
    image: "/kitobulash.png",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="p-10 text-center">
      <Title className="text-secondary sm:text-cormorantSmall md:text-cormorantBig lg:text-middleSize">BIZNING LOYIHALAR</Title>
      <div className="flex justify-center gap-6 flex-wrap">
        {projects.map((project, index) => (
          <div key={index} className="p-6 shadow-lg rounded-lg w-[320px]">
            <img
              src={project.image}
              alt={project.image}
              className="w-full h-24 object-contain mb-4"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;