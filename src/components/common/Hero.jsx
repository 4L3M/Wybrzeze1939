import './Hero.css';

const Hero = ({ title, subtitle, backgroundImage }) => {
  const heroClass = backgroundImage ? 'hero hero-with-image' : 'hero';
  
  return (
    <div 
      className={heroClass}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{title}</h1>
            {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
