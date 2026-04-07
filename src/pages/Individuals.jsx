import { useNavigate } from 'react-router-dom';
import { ctaBg } from '../shared';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { MobileFeaturePage } from '../components/MobileFeaturePage';
import '../components/FeaturePage.css';

import imgVector from '../assets/world-map.svg';

const heroBg = `linear-gradient(44.5deg, rgb(4,67,82) 0%, rgba(4,67,82,0) 100%), url("data:image/svg+xml,%3Csvg viewBox='0 0 1696 456' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Crect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/%3E%3Cdefs%3E%3CradialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-30 39.071 -76 -15.423 1148 228.26)'%3E%3Cstop stop-color='rgba(34,132,155,0.2)' offset='0'/%3E%3Cstop stop-color='rgba(34,132,155,0)' offset='1'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E"), linear-gradient(90deg, rgb(4,67,82) 0%, rgb(4,67,82) 100%)`;

const features = [
  { cardSide: 'right', tag: 'BANKING', title: 'Your Personal Account', text: 'Comes with a Slovenian IBAN and full multi-currency support, so you can manage, send, and receive funds in euros and major currencies - all from one place.' },
  { cardSide: 'left',  tag: 'SEPA', title: 'Payments', text: 'Supports SEPA and Instant SEPA transfers, enabling fast and secure euro transactions across Europe.' },
  { cardSide: 'right', tag: 'MOBILE', title: 'Mobile Application', text: 'Seamless mobile app experience, so you can send, receive, and spend confidently anywhere.' },
  { cardSide: 'left',  tag: 'CARD', title: 'Dinaro Mastercard® Debit Card', text: 'Add a card and pay at 30+ million POS locations worldwide and online - accepted everywhere Mastercard is supported, with secure contactless payments.' },
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

export default function Individuals() {
  const navigate = useNavigate();
  const bp = useBreakpoint();
  if (bp === 'mobile' || bp === 'tablet') {
    return (
      <MobileFeaturePage
        heroTitle="Personal Account"
        heroSubtitle="Everything you need to manage your money, in one place."
        features={features}
        ctaTitle="Open your payment account in just a few simple steps."
        navigate={navigate}
      />
    );
  }
  return (
    <div className="fp">
      <Navbar />

      {/* ── Hero ── */}
      <div className="fp__hero">
        <div className="fp__hero-bg" style={{ backgroundImage: heroBg }} />
        <div className="fp__hero-vector-wrap">
          <img alt="" className="fp__hero-vector" src={imgVector} />
        </div>
        <div className="fp__hero-text">
          <p className="fp__hero-title">Personal Account</p>
          <p className="fp__hero-subtitle">Everything you need to manage your money, in one place.</p>
        </div>
      </div>

      {/* ── Feature Rows ── */}
      <div className="fp__features">
        {features.map(({ cardSide, tag, title, text }) => (
          <FeatureRow key={tag} cardSide={cardSide} tag={tag} title={title} text={text} />
        ))}
      </div>

      {/* ── CTA Section ── */}
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
