import { Terminal, MapPin } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting mono">namaste, world_</p>
        <h1 className="hero-title">
          I'm <span className="highlight">Smit Pandya</span>
        </h1>
        <h2 className="hero-subtitle">Cloud Developer</h2>
        
        <p className="hero-description">
          Cloud Developer at Trelleborg India Pvt Ltd. Passionate about crafting intuitive 
          user experiences, building robust architectures, and transforming complex 
          challenges into simple, scalable solutions.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <Terminal size={18} /> View Projects
          </a>
          <a href="#about" className="btn btn-outline">
            <MapPin size={18} /> Based in Ahmedabad, India
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="tech-mandala">
          <div className="circle outer"></div>
          <div className="circle middle"></div>
          <div className="circle inner">
            <Image 
              src="/smit_image.jpg" 
              alt="Smit Pandya" 
              width={160} 
              height={160} 
              className="mandala-image" 
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
