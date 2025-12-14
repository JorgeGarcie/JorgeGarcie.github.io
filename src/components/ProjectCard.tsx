import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  tags: string[];
  image?: string;
  className?: string;
  delay?: string;
}

const ProjectCard = ({ title, tags, image, className, delay }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group relative rounded-xl border border-border overflow-hidden aspect-[3/2]",
        "transition-all duration-300 hover:border-primary/50 hover:glow",
        "opacity-0 animate-fade-in-up bg-muted",
        className,
        delay
      )}
    >
      {image && (
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      
      {/* Tags - fade in on hover */}
      <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="px-2 py-1 text-xs font-mono rounded-full bg-background/80 text-foreground border border-border/50 backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Title bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-background/90 backdrop-blur-sm px-4 py-3 border-t border-border/30">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;
