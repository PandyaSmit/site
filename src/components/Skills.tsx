import { Code2, Database, Layout, Server, Settings, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Web",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express", "TypeScript", "Go", "Elixir"]
    },
    {
      title: "Frontend Development",
      icon: <Layout size={24} />,
      skills: ["React", "Next.js", "Angular", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Database Systems",
      icon: <Database size={24} />,
      skills: ["PostgreSQL", "MongoDB", "SQL Server", "Redis"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      skills: ["AWS", "Docker", "GitLab CI/CD", "Azure", "IBM Cloud", "Digital Ocean"]
    }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">02. Technical Arsenal</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card card">
            <div className="skill-header">
              <span className="skill-icon">{category.icon}</span>
              <h3 className="skill-title">{category.title}</h3>
            </div>
            <ul className="skill-list mono">
              {category.skills.map((skill, i) => (
                <li key={i}>
                  <span className="skill-bullet">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
