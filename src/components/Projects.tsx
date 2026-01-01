import ProjectSection from "./ProjectSection";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="py-4 px-16 md:px-16">
      <div className="w-full">
        <h2 className="font-serif text-3xl md:text-4xl mb-12 opacity-0 animate-fade-in-up">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectSection
              key={project.slug}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;