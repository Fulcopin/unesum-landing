import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-section branding">
                <img src="/images/logo-unesum.png" alt="UNESUM" className="footer-logo" />
                <h3>GISICF - UNESUM</h3>
                <p>Grupo de Investigación en Sistemas Inteligentes y Ciberfísicos</p>
            </div>
    
            <div className="footer-section contact">
                <h4>Contacto</h4>
                <div className="contact-info">
                    <p>
                        <FaMapMarkerAlt className="contact-icon" />
                        <span>Km 1.5 Vía Noboa, Jipijapa, Manabí, Ecuador</span>
                    </p>
                    <p>
                        <FaPhone className="contact-icon" />
                        <span>+593 (5) 2600-229</span>
                    </p>
                    <p>
                        <FaEnvelope className="contact-icon" />
                        <span>gisicf@unesum.edu.ec</span>
                    </p>
                </div>
            </div>
    
            <div className="footer-section social">
                <h4>Síguenos</h4>
                <div className="social-icons-grid">
                    <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="social-icon" />
                    </a>
                    <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="social-icon" />
                    </a>
                    <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://www.youtube.com/watch?v=J_LbTgP4VE4" className="social-link" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="social-icon" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;