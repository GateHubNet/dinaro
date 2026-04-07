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
  { cardSide: 'right', tag: 'WHITE-LABEL', title: 'Your Brand, Our Ramp',      text: "One way to make a quick entry into your own business is white labeling - selling products or services developed by Dinaro. Whitelabel Ramp and customize it with your own designs or branding that fits your needs." },
  { cardSide: 'left',  tag: 'SEPA',        title: 'SEPA Payment Module',       text: "Accept and send payments across Europe with full SEPA and Instant SEPA support. Our white-label Ramp acts as a native payment module - letting your users fund accounts and withdraw funds via bank transfer with no friction.\n\nAll payment flows are pre-built and compliant, ready to embed into your product." },
  { cardSide: 'right', tag: 'CRYPTO',      title: 'On and Off Ramp for Crypto', text: "Bridge the gap between traditional finance and digital assets. Our Ramp enables your users to convert fiat to crypto and crypto to fiat - directly within your product.\n\nBuilt on regulated infrastructure, so every transaction is compliant, fast, and fully branded to your business." },
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

export default function WhitelabelRamp() {
  const navigate = useNavigate();
  const bp = useBreakpoint();
  if (bp === 'mobile' || bp === 'tablet') {
    return (
      <MobileFeaturePage
        heroTitle="Whitelabel Ramp"
        heroSubtitle="Embed SEPA payments and crypto on/off ramp into your product under your own brand."
        features={features}
        ctaTitle="Launch Your White-Label Ramp"
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
          <p className="fp__hero-title">Whitelabel Ramp</p>
          <p className="fp__hero-subtitle">Embed SEPA payments and crypto on/off ramp into your product under your own brand.</p>
        </div>
      </div>
      <div className="fp__features">
        {features.map(({ cardSide, tag, title, text }) => (
          <FeatureRow key={tag} cardSide={cardSide} tag={tag} title={title} text={text} />
        ))}
      </div>
      <div className="fp__cta" style={{ backgroundImage: ctaBg }}>
        <p className="fp__cta-title">Launch Your White-Label Ramp</p>
        <button type="button" className="fp__cta-btn" onClick={() => navigate('/contact')}>
          <p className="fp__cta-btn-label">Contact Us</p>
        </button>
      </div>
      <Footer />
    </div>
  );
}
