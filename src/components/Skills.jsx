import './Skills.css';
import { Monitor, Server, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend",
    icon: <Monitor />,
    skills: ["JavaScript", "React","TypeScript", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: <Server />,
    skills: ["Node.js", "Python", "Express", "PostgreSQL", "Rest APIs"]
  },
  {
    title: "Tools & Workflow",
    icon: <Wrench />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vite"]
  }
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
        <div className="skills-container">
            <span className="skills-label">MY TOOLKIT</span>

            <h2>Skills & Technologies</h2>

            <p className="skills-intro">
                Technologies and tools I use to build fucntional,
                responsive, and user-focused applications.
            </p>

            <div className="skills-grid">
                {skillCategories.map((category) => (
                    <div className="skill-card" key={category.title}>
                        <div className="skill-card-heading">
                            {category.icon}
                            <h3>{category.title}</h3>
                        </div>

                        <div className="skill-tags">
                            {category.skills.map((skill) => (
                                <span className="skill-tag" key={skill}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Skills;