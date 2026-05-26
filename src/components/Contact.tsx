import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">04. What's Next?</h2>

      <div className="contact-content card">
        <h3 className="contact-heading">Get In Touch</h3>
        <p className="contact-text">
          I'm currently focused on building robust cloud solutions and exploring new technologies.
          Whether you have a question, a project proposal, or just want to say hi, my inbox is always open!
        </p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name" className="mono">user@name:~#</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="mono">user@email:~#</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="mono">user@message:~#</label>
            <textarea id="message" rows={5} placeholder="Enter your message" required></textarea>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="btn btn-primary submit-btn mono">
              $ ./send_message.sh
            </button>
            <a href="mailto:smitpandya1099@gmail.com" className="btn btn-outline email-btn">
              <FaEnvelope /> Or Email Me
            </a>
          </div>
        </form>

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
        <p>Built with React & Vite.</p>
        <p>Designed by Smit Pandya.</p>
      </footer>
    </section>
  );
};

export default Contact;
