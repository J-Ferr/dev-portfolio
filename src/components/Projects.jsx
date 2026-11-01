import './Projects.css';
import ProjectCard from './ProjectCard';
import moodReflectionImage from '../assets/projects/mood-reflection.png';
import taskManagerImage from '../assets/projects/task-manager.png';
import ecomApiImage from '../assets/projects/e-comm.png';


function Projects() {
    return (
        <section className="projects" id="projects">
            <h2>Featured Projects</h2>
            <p>
                A collection of projects where I've explored new ideas, 
                strengthened my skills, and turned what I've learned into 
                working applications.
            </p>

            <div className="projects-grid">
                <ProjectCard
                    title="Mood Reflection App"
                    description="A personal reflection app that helps users 
                    track their moods, capture daily thoughts, and recognize 
                    patterns over time through an interactive history and insights 
                    dashboard."
                    technologies="React · Express · PostgreSQL"
                    image={moodReflectionImage}
                    liveUrl="https://mood-reflection-frontend.onrender.com"
                    githubUrl="https://github.com/J-Ferr/mood-reflection-app"
                />

                <ProjectCard
                    title="Task Manager App"
                    description="A full-stack productivity app designed to keep tasks 
                    organized, with subtasks, priority levels, deadlines, and a dashboard 
                    that makes tracking progress easier."
                    technologies="React · Node.js · Express · PostgreSQL"
                    image={taskManagerImage}
                    githubUrl="https://github.com/J-Ferr/task-manager-app"
                />

                <ProjectCard
                    title="E-Commerce Backend API"
                    description="A RESTful backend for an e-commerce platform, built with 
                    secure user authentication, role-based access control, and endpoints 
                    for managing products and orders."
                    technologies="Node.js · Express · PostgreSQL · JWT"
                    image={ecomApiImage} 
                    githubUrl="https://github.com/J-Ferr/ecom-api"
                />
            </div>
        </section>
    );
}

export default Projects;