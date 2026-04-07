import { useNavigate } from 'react-router-dom';
import { usePreloadRoute } from '../hooks/usePreloadRoute';
import footerDinaro from '../footer-dinaro.svg';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();
  const preloadRoute = usePreloadRoute();

  return (
    <footer className="footer">
      <div className="footer__watermark">
        <img src={footerDinaro} alt="" />
      </div>

      <div className="footer__content">
        <p className="footer__copyright">© Copyright 2026, All Rights Reserved</p>

        <nav className="footer__nav">
          <button
            type="button"
            className="footer__nav-link"
            onMouseEnter={() => preloadRoute('/terms')}
            onClick={() => navigate('/terms')}
          >
            Terms &amp; Conditions
          </button>
          <button
            type="button"
            className="footer__nav-link"
            onMouseEnter={() => preloadRoute('/complaints')}
            onClick={() => navigate('/complaints')}
          >
            Complaints
          </button>
          <button
            type="button"
            className="footer__nav-link"
            onMouseEnter={() => preloadRoute('/privacy-policy')}
            onClick={() => navigate('/privacy-policy')}
          >
            Privacy Policy
          </button>
        </nav>
      </div>
    </footer>
  );
}
