import { Link } from "react-router-dom";

interface ProjectSectionProps {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  image: string;
  index: number;
}

const ProjectSection = ({ title, slug, description, tags, image, index }: ProjectSectionProps) => {
  const delayClass = index === 0 ? "animation-delay-200" : 
                     index === 1 ? "animation-delay-400" : 
                     index === 2 ? "animation-delay-600" : 
                     index === 3 ? "animation-delay-800" : "animation-delay-1000";

  return (
    <Link to={`/project/${slug}`} className="block group">
      <article className={`opacity-0 animate-fade-in-up ${delayClass}`}>
        {/* Project Image */}
        <div className="aspect-[4/3] mb-4 overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
        
        {/* Project Info */}
        <div className="space-y-2">
          <h3 className="font-serif text-xl md:text-2xl group-hover:opacity-70 transition-opacity duration-300">
            {title}
          </h3>
          
          <p className="text-foreground/70 leading-relaxed text-sm">
            {description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs text-foreground/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectSection;