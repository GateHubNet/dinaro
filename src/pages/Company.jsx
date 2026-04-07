import { useNavigate } from 'react-router-dom';
import { ctaBg } from '../shared';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { MobileFeaturePage } from '../components/MobileFeaturePage';
import '../components/FeaturePage.css';

import imgVector from '../assets/company-vector.svg';

const heroBg = `linear-gradient(44.5deg, rgb(4,67,82) 0%, rgba(4,67,82,0) 100%), url("data:image/svg+xml,%3Csvg viewBox='0 0 1696 456' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Crect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/%3E%3Cdefs%3E%3CradialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-30 39.071 -76 -15.423 1148 228.26)'%3E%3Cstop stop-color='rgba(34,132,155,0.2)' offset='0'/%3E%3Cstop stop-color='rgba(34,132,155,0)' offset='1'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E"), linear-gradient(90deg, rgb(4,67,82) 0%, rgb(4,67,82) 100%)`;

const features = [
  { cardSide: 'right', tag: 'REGULATION', title: 'e-Money Institution Licence', text: 'Dinaro is a licensed e-money institution regulated by the Bank of Slovenia, authorised to issue electronic money and provide payment services across the entire European Economic Area through passporting. Businesses building on Dinaro benefit from a fully compliant regulatory foundation — without needing their own licence.' },
  { cardSide: 'left',  tag: 'SECURITY',   title: 'PCI DSS Level 1 Certified', text: 'Certified by the Payment Card Industry Data Security Standards (PCI DSS) Council for issuers and processors of payment cards — the highest standard of information security for protecting confidential customer data.' },
  { cardSide: 'right', tag: 'PROTECTION', title: 'Fund Protection', text: "Client funds are held in segregated accounts with a safeguarding partner bank, treated as third-party assets and kept entirely separate from Dinaro's own assets. The Financial Services Compensation Scheme (FSCS) does not apply." },
  { cardSide: 'left',  tag: 'PAYMENT',    title: 'Mastercard Principal Member', text: 'Dinaro holds Principal Membership with Mastercard for both card issuing and acquiring, allowing us to directly issue Mastercard-branded debit cards and provide merchant acquiring services — without third-party intermediaries.' },
];

const legalDetails = [
  { label: 'Company Reg. No.',    value: '8640084000' },
  { label: 'Regulatory Authority', value: 'Bank of Slovenia' },
  { label: 'Licence Type',         value: 'Electronic Money Institution (EMI)' },
  { label: 'Licence No.',          value: '0.04.5.4-5/2020-70' },
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

const mobileLegalCard = (
  <div className="fp__legal-card-mobile">
    <div className="card fp__legal-card-mobile-inner">
      <p className="fp__legal-card-mobile-name">Dinaro d.o.o.</p>
      <p className="fp__legal-card-mobile-address">Bravničarjeva ulica 13, 1000 Ljubljana, Slovenia</p>
      <div className="fp__legal-card-mobile-details">
        {[
          { label: 'Company Reg. No.',    value: '8640084000' },
          { label: 'Regulatory Authority', value: 'Bank of Slovenia' },
          { label: 'Licence Type',         value: 'Electronic Money Institution (EMI)' },
          { label: 'Licence No.',          value: '0.04.5.4-5/2020-70' },
        ].map(({ label, value }) => (
          <div key={label} className="fp__legal-card-mobile-detail">
            <p className="fp__legal-card-mobile-detail-label">{label}</p>
            <p className="fp__legal-card-mobile-detail-value">{value}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Company() {
  const navigate = useNavigate();
  const bp = useBreakpoint();
  if (bp === 'mobile' || bp === 'tablet') {
    return (
      <MobileFeaturePage
        heroTitle="Global Payment Solutions Provider"
        heroSubtitle="We commit to comply with regulations and do the right thing"
        features={features}
        extraContent={mobileLegalCard}
        ctaTitle="Open your payment account in just a few simple steps."
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
          <p className="fp__hero-title">Global Payment<br />Solutions Provider</p>
          <p className="fp__hero-subtitle">We commit to comply with regulations and do the right thing</p>
        </div>
      </div>

      <div className="fp__features">
        {features.map(({ cardSide, tag, title, text }) => (
          <FeatureRow key={tag} cardSide={cardSide} tag={tag} title={title} text={text} />
        ))}
      </div>

      <div className="card fp__legal-strip">
        <div className="fp__legal-strip-name">
          <p className="fp__legal-strip-name-title">Dinaro d.o.o.</p>
          <p className="fp__legal-strip-name-address">Bravničarjeva ulica 13, 1000 Ljubljana, Slovenia</p>
        </div>
        <div className="fp__legal-strip-divider" />
        <div className="fp__legal-strip-details">
          {legalDetails.map(({ label, value }) => (
            <div key={label} className="fp__legal-detail">
              <p className="fp__legal-detail-label">{label}</p>
              <p className="fp__legal-detail-value">{value}</p>
            </div>
          ))}
        </div>
      </div>

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
