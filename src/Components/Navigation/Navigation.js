import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
      <nav>
        <ul>
          <li className={`list ${activeLink === 0 ? 'active' : ''}`} onClick={() => handleLinkClick(0)}>
            <Link to="/">
              <span className="text active1">Home</span>
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
            </Link>
          </li>
          <li className={`list ${activeLink === 1 ? 'active' : ''}`} onClick={() => handleLinkClick(1)}>
            <Link to="/about">
              <span className="text">About</span>
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
            </Link>
          </li>
          <li className={`list ${activeLink === 2 ? 'active' : ''}`} onClick={() => handleLinkClick(2)}>
            <Link to="/skills">
              <span className="text">Skills</span>
              <span className="icon">
                <ion-icon name="construct-outline"></ion-icon>
              </span>
            </Link>
          </li>
          <li className={`list ${activeLink === 3 ? 'active' : ''}`} onClick={() => handleLinkClick(3)}>
            <Link to="/projects">
              <span className="text">Project</span>
              <span className="icon">
                <ion-icon name="bag-check-outline"></ion-icon>
              </span>
            </Link>
          </li>
          <li className={`list ${activeLink === 4 ? 'active' : ''}`} onClick={() => handleLinkClick(4)}>
            <Link to="/contact">
              <span className="text">Contacts</span>
              <span className="icon">
                <ion-icon name="call-outline"></ion-icon>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
