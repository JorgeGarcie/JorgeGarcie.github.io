import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-4 md:px-16 py-16">
      <div className="w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto] gap-12 items-start">
          {/* Left side - Text content */}
          <div className="text-left max-w-5xl">
            {/* Bio */}
            <div className="space-y-2 mb-8 md:mb-16">
              <p className="text-xl leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
                I'm currently a Master's student in Mechanical Engineering at Stanford University, specializing in robotics.
                I'm working in the <a href="http://bdml.stanford.edu/" className="underline">Biomimetics and Dextrous Manipulation Lab</a>, developing <a href="https://jorgegarcie.github.io/project/tactile-vision" className="underline">tactile sensing</a> for medical applications.
              </p>

              <p className="text-xl leading-relaxed opacity-0 animate-fade-in-up animation-delay-400">
                Previously, I was a Software Engineer on the controls team at <a href="https://www.neocis.com/" className="underline">Neocis</a>, working on the Yomi S surgical robot.
                Earlier, I worked on agricultural robotics at <a href="https://faculty.engineering.ucdavis.edu/vougioukas/research/" className="underline">UC Davis</a>, where I was a CITRIS Workforce Innovation awardee.
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