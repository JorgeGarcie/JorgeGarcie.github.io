import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-4 md:px-16 py-16">
      <div className="w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto] gap-12 items-start">
          {/* Left side - Text content */}
          <div className="text-left max-w-3xl">
            {/* Bio */}
            <div className="space-y-2 mb-8 md:mb-16">  
              <p className="text-lg leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
                Mechanical Engineering graduate student at Stanford University specializing in robotics.
              </p>

              <p className="text-lg leading-relaxed opacity-0 animate-fade-in-up animation-delay-400">
                Previously at Neocis on the Yomi S surgical robot, contributing to the controls team.
              </p>

              <p className="text-lg leading-relaxed opacity-0 animate-fade-in-up animation-delay-600">
                Interested in intelligent systems that integrate sensing, autonomy, and human-centered design.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5 opacity-0 animate-fade-in-up animation-delay-800">
              <a 
                href="https://github.com/JorgeGarcie" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/joggarcia/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:jalgarci@stanford.com"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="opacity-0 animate-fade-in-up animation-delay-400 mt-8 md:mt-0">
              <div className="w-60 h-72 md:w-72 md:h-80 overflow-hidden static xl:relative xl:right-36 xl:top-10">
                <img
                  src="jorge.png"
                  alt="Jorge Garcia"
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;