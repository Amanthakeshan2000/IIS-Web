import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  const handleLinkClick = () => {
    if (setMobileToggle) {
      setMobileToggle(false);
    }
  };

  return (
    <ul className="cs_nav_list fw-medium text-uppercase">
      <li>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
      </li>
      <li>
        <Link to="/about" onClick={handleLinkClick}>
          About Us
        </Link>
      </li>
     
      <li>
        <Link to="/service" onClick={handleLinkClick}>
          Services
        </Link>
      </li>

      <li>
        <Link to="/contact" onClick={handleLinkClick}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
