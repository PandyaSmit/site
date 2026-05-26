import { User, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">01. About Me</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! My name is Smit Pandya, and I'm a Cloud Developer based in Ahmedabad, Gujarat.
            I have a strong passion for transforming complex challenges into elegant, simple solutions
            using the power of cloud computing and modern web technologies.
          </p>

          <div className="timeline">
            <h3 className="timeline-title"><Briefcase size={20} /> Experience</h3>
            <div className="timeline-item">
              <h4>Cloud Developer @ Trelleborg Marine Systems</h4>
              <span className="mono timeline-date">June 2025 - Present</span>
              <p>Specializing in Go, NodeJS, Postgres, and React. Extensive use of AWS services including Lambda, DynamoDB, RDS, and AWS CDK for infrastructure as code.</p>
            </div>

            <div className="timeline-item">
              <h4>Software Engineer @ IQUD TEK</h4>
              <span className="mono timeline-date">November 2020 - May 2025</span>
              <p>Experience with the main technologies like ExpressJS, NodeJS, NestJs, NextJs, Postgres, MongoDB, Angular, React and worked in web application architecture, ensuring cross-browser compatibility, responsive design, and optimizing website performance.</p>
              <p>Led a cross-functional team in multiple projects, contributing to a significant improvement in completing deadlines.</p>
            </div>

            <h3 className="timeline-title mt-4"><GraduationCap size={20} /> Education</h3>
            <div className="timeline-item">
              <h4>B.E. in Computer Science & Engineering</h4>
              <span className="mono timeline-date">LDRP Institute of Technology and Research (2018 - 2021)</span>
            </div>
            <div className="timeline-item">
              <h4>Diploma in Computer Science & Engineering</h4>
              <span className="mono timeline-date">Kalyan Polytechnic (2015 - 2018)</span>
            </div>
          </div>
        </div>

        <div className="about-image">
          <div className="image-wrapper">
            <div className="placeholder-image">
              <User size={64} className="user-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
