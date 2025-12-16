import ProjectSection from "./ProjectSection";

const projects = [
  {
    title: "Manipulation Using Tactile Sensing",
    slug: "tactile-vision ",
    description: "Vision-based tactile sensing pipeline that enables contact detection and 3D surface geometry reconstruction during manipulation.",
    tags: ["ROS2", "Python", "PyTorch, Operational Space Framework"],
    image: "tactile_front.png",
  },
  {
    title: "Automated Liquid Handler",
    slug: "hamilton",
    description: "Compact, low-cost robotic system for automating Petri dish inoculation in veterinary diagnostic labs.",
    tags: ["Embedded", "C++", "Automation"],
    image: "inoq_front.jpg",
  },
  {
    title: "Haptic Pantograph",
    slug: "haptic-pantograph",
    description: "Haptic game system using a pantograph interface to render real-time force feedback for virtual collisions, inertia, and environmental interactions.",
    tags: ["Haptics", "Embedded Control", "Kinematics", "Real-Time Systems", "Human-Robot Interaction", "C++"],
    image: "pantograph_front.jpg",
  },
  {
    title: "Multimodal Robotic Navigation System",
    slug: "collab_robotics",
    description: "ROS2-based robotic navigation system integrating vision, speech, and gesture inputs.",
    tags: ["ROS2", "Navigation", "Computer Vision"],
    image: "locobot.png",
  },
  {
    title: "Almond Harvesting System",
    slug: "almond-harvester",
    description: "Sensing and control system for measuring almond yield and tree productivity during harvest.",
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