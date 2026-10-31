import './Contact.css';
import { Mail, CodeXml, BriefcaseBusiness } from 'lucide-react';

function Contact() {
    return(
        <section className="contact-section" id="contact">
            <div className="contact-container">

                <span className="contact-label">LET'S CONNECT</span>

                <h2>Let's build something together.</h2>

                <p>
                    I'm open to junior software engineer opportunities and would 
                    love to connect with teams building thoughtful digital experiences.
                </p>

                <a className="contact-button" href="mailto:arellano.ferrara1@gmail.com">
                    <Mail size={20} />
                    <span>Get in touch</span>
                </a>

                <div className="contact-socials">
                    <a href="https://github.com/J-Ferr" target="_blank" rel="noopener noreferrer">
                        <CodeXml size={20} />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/jaaferrara" target="_blank" rel="noopener noreferrer">
                        <BriefcaseBusiness size={20} />
                        <span>LinkedIn</span>
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Contact;