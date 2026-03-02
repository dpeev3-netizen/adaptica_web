import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './Navbar.css';
import LogoImg from '../assets/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        setServicesOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const close = () => setMenuOpen(false);

    const serviceLinks = [
        { to: '/transformation', label: 'AI Трансформация' },
        { to: '/aicrm', label: 'AI CRM' },
        { to: '/agents', label: 'AI Агенти' },
        { to: '/automation', label: 'AI Автоматизация' },
        { to: '/education', label: 'AI Обучения' },
    ];

    const navLinks = [
        { to: '/', label: 'Начало' },
        { type: 'services', label: 'Услуги' },
        { to: '/aboutus', label: 'За Нас' },
        { to: '/blog', label: 'Блог' },
        { to: '/contact', label: 'Контакт' },
    ];

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''}`}>
            <div className="navbar-inner container">
                <Link to="/" className="nav-logo" onClick={close}>
                    <img src={LogoImg} alt="Adaptica AI Logo" className="logo-img" />
                </Link>

                <button
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className="line top" />
                    <span className="line bottom" />
                </button>
            </div>

            {/* FULLSCREEN OVERLAY */}
            <div className={`fs-menu ${menuOpen ? 'open' : ''}`}>
                <div className="fs-menu-inner">
                    {/* Main nav — centered */}
                    <nav className="fs-nav">
                        {navLinks.map((item, i) => {
                            if (item.type === 'services') {
                                return (
                                    <div key="services" className={`fs-nav-item fs-services-group ${servicesOpen ? 'expanded' : ''}`} style={{ '--i': i }}>
                                        <button
                                            className="fs-nav-link"
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                        >
                                            <span className="fs-link-text">{item.label}</span>
                                            <span className={`fs-chevron ${servicesOpen ? 'open' : ''}`}>+</span>
                                        </button>
                                        <div className={`fs-sub-menu ${servicesOpen ? 'open' : ''}`}>
                                            {serviceLinks.map((s) => (
                                                <Link key={s.to} to={s.to} className="fs-sub-link" onClick={close}>
                                                    <ArrowUpRight size={14} />
                                                    {s.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <div key={item.to} className="fs-nav-item" style={{ '--i': i }}>
                                    <Link to={item.to} className="fs-nav-link" onClick={close}>
                                        <span className="fs-link-text">{item.label}</span>
                                    </Link>
                                </div>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="fs-footer">
                        <div className="fs-footer-col">
                            <a href="mailto:office@adaptica.ai" className="fs-footer-link">office@adaptica.ai</a>
                        </div>
                        <div className="fs-footer-col">
                            <a href="tel:+359877008951" className="fs-footer-link">+359 877 008 951</a>
                        </div>
                        <div className="fs-footer-col">
                            <Link to="/book" className="fs-cta-btn" onClick={close}>
                                Безплатна Консултация
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
