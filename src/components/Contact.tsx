import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">04. Contact Me!</h2>

      <div className="contact-content card">
        <h3 className="contact-heading">Get In Touch</h3>
        <p className="contact-text">
          I'm currently focused on building robust cloud solutions and exploring new technologies.
          Whether you have a question, a project proposal, or just want to say hi, my inbox is always open!
        </p>

        <div className="contact-actions" style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
          <a href="mailto:smitpandya1099@gmail.com" className="btn btn-primary email-btn">
            <FaEnvelope /> Email Me
          </a>
        </div>

        <div className="social-links mt-4">
          <a href="https://github.com/PandyaSmit" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/pandya-smit" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/cyberpandz" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      <footer className="footer mono">
        <p>Built with Next.js & React.</p>
        <p>Designed by Smit Pandya.</p>
      </footer>
    </section>
  );
};

export default Contact;
