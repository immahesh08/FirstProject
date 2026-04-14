import heroImg from '../assets/hero.png';
import '../pages/Home.css';

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title fade-in">Power Your Future with Solar Energy</h1>
            <p className="hero-subtitle fade-in">Sustainable. Reliable. Cost-Effective. Transform your energy usage today.</p>
            <button className="cta-button fade-in">Get Started</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Solar?</h2>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon">🌿</div>
              <h3>Eco-Friendly</h3>
              <p>Reduce your carbon footprint with clean, renewable energy from the sun.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">💰</div>
              <h3>Cost Saving</h3>
              <p>Save thousands on electricity bills over time with free power from solar panels.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">⚡</div>
              <h3>Reliable Energy</h3>
              <p>24/7 energy independence with battery storage and smart monitoring systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card fade-in">
              <p>"SolarPower transformed our home! Our bills dropped 70% and it's great for the planet."</p>
              <div className="testimonial-author">- Sarah Johnson</div>
            </div>
            <div className="testimonial-card fade-in">
              <p>"Professional installation and excellent support. Highly recommend for businesses too!"</p>
              <div className="testimonial-author">- Mike Chen</div>
            </div>
            <div className="testimonial-card fade-in">
              <p>"Reliable energy even during outages. Best decision we ever made!"</p>
              <div className="testimonial-author">- Emily Davis</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Go Solar?</h2>
          <p>Get your free consultation today!</p>
          <button className="cta-button large">Contact Us Now</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
