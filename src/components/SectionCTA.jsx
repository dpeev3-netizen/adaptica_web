import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import './SectionCTA.css';

const SectionCTA = ({ heading, subtext, buttonText, buttonLink }) => {
    return (
        <section className="section-cta">
            <div className="cta-content container">
                {/* Animated border frame */}
                <div className="cta-frame">
                    <div className="cta-frame-inner">
                        <div className="cta-badge">
                            <Sparkles size={14} strokeWidth={2} />
                            <span>Следваща Стъпка</span>
                        </div>

                        <h2 className="cta-heading">
                            {heading || 'Готови ли сте за Трансформация?'}
                        </h2>

                        <p className="cta-sub">
                            {subtext || 'Разделят ви само няколко минути от бъдещето на вашия бизнес.'}
                        </p>

                        <div className="cta-actions">
                            <Link to={buttonLink || '/contact'} className="cta-btn-primary">
                                {buttonText || 'Свържете се с Нас'}
                                <ArrowRight size={18} strokeWidth={2} />
                            </Link>
                            <Link to="/services" className="cta-btn-ghost">
                                Разгледайте услугите
                            </Link>
                        </div>

                        <p className="cta-micro">Безплатна консултация. Без ангажименти.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionCTA;
