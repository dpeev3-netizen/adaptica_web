import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="page-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p className="section-label" style={{ justifyContent: 'center' }}>ERROR 404</p>
                <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: 'var(--primary-accent)', marginBottom: '1rem' }}>404</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--muted-text)', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
                    Страницата, която търсите, не съществува или е била преместена.
                </p>
                <Link to="/" className="btn-primary">Към Началната Страница</Link>
            </div>
        </section>
    );
};

export default NotFound;
