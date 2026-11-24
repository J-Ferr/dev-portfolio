import { useEffect, useState, useRef } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import moodReflectionImage from '../assets/projects/mood-reflection.png';
import taskManagerImage from '../assets/projects/task-manager.png';
import ecomApiImage from '../assets/projects/e-comm.png';


function Projects({ waveReplay }) {
    const projectsGridRef = useRef(null);
    const [showWorkWave, setShowWorkWave] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setShowWorkWave(entry.isIntersecting),
            { rootMargin: "0px 0px -100px 0px" }
        );

        observer.observe(projectsGridRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="projects" id="work">
            <div className={`projects-wave-layer${showWorkWave ? " is-in-view" : ""}`}>
              <div key={waveReplay} className="projects-wave" aria-hidden="true">
                <svg viewBox="0 0 1200 400" preserveAspectRatio="none">
                    {[0, -12, 12, -24, 24, -36].map((offset, index) => (
                        <path
                            key={offset}
                            className={index === 0 ? "projects-wave-main" : "projects-wave-echo"}
                            d="M -40 300 C 160 345, 260 320, 440 250 S 720 160, 860 155 S 1090 55, 1240 42"
                            transform={`translate(0 ${offset})`}
                            pathLength="1"
                            style={{
                              "--wave-delay": `${index * 110}ms`,
                              "--wave-phase": `${index * -0.65}s`,
                            }}
                        />
                        ))}
                </svg>
              </div>
            </div>
            
            <h2>Selected Work</h2>
            

            <div className="projects-grid" ref={projectsGridRef}>
                <ProjectCard
                    title="Mood Reflection App"
                    description="A personal reflection app that helps users 
                    track their moods, capture daily thoughts, and recognize 
                    patterns over time through an interactive history and insights 
                    dashboard."
                    technologies="React · Express · PostgreSQL"
                    image={moodReflectionImage}
                    imageAlt="Illustration of mood tracking dashboard with daily reflection and mood insights"
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
                    imageAlt="Illustration representing a task management dashboard with tasks, priorities, and progress tracking"
                    githubUrl="https://github.com/J-Ferr/task-manager-app"
                />

                <ProjectCard
                    title="E-Commerce Backend API"
                    description="A RESTful backend for an e-commerce platform, built with 
                    secure user authentication, role-based access control, and endpoints 
                    for managing products and orders."
                    technologies="Node.js · Express · PostgreSQL · JWT"
                    image={ecomApiImage} 
                    imageAlt="Illustration representing an e-commerce backend with API endpoints and database connections"
                    githubUrl="https://github.com/J-Ferr/ecom-api"
                />
            </div>
        </section>
    );
}

export default Projects;