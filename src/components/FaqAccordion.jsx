import React, { useState } from 'react';
import './FaqAccordion.css';

const FaqAccordion = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div className="faq-accordion">
            {faqs.map((f, i) => (
                <div
                    key={i}
                    className={`faq-accordion-item${openIndex === i ? ' open' : ''}`}
                    onClick={() => toggle(i)}
                >
                    <div className="faq-accordion-header">
                        <h3>{f.q}</h3>
                        <span className="faq-accordion-icon">{openIndex === i ? '−' : '+'}</span>
                    </div>
                    <div className="faq-accordion-body">
                        <p>{f.a}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqAccordion;
