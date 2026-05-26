import { Folder, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Event Creation System",
      description: "A comprehensive platform designed for organizers to create events and efficiently sell tickets to attendees.",
      tech: ["NestJs", "Postgres", "AWS S3", "GitLab CI/CD", "Docker", "Digital Ocean"],
      github: "https://github.com/PandyaSmit",
      external: "#"
    },
    {
      title: "Tender & Quotation System",
      description: "A robust platform enabling buyers to create tenders and allowing sellers to seamlessly quote and bid on them.",
      tech: ["Node.js", "Express.js", "MongoDB", "Postgres", "Redis", "IBM Cloud", "Azure"],
      github: "https://github.com/PandyaSmit",
      external: "#"
    },
    {
      title: "Marketplace Syncing",
      description: "A suite of microservices built for real-time synchronization with major marketplaces including Amazon, Walmart, ShipStation, and SPS Commerce.",
      tech: ["JavaScript", "MySQL", "AWS Lambda", "AWS Event Bridge", "AWS RDS"],
      github: "https://github.com/PandyaSmit",
      external: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">03. Some Things I've Built</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card card">
            <div className="project-header">
              <div className="folder-icon">
                <Folder size={40} />
              </div>
              {/* <div className="project-links">
                <a href={project.github} aria-label="GitHub Link"><FaGithub size={20} /></a>
                <a href={project.external} aria-label="External Link"><ExternalLink size={20} /></a>
              </div> */}
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            
            <div className="project-description">
              <p>{project.description}</p>
            </div>
            
            <ul className="project-tech-list mono">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
