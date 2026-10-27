import './Projects.css';

function Projects() {
    return (
        <section className="projects" id="projects">
            <h2>Featured Projects</h2>
            <p>
                A selection of things I've built and learned along the way.
            </p>

            <div className="projects-grid">
                <article className="project-card">
                    <h3>Mood Reflection App</h3>
                    <p>
                        A full-stack application that allows users to track and reflect on their moods over time.
                    </p>
                    <span>React · Express · PostgreSQL</span>
                </article>
            </div>
        </section>
    );
}

export default Projects;