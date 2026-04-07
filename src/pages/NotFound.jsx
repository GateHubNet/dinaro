import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useBreakpoint } from '../hooks/useBreakpoint';
import '../components/FeaturePage.css';

export default function NotFound() {
  const navigate = useNavigate();
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile' || bp === 'tablet';
  return (
    <div className={`not-found${isMobile ? ' not-found--mobile' : ''}`}>
      <Navbar />
      <div className="not-found__content">
        <p className="not-found__code">404</p>
        <p className="not-found__title">Page not found</p>
        <p className="not-found__body">The page you're looking for doesn't exist or has been moved.</p>
        <button type="button" className="not-found__btn" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
}
