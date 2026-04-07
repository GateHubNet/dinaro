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
  { cardSide: 'right', tag: 'LEDGER', title: 'Ledger Infrastructure', text: 'We offer an all-in-one ledger solution built for your business. Our platform provides the full banking ledger infrastructure in one streamlined solution.' },
  { cardSide: 'left',  tag: 'SEPA',   title: 'Payment Rails',          text: 'Native SEPA Integration with out-of-the-box support for SEPA and SEPA Instant payment rails. Always compliant and designed to deliver a state-of-the-art user experience.' },
];

const whyCards = [
  { title: 'Segregated Accounts',   text: 'Client funds protected in segregated accounts with safeguarding partner banks.' },
  { title: 'Full Compliance',        text: 'E-money license for EEA and Money Service Business Registration in USA.' },
  { title: 'API-First Technology',   text: 'Modern API infrastructure designed for seamless integration and scalability.' },
  { title: 'AML & Fraud Prevention', text: 'Comprehensive anti-money laundering and fraud prevention measures built-in.' },
  { title: '360° Support',           text: 'Complete ecosystem support connecting crucial partners in the payment industry.' },
  { title: 'SEPA Integration',       text: 'Direct access to SEPA payment rails for efficient European transactions.' },
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

export default function BankingAPI() {
  const navigate = useNavigate();
  const bp = useBreakpoint();
  if (bp === 'mobile' || bp === 'tablet') {
    return (
      <MobileFeaturePage
        heroTitle="Banking API"
        heroSubtitle="Deliver branded multi-currency accounts with Slovenian IBANs via seamless API integration."
        features={features}
        whyTitle="Why Choose Dinaro Banking"
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
        <div className="fp__hero-vector-wrap"><img alt="" className="fp__hero-vector" src={imgVector} /></div>
        <div className="fp__hero-text">
          <p className="fp__hero-title">Banking API</p>
          <p className="fp__hero-subtitle">
            Deliver branded multi-currency accounts with Slovenian IBANs via seamless API integration for account issuance, balance queries, and transaction history.
          </p>
        </div>
      </div>

      <p className="fp__intro">
        Beyond cutting-edge tech infrastructure, we handle licensing, AML, fraud prevention, compliance, and all regulatory requirements - leveraging our deep industry expertise and market insights.
      </p>

      <div className="fp__features">
        {features.map(({ cardSide, tag, title, text }) => (
          <FeatureRow key={tag} cardSide={cardSide} tag={tag} title={title} text={text} />
        ))}
      </div>

      <p className="fp__why-section-heading">Why Choose Dinaro Banking</p>

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
        <p className="fp__cta-title">Launch Your Financial Product</p>
        <button type="button" className="fp__cta-btn" onClick={() => navigate('/contact')}>
          <p className="fp__cta-btn-label">Contact Us</p>
        </button>
      </div>

      <Footer />
    </div>
  );
}
