// Header.js

import React from 'react';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="images/logo.webp" width="65" height="65" alt="Welcome page by HTML" />
        </div>
        <div className="title">
          <h4>Md</h4>
        </div>
      </nav>
    </header>
  );
}

export default Header;