import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';
import LogoImg from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer section-dark">
            <div className="container footer-inner">
                <div className="footer-col footer-brand">
                    <div className="bg-glow-accent bg-glow-primary footer-glow"></div>
                    <Link to="/" className="footer-logo-link">
                        <img src={LogoImg} alt="Adaptica AI Logo" className="footer-logo-img" />
                    </Link>
                    <p className="footer-desc" style={{ marginTop: '1rem' }}>Вашият партньор за AI трансформация, автоматизация и растеж.</p>
                </div>

                <div className="footer-col">
                    <h4>Навигация</h4>
                    <Link to="/">Начало</Link>
                    <Link to="/services">Услуги</Link>
                    <Link to="/aboutus">За Нас</Link>
                    <Link to="/blog">Блог</Link>
                    <Link to="/contact">Контакт</Link>
                </div>

                <div className="footer-col">
                    <h4>Услуги</h4>
                    <Link to="/transformation">AI Трансформация</Link>
                    <Link to="/aicrm">AI CRM</Link>
                    <Link to="/agents">AI Агенти</Link>
                    <Link to="/automation">AI Автоматизация</Link>
                    <Link to="/education">AI Обучения</Link>
                </div>

                <div className="footer-col">
                    <h4>Контакт</h4>
                    <a href="tel:+359877008951">+359 877 008 951</a>
                    <a href="mailto:office@adaptica.ai">office@adaptica.ai</a>
                    <div className="footer-socials">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook size={18} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} Adaptica AI. Всички права запазени.</p>
            </div>
        </footer>
    );
};

export default Footer;
