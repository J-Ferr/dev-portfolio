import './Projects.css';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <section className="projects" id="projects">
            <h2>Featured Projects</h2>
            <p>
                A selection of things I've built and learned along the way.
            </p>

            <div className="projects-grid">
                <ProjectCard
                    title="Mood Reflection App"
                    description="A full-stack application that allows users to track 
                    and reflect on their moods over time."
                    technologies="React · Express · PostgreSQL"
                    liveUrl="https://mood-reflection-frontend.onrender.com"
                    githubUrl="https://github.com/J-Ferr/mood-reflection-app"
                />

                <ProjectCard
                    title="Task Manager App"
                    description="A full-stack productivity application for managing tasks,
                    priorities, and deadlines."
                    technologies="React · Node.js · Express · PostgreSQL"
                    githubUrl="https://github.com/J-Ferr/task-manager-app"
                />

                <ProjectCard
                    title="E-Commerce Backend API"
                    description="A REST API with user authentication, 
                    product management, and order processing for an e-commerce platform."
                    technologies="Node.js · Express · PostgreSQL · JWT"
                    githubUrl="https://github.com/J-Ferr/ecom-api"
                />
            </div>
        </section>
    );
}

export default Projects;