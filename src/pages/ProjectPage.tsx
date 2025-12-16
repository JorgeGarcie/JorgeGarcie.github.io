import { useParams, Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { useState, useEffect } from "react";

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
    description: "Vision-based tactile sensing pipeline that enables contact detection and 3D surface geometry reconstruction during manipulation.",
    fullDescription: 
    `Robotic palpation often relies on force sensing, but force signals in soft-tissue environments are highly variable and insufficient for reliably identifying subtle subsurface features.

    I designed an end-to-end pipeline that integrates vision, force sensing, and robot kinematics. Using synchronized RGB images, force/torque measurements, and robot pose data, the system automatically isolates contact events and generates ground-truth supervision by projecting known CAD geometry into the camera frame. This enables scalable generation of RGB and depth labels without manual annotation.

    On top of this dataset, I trained learning-based perception models for contact detection, segmentation, and dense depth prediction from monocular RGB input. The perception stack is structured as a lightweight cascade that supports real-time CPU inference, making it suitable for closed-loop manipulation scenarios.
    `,
    tags: ["ROS2", "Python", "PyTorch, Operational Space Framework"],
    images: ["/tactile_scan.gif", "/tactile_front.png",, "/full_stream.gif"],
  },
  "almond-harvester": {
    title: "Almond Harvesting System",
    description: "Sensing and control system for measuring almond yield and tree productivity during harvest.",
    fullDescription: `
California almond production operates at large scale, but accurate tree-level yield data is difficult to collect during harvest.

I worked on a field-deployed almond harvesting system that measures yield volume and weight directly during operation. The system integrates motors, load cells, laser-based volume sensing, and embedded control onto an existing shaker and conveyor without disrupting normal harvesting.

My contributions focused on motor control, low-latency embedded communication, and sensor integration. I implemented closed-loop speed control and synchronized yield measurements with position and motion data using onboard GNSS/IMU sensing, enabling spatially aligned datasets during live harvest operation.

The system was tested during active harvests and successfully produced structured data for yield estimation and tree productivity analysis.    
    `,
    tags: ["C++", "Motor Control", "Sensor Integration"],
    images: ["/Conveyormp4.gif","/FullSystemAlmonds.jpg","/ScanAlmondsDepth.jpg","/almond_front.jpg"],
  },
  "arcade-game": {
    title: "Embedded Arcade Game",
    description: "Developed an arcade game.",
    fullDescription: `
    SimonPunk is a physical memory game inspired by Simon Says, implemented as a steampunk-style embedded system. Gameplay is initiated by inserting a token detected by an IR sensor, after which the system displays a randomized LED sequence for the user to replicate.

User input is collected through a potentiometer and button interface, while feedback is provided through LEDs, a vibration motor for error indication, and a servo-driven token dispenser. A display presents game state information such as score, remaining time, and system messages.

This project focused on integrating sensors, actuators, and real-time control logic on a microcontroller, emphasizing embedded systems design, hardware-software integration, and user interaction.
`,
    tags: ["Embedded C", "PIC32", "Gait Planning"],
    images: ["/simon_punkk.jpg"],
  },
  "hamilton": {
    title: "Automated Liquid Handler",
    description: "Compact, low-cost robotic system for automating Petri dish inoculation in veterinary diagnostic labs.",
    fullDescription: 
    `
Veterinary diagnostic labs operate under tight constraints in cost, space, and throughput, leaving many routine but critical tasks—such as Petri dish inoculation—largely manual. Sponsored by Hamilton Company, our team identified dish streaking as a consistent bottleneck across veterinary labs.

I led the electronics architecture and implemented the embedded control and user-facing software to coordinate motor control, sensing, and actuation across a compact laboratory automation system. The system automates dish handling, lid removal, sample streaking with configurable patterns, sterilization, and restacking through a minimal, technician-friendly workflow.
    
    
    `,
    tags: ["Embedded", "C++", "Automation"],
    images: ["/inoq_front.jpg", "/PetriDown.gif", "/Unlidding.gif", "/Lidding.gif"],
  },
  "haptic-pantograph": {
    title: "Haptic Pantograph",
    description: "Haptic game system using a pantograph interface to render real-time force feedback for virtual collisions, inertia, and environmental interactions.",
    fullDescription: `
AstroTouch is a haptically enhanced 2D game that explores how force feedback improves interaction in virtual environments. Players control a spacecraft using a pantograph haptic interface and feel collisions, inertia, boundaries, and gravitational forces during gameplay.

I worked on the hardware, electronics, and embedded control of a 2-DOF pantograph device for real-time force rendering. The system uses encoder-equipped motors and low-latency control to track user motion and apply responsive force feedback.

Force feedback is computed using kinematic modeling and Jacobian-based force mapping, enabling stable virtual walls, collision impulses, and dynamic mass and damping effects. The system was demonstrated at the ME327 Open House, where users reported intuitive control and strong realism.    `,
    tags: ["Haptics", "Embedded Control", "Kinematics", "Real-Time Systems", "Human-Robot Interaction", "C++"],
    images: ["/AstroTouch.gif", "/pantograph_cad.jpg", "/pantograph_circuits.jpg", "/pantograph_front.jpg"],
  },
  "collab_robotics": {
    title: "Multimodal Robotic Navigation System",
    description: "ROS2-based robotic navigation system integrating vision, speech, and gesture inputs.",
    fullDescription: `
    This project implements a modular robotic navigation and interaction system built on ROS2, using a client-server architecture to coordinate perception, planning, and control.

The system integrates a state machine for task logic, real-time perception using YOLOv8 and MediaPipe, pose estimation, and navigation for safe object retrieval. Voice commands are processed via speech-to-text and mapped to high-level actions, enabling multimodal human-robot interaction.

The architecture is designed to support future Vision-Language-Action (VLA) models, allowing learned policies to replace rule-based logic while reusing the existing perception and navigation stack.
`,
    tags: ["Navigation", "Computer Vision"],
    images: ["/locobot.png", "/manipulation.gif", "/task1rotate.gif"],
  },
};

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

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
              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(project.images[0])}
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
                  className="aspect-square rounded-lg bg-muted border border-border overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image)}
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
};

export default ProjectPage;
