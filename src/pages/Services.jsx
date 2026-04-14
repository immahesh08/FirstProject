import '../pages/Services.css';

const Services = () => {
  return (
    <main className="services">
      <section className="hero-services fade-in">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="hero-subtitle">Complete solar solutions from consultation to maintenance</p>
        </div>
      </section>

      <section className="service-list">
        <div className="container">
          <div className="services-grid">
            <div className="service-card fade-in">
              <div className="service-icon">🔧</div>
              <h3>Solar Panel Installation</h3>
              <p>Professional roof-mount and ground-mount solar installations tailored to your property.</p>
              <ul>
                <li>Site assessment & design</li>
                <li>Permitting & approvals</li>
                <li>25-year warranted systems</li>
              </ul>
            </div>
            <div className="service-card fade-in">
              <div className="service-icon">🔋</div>
              <h3>Maintenance Services</h3>
              <p>Keep your system running optimally with our comprehensive maintenance packages.</p>
              <ul>
                <li>Annual inspections</li>
                <li>Performance monitoring</li>
                <li>Panel cleaning & repairs</li>
              </ul>
            </div>
            <div className="service-card fade-in">
              <div className="service-icon">📊</div>
              <h3>Consultation</h3>
              <p>Free energy audit and custom system design to maximize your savings.</p>
              <ul>
                <li>Energy usage analysis</li>
                <li>ROI calculations</li>
                <li>Financing guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2 className="section-title">Pricing Plans</h2>
          <div className="pricing-grid">
            <div className="price-card fade-in">
              <div className="price-header">
                <h3>Basic</h3>
                <div className="price">5kW System</div>
                <div className="price-amount">$12,500</div>
              </div>
              <ul className="price-features">
                <li>10 panels</li>
                <li>Basic inverter</li>
                <li>10-year warranty</li>
              </ul>
              <button className="cta-button">Choose Basic</button>
            </div>
            <div className="price-card popular fade-in">
              <div className="popular-badge">Most Popular</div>
              <div className="price-header">
                <h3>Standard</h3>
                <div className="price">10kW System</div>
                <div className="price-amount">$22,000</div>
              </div>
              <ul className="price-features">
                <li>20 panels</li>
                <li>Battery storage</li>
                <li>25-year warranty</li>
              </ul>
              <button className="cta-button">Choose Standard</button>
            </div>
            <div className="price-card fade-in">
              <div className="price-header">
                <h3>Premium</h3>
                <div className="price">15kW System</div>
                <div className="price-amount">$32,500</div>
              </div>
              <ul className="price-features">
                <li>30 panels</li>
                <li>Smart monitoring</li>
                <li>Lifetime support</li>
              </ul>
              <button className="cta-button">Choose Premium</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
