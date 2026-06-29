import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-brand-logo">
            <Logo width={64} height={64} showText={true} />
          </div>
          <p>Intelligent Data Solutions for Modern Businesses. We provide accurate, real-time web intelligence to help enterprises make smarter decisions.</p>
        </div>
        
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/data-usage-policy">Data Usage Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zarvant Technologies Inc. All rights reserved.</p>
        <p>info@zarvant.xyz | 708 289 8516</p>
      </div>
    </footer>
  );
};

export default Footer;
