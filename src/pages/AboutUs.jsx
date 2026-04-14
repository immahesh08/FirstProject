import '../pages/AboutUs.css';

const AboutUs = () => {
  return (
    <main className="about">
      <section className="intro fade-in">
        <div className="container">
          <h1 className="page-title">About SolarPower</h1>
          <p className="intro-text">
            Founded in 2015, SolarPower is a leading provider of solar energy solutions. 
            We specialize in residential and commercial solar installations, delivering 
            high-quality panels, batteries, and monitoring systems across the country.
          </p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card fade-in">
              <div className="mv-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>To accelerate the world's transition to sustainable energy by making solar power accessible and affordable for everyone.</p>
            </div>
            <div className="mv-card fade-in">
              <div className="mv-icon">🔮</div>
              <h2>Our Vision</h2>
              <p>A world powered by clean, renewable energy where every home and business contributes to a greener planet.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="why-grid">
            <div className="why-card fade-in">
              <div className="why-icon">⭐</div>
              <h3>Expert Team</h3>
              <p>Certified installers with 10+ years experience and NABCEP certification.</p>
            </div>
            <div className="why-card fade-in">
              <div className="why-icon">🛠️</div>
              <h3>Premium Quality</h3>
              <p>Top-tier panels from industry leaders with 25-year performance warranties.</p>
            </div>
            <div className="why-card fade-in">
              <div className="why-icon">💰</div>
              <h3>Best Value</h3>
              <p>Competitive pricing with federal tax credits and financing options.</p>
            </div>
            <div className="why-card fade-in">
              <div className="why-icon">⚡</div>
              <h3>Full Service</h3>
              <p>Design, permitting, installation, monitoring, and maintenance all included.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            <div className="team-card fade-in">
              <div className="team-avatar">👨‍🔧</div>
              <h3>John Smith</h3>
              <p>Lead Installer</p>
              <div className="team-desc">15 years experience, solar system design expert.</div>
            </div>
            <div className="team-card fade-in">
              <div className="team-avatar">👩‍🔬</div>
              <h3>Dr. Lisa Green</h3>
              <p>Energy Engineer</p>
              <div className="team-desc">PhD in renewable energy, panel efficiency specialist.</div>
            </div>
            <div className="team-card fade-in">
              <div className="team-avatar">💼</div>
              <h3>Mike Wilson</h3>
              <p>Project Manager</p>
              <div className="team-desc">200+ successful installations, customer satisfaction 99%.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
