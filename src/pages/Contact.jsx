import { useState } from 'react';
import '../pages/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Simulate API call
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <main className="contact">
      <section className="contact-hero fade-in">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="hero-subtitle">Ready to start your solar journey? Contact our experts today!</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              {isSubmitted ? (
                <div className="success-message">
                  Thank you! Your message has been sent. We'll get back to you within 24 hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'error' : ''}
                    />
                    {errors.message && <span className="error-text">{errors.message}</span>}
                  </div>
                  <button type="submit" className="cta-button submit-btn">
                    Send Message
                  </button>
                </form>
              )}
            </div>
            <div className="contact-info">
              <h2>Visit Us</h2>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Our Office</h4>
                  <p>123 Solar Street<br/>Energy City, CA 90210</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>info@solarpower.com</p>
                </div>
              </div>
              <div className="info-item full">
                <div className="info-icon map">🗺️</div>
                <h4>Location</h4>
                <div className="map-placeholder">
                  <iframe 
                    title="SolarPower Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639043529776!2d-122.4194156846813!3d37.77492977975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5b5b5b%3A0x1a5b5b5b5b5b5b5b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1630000000000"
                    width="100%"
                    height="250"
                    style={{border:0, borderRadius: '12px'}}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
