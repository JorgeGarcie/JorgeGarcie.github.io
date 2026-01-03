export interface ProjectData {
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  images: string[];
}

export const projectsData: ProjectData[] = [
  {
    title: "Manipulation Using Tactile Sensing",
    slug: "tactile-vision",
    description: "Vision-based tactile sensing pipeline that enables contact detection and 3D surface geometry reconstruction during manipulation.",
    fullDescription:
    `Robotic palpation often relies on force sensing, but force signals in soft-tissue environments are highly variable and insufficient for reliably identifying subtle subsurface features.

    I designed an end-to-end pipeline that integrates vision, force sensing, and robot kinematics. Using synchronized RGB images, force/torque measurements, and robot pose data, the system automatically isolates contact events and generates ground-truth supervision by projecting known CAD geometry into the camera frame. This enables scalable generation of RGB and depth labels without manual annotation.

    On top of this dataset, I trained learning-based perception models for contact detection, segmentation, and dense depth prediction from monocular RGB input. The perception stack is structured as a lightweight cascade that supports real-time CPU inference, making it suitable for closed-loop manipulation scenarios.
    `,
    tags: ["ROS2", "Python", "PyTorch", " Operational Space Framework"],
    image: "tactile_front.png",
    images: ["/tactile_scan.gif", "/tactile_front.png", "/full_stream.gif"],
  },
  {
    title: "Automated Liquid Handler",
    slug: "hamilton",
    description: "Compact, low-cost robotic system for automating Petri dish inoculation in veterinary diagnostic labs.",
    fullDescription:
    `Veterinary diagnostic labs operate under tight constraints in cost, space, and throughput, leaving many routine but critical tasks—such as Petri dish inoculation—largely manual. Sponsored by Hamilton Company, our team identified dish streaking as a consistent bottleneck across veterinary labs.

I led the electronics architecture and implemented the embedded control and user-facing software to coordinate motor control, sensing, and actuation across a compact laboratory automation system. The system automates dish handling, lid removal, sample streaking with configurable patterns, sterilization, and restacking through a minimal, technician-friendly workflow.
    `,
    tags: ["Embedded", "C++", "Automation"],
    image: "inoq_front.jpg",
    images: ["/inoq_front.jpg", "/PetriDown.gif", "/Unlidding.gif", "/Lidding.gif"],
  },
  {
    title: "Haptic Pantograph",
    slug: "haptic-pantograph",
    description: "Haptic game system using a pantograph interface to render real-time force feedback for virtual collisions, inertia, and environmental interactions.",
    fullDescription: `AstroTouch is a haptically enhanced 2D game that explores how force feedback improves interaction in virtual environments. Players control a spacecraft using a pantograph haptic interface and feel collisions, inertia, boundaries, and gravitational forces during gameplay.

I worked on the hardware, electronics, and embedded control of a 2-DOF pantograph device for real-time force rendering. The system uses encoder-equipped motors and low-latency control to track user motion and apply responsive force feedback.

Force feedback is computed using kinematic modeling and Jacobian-based force mapping, enabling stable virtual walls, collision impulses, and dynamic mass and damping effects. The system was demonstrated at the ME327 Open House, where users reported intuitive control and strong realism.`,
    tags: ["Haptics", "Embedded Control", "Kinematics", "Real-Time Systems", "Human-Robot Interaction", "C++"],
    image: "pantograph_front.jpg",
    images: ["/AstroTouch.gif", "/pantograph_cad.jpg", "/pantograph_circuits.jpg", "/pantograph_front.jpg"],
  },
  {
    title: "Multimodal Robotic Navigation System",
    slug: "collab_robotics",
    description: "ROS2-based robotic navigation system integrating vision, speech, and gesture inputs.",
    fullDescription: `This project implements a modular robotic navigation and interaction system built on ROS2, using a client-server architecture to coordinate perception, planning, and control.

The system integrates a state machine for task logic, real-time perception using YOLOv8 and MediaPipe, pose estimation, and navigation for safe object retrieval. Voice commands are processed via speech-to-text and mapped to high-level actions, enabling multimodal human-robot interaction.

The architecture is designed to support future Vision-Language-Action (VLA) models, allowing learned policies to replace rule-based logic while reusing the existing perception and navigation stack.`,
    tags: ["ROS2", "Navigation", "Computer Vision"],
    image: "locobot.png",
    images: ["/locobot.png", "/manipulation.gif", "/task1rotate.gif"],
  },
  {
    title: "Almond Harvesting System",
    slug: "almond-harvester",
    description: "Sensing and control system for measuring almond yield and tree productivity during harvest.",
    fullDescription: `California almond production operates at large scale, but accurate tree-level yield data is difficult to collect during harvest.

I worked on a field-deployed almond harvesting system that measures yield volume and weight directly during operation. The system integrates motors, load cells, laser-based volume sensing, and embedded control onto an existing shaker and conveyor without disrupting normal harvesting.

My contributions focused on motor control, low-latency embedded communication, and sensor integration. I implemented closed-loop speed control and synchronized yield measurements with position and motion data using onboard GNSS/IMU sensing, enabling spatially aligned datasets during live harvest operation.

The system was tested during active harvests and successfully produced structured data for yield estimation and tree productivity analysis.`,
    tags: ["C++", "Motor Control", "Sensor Integration"],
    image: "almond_front.jpg",
    images: ["/Conveyormp4.gif", "/FullSystemAlmonds.jpg", "/ScanAlmondsDepth.jpg", "/almond_front.jpg"],
  },
  {
    title: "Embedded Arcade Game",
    slug: "arcade-game",
    description: "Developed an arcade game.",
    fullDescription: `SimonPunk is a physical memory game inspired by Simon Says, implemented as a steampunk-style embedded system. Gameplay is initiated by inserting a token detected by an IR sensor, after which the system displays a randomized LED sequence for the user to replicate.

User input is collected through a potentiometer and button interface, while feedback is provided through LEDs, a vibration motor for error indication, and a servo-driven token dispenser. A display presents game state information such as score, remaining time, and system messages.

This project focused on integrating sensors, actuators, and real-time control logic on a microcontroller, emphasizing embedded systems design, hardware-software integration, and user interaction.`,
    tags: ["Embedded C", "PIC32", "Mechatronics"],
    image: "simon_punkk.jpg",
    images: ["/simon_punkk.jpg"],
  },
];
