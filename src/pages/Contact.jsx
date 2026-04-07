import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ctaBg } from '../shared';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useBreakpoint } from '../hooks/useBreakpoint';
import '../components/FeaturePage.css';
import '../components/MobileFeaturePage.css';

import imgVector from '../assets/contact-vector.svg';
import imgCircle from '../assets/circle-contact.svg';
import imgArrowExt from '../assets/arrow-ext.svg';
import imgArrowMsg from '../assets/arrow-msg.svg';

const heroBg = `linear-gradient(44.5deg, rgb(4,67,82) 0%, rgba(4,67,82,0) 100%), url("data:image/svg+xml,%3Csvg viewBox='0 0 1696 456' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Crect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/%3E%3Cdefs%3E%3CradialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-30 39.071 -76 -15.423 1148 228.26)'%3E%3Cstop stop-color='rgba(34,132,155,0.2)' offset='0'/%3E%3Cstop stop-color='rgba(34,132,155,0)' offset='1'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E"), linear-gradient(90deg, rgb(4,67,82) 0%, rgb(4,67,82) 100%)`;

const heroBgMobile = `linear-gradient(44.5deg, rgb(4,67,82) 0%, rgba(4,67,82,0) 100%), linear-gradient(90deg, rgb(4,67,82) 0%, rgb(4,67,82) 100%)`;

function PillButton({ label, arrowSrc, onClick }) {
  return (
    <button type="button" className="fp__contact-pill-btn" onClick={onClick}>
      <p className="fp__contact-pill-label">{label}</p>
      <div className="fp__contact-pill-icon-wrap">
        <img alt="" className="fp__contact-pill-icon-bg" src={imgCircle} />
        <img alt="" className="fp__contact-pill-icon-arrow" src={arrowSrc} />
      </div>
    </button>
  );
}

function InfoCard({ title, sub, buttonLabel, arrowSrc, onButtonClick }) {
  return (
    <div className="card fp__contact-info-card">
      <div className="fp__contact-info-icon" />
      <div className="fp__contact-info-content">
        <p className="fp__contact-info-title">{title}</p>
        <p className="fp__contact-info-sub">{sub}</p>
        <PillButton label={buttonLabel} arrowSrc={arrowSrc} onClick={onButtonClick} />
      </div>
    </div>
  );
}

function ContactMobile({ form, handleChange, handleSubmit, submitted, error }) {
  return (
    <div className="mobile-page">
      <Navbar />

      <div className="mobile-page__hero" style={{ backgroundImage: heroBgMobile }}>
        <p className="mobile-page__hero-title">Contact</p>
        <p className="mobile-page__hero-subtitle">We're here to help. Send us a message.</p>
      </div>

      <div className="fp__contact-mobile-info-cards">
        <div className="card fp__contact-mobile-info-card">
          <p className="fp__contact-mobile-info-title">Address</p>
          <p className="fp__contact-mobile-info-text">Bravničarjeva ulica 13, 1000 Ljubljana</p>
          <button
            type="button"
            className="fp__contact-mobile-map-btn"
            onClick={() => window.open('https://maps.google.com/?q=Bravničarjeva+ulica+13,+1000+Ljubljana', '_blank', 'noopener')}
          >
            View on Maps
          </button>
        </div>
      </div>

      <form id="contact-form" onSubmit={handleSubmit} className="fp__contact-mobile-form-section">
        <p className="fp__contact-mobile-form-heading">Send us a message</p>
        <input type="text" placeholder="Name & Surname" value={form.name} onChange={handleChange('name')} required aria-label="Name and Surname" className="fp__contact-field--mobile" />
        <input type="email" placeholder="Your Email Address" value={form.email} onChange={handleChange('email')} required aria-label="Email Address" className="fp__contact-field--mobile" />
        <input type="text" placeholder="Subject" value={form.subject} onChange={handleChange('subject')} aria-label="Subject" className="fp__contact-field--mobile" />
        <input type="text" placeholder="Choose Solution" value={form.solution} onChange={handleChange('solution')} aria-label="Choose Solution" className="fp__contact-field--mobile" />
        <input type="text" placeholder="Company Name" value={form.company} onChange={handleChange('company')} aria-label="Company Name" className="fp__contact-field--mobile" />
        <input type="url" placeholder="Company Website" value={form.website} onChange={handleChange('website')} aria-label="Company Website" className="fp__contact-field--mobile" />
        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange('message')}
          required
          aria-label="Your Message"
          className="fp__contact-textarea--mobile"
        />
        <div className="fp__contact-checkboxes">
          {[
            { field: 'consent1', text: 'I agree to the Terms & Conditions and Privacy Policy.' },
            { field: 'consent2', text: 'I agree to receive marketing communications from Dinaro.' },
          ].map(({ field, text }) => (
            <label key={field} className="fp__contact-checkbox-label">
              <input type="checkbox" checked={form[field]} onChange={handleChange(field)} className="fp__contact-checkbox-input" />
              <p className="fp__contact-checkbox-text--mobile">{text}</p>
            </label>
          ))}
        </div>
        {error && <p className="fp__contact-error">{error}</p>}
        <div className="fp__contact-submit-wrap">
          {submitted ? (
            <p className="fp__contact-success">Thank you! Your email client should open. If not, email us at hello@dinaro.eu</p>
          ) : (
            <button type="submit" className="fp__contact-mobile-submit">Send Message</button>
          )}
        </div>
      </form>

      <div className="mobile-page__cta" style={{ backgroundImage: ctaBg }}>
        <p className="mobile-page__cta-title">Open your payment account in just a few simple steps.</p>
        <button
          type="button"
          className="mobile-page__cta-btn"
          onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
        >
          Get in Touch
        </button>
      </div>

      <div className="mobile-page__footer">
        <p className="mobile-page__footer-copy">© 2026 Dinaro. All Rights Reserved.</p>
        <div className="mobile-page__footer-links">
          {[
            { label: 'Terms & Conditions', href: '/terms' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Complaints', href: '/complaints' },
          ].map(({ label, href }) => (
            <a key={label} href={href} className="mobile-page__footer-link">{label}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '', email: '', subject: '', solution: '',
    company: '', website: '', message: '',
    consent1: false, consent2: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email, and message.');
      return;
    }
    if (!form.consent1) {
      setError('Please accept the terms to continue.');
      return;
    }
    const subject = encodeURIComponent(form.subject || 'Contact from Dinaro website');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nWebsite: ${form.website}\nSolution: ${form.solution}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@dinaro.eu?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const bp = useBreakpoint();
  if (bp === 'mobile' || bp === 'tablet') {
    return <ContactMobile form={form} handleChange={handleChange} handleSubmit={handleSubmit} submitted={submitted} error={error} />;
  }

  return (
    <div className="fp">
      <Navbar />

      <div className="fp__hero">
        <div className="fp__hero-bg" style={{ backgroundImage: heroBg }} />
        <div className="fp__hero-vector-wrap">
          <img alt="" className="fp__hero-vector" src={imgVector} />
        </div>
        <div className="fp__hero-text">
          <p className="fp__hero-title">Contact</p>
        </div>
      </div>

      <div className="fp__contact-info-row">
        <InfoCard
          title="Address"
          sub="Bravničarjeva ulica 13, 1000 Ljubljana"
          buttonLabel="View on Maps"
          arrowSrc={imgArrowExt}
          onButtonClick={() => window.open('https://maps.google.com/?q=Bravničarjeva+ulica+13,+1000+Ljubljana', '_blank', 'noopener')}
        />
        <InfoCard
          title="Email"
          sub="What solutions are you looking for?"
          buttonLabel="Send a Message"
          arrowSrc={imgArrowMsg}
          onButtonClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
        />
      </div>

      <p className="fp__contact-heading">Send us a message</p>

      <form id="contact-form" className="card fp__contact-form-wrap" onSubmit={handleSubmit}>
        <div className="fp__contact-form-row">
          <input type="text" placeholder="Name & Surname" value={form.name} onChange={handleChange('name')} required aria-label="Name and Surname" className="fp__contact-field" />
          <input type="email" placeholder="Your Email Address" value={form.email} onChange={handleChange('email')} required aria-label="Email Address" className="fp__contact-field" />
        </div>
        <div className="fp__contact-form-row">
          <input type="text" placeholder="Subject" value={form.subject} onChange={handleChange('subject')} aria-label="Subject" className="fp__contact-field" />
          <input type="text" placeholder="Choose Solution" value={form.solution} onChange={handleChange('solution')} aria-label="Choose Solution" className="fp__contact-field" />
        </div>
        <div className="fp__contact-form-row">
          <input type="text" placeholder="Company Name" value={form.company} onChange={handleChange('company')} aria-label="Company Name" className="fp__contact-field" />
          <input type="url" placeholder="Company Website" value={form.website} onChange={handleChange('website')} aria-label="Company Website" className="fp__contact-field" />
        </div>
        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange('message')}
          required
          aria-label="Your Message"
          className="fp__contact-textarea"
        />
        <div className="fp__contact-checkboxes">
          {[
            { field: 'consent1', text: 'I agree to the Terms & Conditions and Privacy Policy. Dinaro may use my information to respond to my inquiry.' },
            { field: 'consent2', text: 'I agree to receive marketing communications from Dinaro about products, services, and industry insights.' },
          ].map(({ field, text }) => (
            <label key={field} className="fp__contact-checkbox-label">
              <input type="checkbox" checked={form[field]} onChange={handleChange(field)} className="fp__contact-checkbox-input" />
              <p className="fp__contact-checkbox-text">{text}</p>
            </label>
          ))}
        </div>
        {error && <p className="fp__contact-error">{error}</p>}
        <div className="fp__contact-submit-wrap">
          {submitted ? (
            <p className="fp__contact-success">
              Thank you! Your email client should open with a pre-filled message. If not, email us directly at hello@dinaro.eu
            </p>
          ) : (
            <button type="submit" className="fp__contact-submit-btn">
              <p className="fp__contact-submit-label">Send Message</p>
            </button>
          )}
        </div>
      </form>

      <div className="fp__cta" style={{ backgroundImage: ctaBg }}>
        <p className="fp__cta-title">Open your payment account in just a few simple steps.</p>
        <button type="button" className="fp__cta-btn" onClick={() => navigate('/contact')}>
          <p className="fp__cta-btn-label">Contact Us</p>
        </button>
      </div>

      <Footer />
    </div>
  );
}
