import ProjectSection from "./ProjectSection";

const projects = [
  {
    title: "Manipulation Using Tactile Sensing",
    slug: "tactile-vision",
    description: "Developing the infrastructure for tactile-based learning.",
    tags: ["ROS2", "Python", "SLAM"],
    image: "tactile_front.png",
  },
  {
    title: "Almond Harvesting System",
    slug: "almond-harvester",
    description: "Complete almond system to track almond productivity.",
    tags: ["Arduino", "C++", "3D Printing"],
    image: "almond_front.jpg",
  },
  {
    title: "Embedded Arcade Game",
    slug: "arcade-game",
    description: "Developed an arcade game.",
    tags: ["Embedded C", "PIC32", "Gait Planning"],
    image: "simon_punkk.jpg",
  },
  {
    title: "Automated Liquid Handler",
    slug: "hamilton",
    description: "Collaboration with Hamilton Automation.",
    tags: ["Embedded", "C++", "Automation"],
    image: "inoq_front.jpg",
  },
  {
    title: "Haptic Pantograph",
    slug: "haptic-pantograph",
    description: "Developed an arcade game with haptic feedback.",
    tags: ["C++", "Haptics", "Processing"],
    image: "pantograph_front.jpg",
  },
  {
    title: "Manipulation and Navigation Robot",
    slug: "collab_robotics",
    description: "Using a collaborative robot to understand objects to retrieve objects.",
    tags: ["Navigation", "Computer Vision"],
    image: "locobot.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-4 px-16 md:px-16">
      <div className="w-full">
        <h2 className="font-serif text-3xl md:text-4xl mb-12 opacity-0 animate-fade-in-up">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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