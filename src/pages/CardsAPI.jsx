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
  {
    cardSide: 'right',
    tag: 'WHITE-LABEL',
    title: 'White-Label Solution',
    text: 'Offering a flexible White Label solution for turnkey launch of branded cards, tailormade for your business and accepted everywhere.\n\nWe are following all industry-standard regulations and best practices to ensure that your funds are protected.',
  },
  {
    cardSide: 'left',
    tag: 'MASTERCARD',
    title: 'BIN Sponsorship',
    text: 'Avoid the complexity of a card issuing project. As a Mastercard Principal Member we can sponsor you.\n\nWe connect all crucial and relevant partners in the payment ecosystem, supporting you with 360 approach.',
  },
  {
    cardSide: 'right',
    tag: 'CUSTOMIZABLE',
    title: 'Custom Branded Debit Cards',
    text: 'Designed as API-first approached tech provider and empowered with industry expertise enriched with business experiences, Dinaro acts as a global full-service provider of innovative payment solutions.',
  },
  {
    cardSide: 'left',
    tag: 'API DRIVEN',
    title: 'Authorization API',
    text: "Your cards. Your rules. Your ledger. Dinaro's Authorization API gives you full debit card infrastructure while you keep complete control. Authorize transactions in real time through your own stack, maintain your own ledger as the source of truth, and go live in weeks — not quarters.",
  },
];

const whyCards = [
  { title: 'Global Acceptance',    text: 'Mastercard-powered cards accepted worldwide at millions of merchants and ATMs.' },
  { title: 'Fraud Prevention',     text: 'Industry-leading security measures to protect your funds, card details, and customer data at all times.' },
  { title: 'Fast Settlement',      text: 'Quick transaction processing and settlement for seamless cash flow management.' },
  { title: 'API Integration',      text: 'Modern REST APIs for seamless integration with your existing systems.' },
  { title: 'Mobile Management',    text: 'Cardwiser mobile app for card management and fund monitoring.' },
  { title: 'Regulatory Compliance',text: 'Full compliance with PCI DSS and all major payment industry regulations.' },
];

function FeatureRow({ cardSide, tag, title, text }) {
  return (
    <div className={`fp__feature-row${cardSide === 'left' ? ' fp__feature-row--reversed' : ''}`}>
      <div className="fp__feature-text-side">
        <div className="fp__feature-text-inner">
          <p className="fp__feature-tag">{tag}</p>
          <p className="fp__feature-title">{title}</p>
          {text && text.split('\n\n').map((para, i) => (
            <p key={i} className="fp__feature-body">{para}</p>
          ))}
        </div>
      </div>
      <div className="card fp__feature-card-side">
        <div className="fp__feature-card-thumb" />
      </div>
    </div>
  );
}

export default function CardsAPI() {
  const navigate = useNavigate();
  const bp = useBreakpoint();
  if (bp === 'mobile' || bp === 'tablet') {
    return (
      <MobileFeaturePage
        heroTitle="Cards API"
        heroSubtitle="Issue branded, customizable debit cards globally with our API-first card issuing infrastructure."
        features={features}
        whyTitle="Why Choose Dinaro Cards"
        whyCards={whyCards}
        ctaTitle="Launch Your Financial Product"
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
        <div className="fp__hero-vector-wrap">
          <img alt="" className="fp__hero-vector" src={imgVector} />
        </div>
        <div className="fp__hero-text">
          <p className="fp__hero-title">Cards API</p>
          <p className="fp__hero-subtitle">Issue branded, customizable debit cards globally with our API-first card issuing infrastructure.</p>
        </div>
      </div>

      <div className="fp__features">
        {features.map(({ cardSide, tag, title, text }) => (
          <FeatureRow key={tag} cardSide={cardSide} tag={tag} title={title} text={text} />
        ))}
      </div>

      <p className="fp__why-section-heading">Why Choose Dinaro Card Issuing</p>

      <div className="fp__why-grid">
        <div className="fp__why-grid-row">
          {whyCards.slice(0, 3).map(({ title, text }) => (
            <div key={title} className="card fp__why-card">
              <div className="fp__why-card-icon" />
              <div className="fp__why-card-content">
                <p className="fp__why-card-title">{title}</p>
                <p className="fp__why-card-text">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="fp__why-grid-row">
          {whyCards.slice(3).map(({ title, text }) => (
            <div key={title} className="card fp__why-card">
              <div className="fp__why-card-icon" />
              <div className="fp__why-card-content">
                <p className="fp__why-card-title">{title}</p>
                <p className="fp__why-card-text">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fp__cta" style={{ backgroundImage: ctaBg }}>
        <p className="fp__cta-title">Launch your card issuing programme today.</p>
        <button type="button" className="fp__cta-btn" onClick={() => navigate('/contact')}>
          <p className="fp__cta-btn-label">Contact Us</p>
        </button>
      </div>

      <Footer />
    </div>
  );
}
