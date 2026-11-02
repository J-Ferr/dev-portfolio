import './About.css';
import { Code2, Lightbulb, Users, BookOpen, Palette } from 'lucide-react';

function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">

                <div className="about-text">
                    <span className="about-label">GET TO KNOW ME</span>

                    <h2>Building with purpose. Creating with curiosity.</h2>

                    <p>
                        I'm a software developer who enjoys both the problem-solving and creative sides of coding.
                        There's something rewarding about working through a challenge, improving
                        how something functions, and seeing it all come together visually.
                    </p>

                    <p>
                        With a background in retail leadership, I've developed strong skills in
                        collaboration, adaptability, and find solutions in fast-paced environments.
                        I've carried those experiences into software development, where I continue to
                        learn and build full-stack applications using React, JavaScript,Node.js, Express,
                        and PostgreSQL.
                    </p>

                    <p>
                        What I enjoy most is the process of creating and refining - from figuring
                        out the logic behind an application to experimenting with layouts, colors, 
                        and small details that make the final experience feel complete.
                    </p>
                </div>

                <div className="about-strengths">
                    <h3>What I bring</h3>

                    <div className="strength-item">
                        <Code2 size={20} />
                        <span>Full-Stack Development</span>
                    </div>
                    <div className="strength-item">
                        <Palette size={20} />
                        <span>Creative & Visual Thinking</span>
                    </div>
                    <div className="strength-item">
                        <Users size={20} />
                        <span>Team Collaboration & Leadership</span>
                    </div>
                    <div className="strength-item">
                        <BookOpen size={20} />
                        <span>Continuous Learning</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;