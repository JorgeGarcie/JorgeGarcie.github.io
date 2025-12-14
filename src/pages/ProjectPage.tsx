import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ProjectData {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  images: string[];
}

const projectsData: Record<string, ProjectData> = {
  "tactile-vision": {
    title: "Manipulation Using Tactile Sensing",
    description: "Developing the infrastructure for tactile-based learning.",
    fullDescription: "This project focuses on developing the infrastructure for tactile-based learning and manipulation. By integrating tactile sensors with robotic systems, we enable robots to understand and interact with objects through touch, similar to human manipulation capabilities.",
    tags: ["ROS2", "Python", "SLAM"],
    images: ["/tactile_front.png"],
  },
  "almond-harvester": {
    title: "Almond Harvesting System",
    description: "Complete almond system to track almond productivity.",
    fullDescription: "A comprehensive almond harvesting system designed to track and optimize almond productivity. This system combines automated harvesting mechanisms with data collection and analysis to improve yield efficiency and reduce manual labor in commercial almond orchards.",
    tags: ["Arduino", "C++", "3D Printing"],
    images: ["/almond_front.jpg"],
  },
  "arcade-game": {
    title: "Embedded Arcade Game",
    description: "Developed an arcade game.",
    fullDescription: "An embedded arcade game developed using PIC32 microcontroller. This project showcases low-level programming skills and real-time game logic implementation on resource-constrained hardware, featuring custom graphics rendering and user input handling.",
    tags: ["Embedded C", "PIC32", "Gait Planning"],
    images: ["/simon_punkk.jpg"],
  },
  "hamilton": {
    title: "Automated Liquid Handler",
    description: "Collaboration with Hamilton Automation.",
    fullDescription: "A collaboration project with Hamilton Automation to develop and optimize automated liquid handling systems. This work involved programming and integrating precision robotics for laboratory automation, improving throughput and accuracy in liquid transfer operations.",
    tags: ["Embedded", "C++", "Automation"],
    images: ["/inoq_front.jpg"],
  },
  "haptic-pantograph": {
    title: "Haptic Pantograph",
    description: "Developed an arcade game with haptic feedback.",
    fullDescription: "A haptic feedback system built using a pantograph mechanism. This project combines physical computing with force feedback to create immersive user experiences in gaming and simulation applications, demonstrating advanced control systems and real-time haptic rendering.",
    tags: ["C++", "Haptics", "Processing"],
    images: ["/pantograph_front.jpg", "/AstroTouch.gif", "/pantograph_cad.jpg", "/pantograph_circuits.jpg"],
  },
  "collab_robotics": {
    title: "Manipulation and Navigation Robot",
    description: "Using a collaborative robot to understand objects to retrieve objects.",
    fullDescription: "A collaborative robotics project focused on object understanding and retrieval. This system combines manipulation and navigation capabilities, allowing the robot to autonomously identify, navigate to, and retrieve target objects in complex environments.",
    tags: ["Navigation", "Computer Vision"],
    images: ["/locobot.png"],
  },
};

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back link */}
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-sm font-mono rounded-full bg-secondary text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Main image */}
        <div className="aspect-video rounded-xl bg-muted border border-border overflow-hidden mb-8">
          {project.images.length > 0 ? (
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground">Main project image</span>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="prose prose-neutral max-w-none mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Gallery section */}
        {project.images.length > 1 && (
          <>
            <h2 className="text-2xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.slice(1).map((image, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-muted border border-border overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${i + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default ProjectPage;
