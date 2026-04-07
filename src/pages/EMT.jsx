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
  { cardSide: 'right', tag: 'XRPL',        title: 'Real-Time Transactions',  text: 'Instant on-chain transactions on XRP Ledger and Xahau with minimal fees.' },
  { cardSide: 'left',  tag: 'RESERVE',     title: 'Full Reserve Backing',    text: 'Each EURGH token is backed 1:1 by euros held in segregated accounts at European financial institutions. Your funds remain fully protected and safeguarded.' },
  { cardSide: 'right', tag: 'REGULATED',   title: 'EU MiCA Regulated',       text: "Fully compliant with Europe's Markets in Crypto-Assets regulation framework." },
  { cardSide: 'left',  tag: 'REDEMPTION',  title: 'Instant Redemption',      text: 'Withdraw your EURO back to your bank account anytime through GateHub web and mobile applications.' },
  { cardSide: 'right', tag: 'MULTI-CHAIN', title: 'Multi-Chain Support',     text: 'Available on both XRP Ledger and Xahau for maximum flexibility and interoperability.' },
  { cardSide: 'left',  tag: 'API',         title: 'Integrable',              text: 'Our Electronic Money Tokens (EMTs) are designed to be fully integrable into your existing systems via robust APIs, enabling seamless adoption across web and mobile applications. Built specifically for real-world use cases.' },
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

export default function EMT() {
  const navigate = useNavigate();
  const bp = useBreakpoint();
  if (bp === 'mobile' || bp === 'tablet') {
    return (
      <MobileFeaturePage
        heroTitle="E-Money Tokens"
        heroSubtitle="Euro-backed digital tokens on XRP Ledger and Xahau, fully EU MiCA regulated."
        features={features}
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
        <div className="fp__hero-vector-wrap"><img alt="" className="fp__hero-vector" src={imgVector} /></div>
        <div className="fp__hero-text">
          <p className="fp__hero-title">E-Money Tokens</p>
          <p className="fp__hero-subtitle">Euro-backed digital tokens on XRP Ledger and Xahau, fully EU MiCA regulated.</p>
        </div>
      </div>
      <div className="fp__features">
        {features.map(({ cardSide, tag, title, text }) => (
          <FeatureRow key={tag} cardSide={cardSide} tag={tag} title={title} text={text} />
        ))}
      </div>
      <div className="fp__cta" style={{ backgroundImage: ctaBg }}>
        <p className="fp__cta-title">Launch Your Financial Product</p>
        <button type="button" className="fp__cta-btn" onClick={() => navigate('/contact')}>
          <p className="fp__cta-btn-label">Contact Us</p>
        </button>
      </div>
      <Footer />
    </div>
  );
}
