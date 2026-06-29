import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <Link to="/" className="nav-brand" style={{ textDecoration: 'none' }}>
        <Logo width={48} height={48} showText={true} />
      </Link>
      <div className="nav-links">
        <div className="link-wrapper">
          <Link to="/" className="nav-link">Home</Link>
          <div className="hover-line"></div>
        </div>
        <div className="link-wrapper">
          <Link to="/services" className="nav-link">Services</Link>
          <div className="hover-line"></div>
        </div>
        <div className="link-wrapper">
          <Link to="/about" className="nav-link">About</Link>
          <div className="hover-line"></div>
        </div>
        <div className="link-wrapper">
          <Link to="/contact" className="nav-link">Contact</Link>
          <div className="hover-line"></div>
        </div>
        <Link to="/contact" className="btn btn-primary">Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;
