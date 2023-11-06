import React from 'react';
import './footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} OurCompany. All rights reserved</p>
    </footer>
  );
}

export default Footer;