import { useParams, Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { useState, useEffect } from "react";
import { projectsData } from "../data/projectsData";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData.find(p => p.slug === slug) : null;
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
