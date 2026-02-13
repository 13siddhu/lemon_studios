import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">

                {/* Brand Section */}
                <div className="footer-brand">
                    <div className="logo footer-logo">
                        <div className="logo-icon">🌿</div>
                        <span className="logo-text">Planto.</span>
                    </div>
                    <p className="footer-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="social-icons">
                        <a href="#" className="social-link"><Facebook size={20} /></a>
                        <a href="#" className="social-link"><Twitter size={20} /></a>
                        <a href="#" className="social-link"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Link's</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#plant-types">Plant Type's</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#privacy">Privacy</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="footer-newsletter">
                    <h3>For Every Update's</h3>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter Email..." />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                    <p className="copyright">Planto © All right reserve</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
