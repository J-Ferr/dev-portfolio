import './About.css';
import { Code2, Lightbulb, Users, BookOpen } from 'lucide-react';

function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">

                <div className="about-text">
                    <span className="about-label">GET TO KNOW ME</span>

                    <h2>Building with purpose. Creating with curiosity.</h2>

                    <p>
                        I'm a software developer with a background in retail
                        leadership and passion for turning ideas into functional 
                        user-focused applications. I enjoy learning new technologies 
                        and applying them to solve real-world problems.
                    </p>

                    <p>
                        Through hands-on projects, I've gained experience developing
                        full-stack applications using React, JavaScript, Node.js, Express,
                         and PostgreSQL.
                    </p>

                    <p>
                        I bring technical curiosity, creative thinking, and years of 
                        experience collaborating with teams and solving problems in 
                        fast-paced environments.
                    </p>
                </div>

                <div className="about-strengths">
                    <h3>What I bring</h3>

                    <div className="strength-item">
                        <Code2 size={20} />
                        <span>Full-Stack Development</span>
                    </div>
                    <div className="strength-item">
                        <Lightbulb size={20} />
                        <span>Creative Problem-Solving</span>
                    </div>
                    <div className="strength-item">
                        <Users size={20} />
                        <span>Team Collaboration</span>
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