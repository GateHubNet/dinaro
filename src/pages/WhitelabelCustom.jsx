import { useNavigate } from 'react-router-dom';
import { ctaBg } from '../shared';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { MobileFeaturePage } from '../components/MobileFeaturePage';
import '../components/FeaturePage.css';

import imgVector from '../assets/api-vector.svg';

const heroBg = `linear-gradient(44.5deg, rgb(4,67,82) 0%, rgba(4,67,82,0) 100%), url("data:image/svg+xml,%3Csvg viewBox='0 0 1696 456' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Crect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/%3E%3Cdefs%3E%3CradialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-30 39.071 -76 -15.423 1148 228.26)'%3E%3Cstop stop-color='rgba(34,132,155,0.2)' offset='0'/%3E%3Cstop stop-color='rgba(34,132,155,0)' offset='1'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E"), linear-gradient(90deg, rgb(4,67,82) 0%, rgb(4,67,82) 100%)`;

const features = [
  { cardSide: 'right', tag: 'CUSTOM',      title: 'Built Around Your Needs', text: "No two businesses are the same. We work closely with you to understand your product, your users, and your goals - then build a solution that fits exactly.\n\nWhether you need a tailored flow, a unique integration, or something entirely new, we are here to make it happen." },
  { cardSide: 'left',  tag: 'FLEXIBLE',    title: 'Fully Adjustable',        text: "Every part of our platform can be configured, extended, or adapted. From payment flows and compliance rules to branding and user experience - nothing is locked in.\n\nYou decide how the product looks, feels, and works. We provide the infrastructure to support it." },
  { cardSide: 'right', tag: 'PARTNERSHIP', title: 'We Are Here to Help',     text: "We don't just hand over a product and walk away. Our team stays involved - from the first conversation through launch and beyond.\n\nDedicated support, hands-on onboarding, and a team that genuinely wants to see your business succeed." },
];

function FeatureRow({ cardSide, tag, title, text }) {
  return (
    <div className={`fp__feature-row${cardSide === 'left' ? ' fp__feature-row--reversed' : ''}`}>
      <div className="fp__feature-text-side">
        <div className="fp__feature-text-inner">
          <p className="fp__feature-tag">{tag}</p>
          <p className="fp__feature-title">{title}</p>
          {text && <p className="fp__feature-body">{text}</p>}
        </div>
      </div>
      <div className="card fp__feature-card-side">
        <div className="fp__feature-card-thumb" />
      </div>
    </div>
  );
}

export default function WhitelabelCustom() {
  const navigate = useNavigate();
  const bp = useBreakpoint();
  if (bp === 'mobile' || bp === 'tablet') {
    return (
      <MobileFeaturePage
        heroTitle="Custom Solutions"
        heroSubtitle="We are fully adjustable and here to help - whatever your business needs, we build it together."
        features={features}
        ctaTitle="Let's Build Something Together"
        ctaButton="Contact Us"
        navigate={navigate}
      />
    );
  }
  return (
    <div className="fp">
      <Navbar />
      <div className="fp__hero">
        <div className="fp__hero-bg" style={{ backgroundImage: heroBg }} />
        <div className="fp__hero-vector-wrap"><img alt="" className="fp__hero-vector" src={imgVector} /></div>
        <div className="fp__hero-text">
          <p className="fp__hero-title">Custom Solutions</p>
          <p className="fp__hero-subtitle">We are fully adjustable and here to help - whatever your business needs, we build it together.</p>
        </div>
      </div>
      <div className="fp__features">
        {features.map(({ cardSide, tag, title, text }) => (
          <FeatureRow key={tag} cardSide={cardSide} tag={tag} title={title} text={text} />
        ))}
      </div>
      <div className="fp__cta" style={{ backgroundImage: ctaBg }}>
        <p className="fp__cta-title">Let's Build Something Together</p>
        <button type="button" className="fp__cta-btn" onClick={() => navigate('/contact')}>
          <p className="fp__cta-btn-label">Contact Us</p>
        </button>
      </div>
      <Footer />
    </div>
  );
}
