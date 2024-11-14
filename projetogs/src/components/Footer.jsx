import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <a href="https://facebook.com"><FaFacebook /></a>
      <a href="https://instagram.com"><FaInstagram /></a>
      <a href="https://linkedin.com"><FaLinkedin /></a>
      <p>Email: your-email@example.com</p>
    </footer>
  );
}

export default Footer;
