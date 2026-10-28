import { ExternalLink, CodeXml } from 'lucide-react';

function ProjectCard({ 
    title, 
    description, 
    technologies,
    image, 
    liveUrl, 
    githubUrl 
}) {
    return (
        <article className="project-card">
            {image && (
                <img 
                  src={image} 
                  alt={`${title} application screenshot`}
                  className="project-image" 
                />
            )}
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
            <span>{technologies}</span>

            <div className="project-links">
                {liveUrl && (
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink size={15} />
                    </a>
                )}
                {githubUrl && (
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        GitHub <CodeXml size={15} />
                    </a>
                )}
              </div>
            </div>
        </article>
    );
}

export default ProjectCard;