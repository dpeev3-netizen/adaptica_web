import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Transformation.css';
import { Search, BookOpen, Cpu, Users, Clock, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import SEOHead, { createServiceSchema, createFAQSchema } from '../components/SEOHead';
import FaqAccordion from '../components/FaqAccordion';

const steps = [
    { num: '01', title: 'Стратегия', desc: 'Двуседмичен анализ на бизнеса и процесите ви. Изграждаме стратегически план с AI решения, оценка на ROI и конкретни ползи.', icon: <Search size={24} strokeWidth={1.5} /> },
    { num: '02', title: 'Разработка', desc: 'Създаваме и внедряваме нужните автоматизации, AI агенти и интеграции от стратегията.', icon: <Cpu size={24} strokeWidth={1.5} /> },
    { num: '03', title: 'Обучение', desc: 'Едномесечно обучение, в което тренираме вас и екипа ви да използвате AI инструментите за бърза и уверена адаптация.', icon: <BookOpen size={24} strokeWidth={1.5} /> },
];

const benefits = [
    { icon: <Clock size={22} strokeWidth={1.5} />, title: '40+ часа спестени', desc: 'Средно спестяваме 40+ часа седмично чрез автоматизация на повтарящи се задачи.' },
    { icon: <TrendingUp size={22} strokeWidth={1.5} />, title: '3× по-бърз растеж', desc: 'Нашите клиенти отчитат 3 пъти по-бърз растеж след AI трансформация.' },
    { icon: <Shield size={22} strokeWidth={1.5} />, title: '95% успеваемост', desc: 'Доказан метод с 95% успеваемост, защото решенията ни са базирани на данни.' },
    { icon: <Users size={22} strokeWidth={1.5} />, title: 'Без допълнителен екип', desc: 'Елиминирайте нуждата от допълнителен персонал с AI, който работи 24/7.' },
];

const faqs = [
    { q: 'Колко време отнема AI трансформацията?', a: 'Стандартният процес е 3-4 месеца, включващ стратегия (2 седмици), обучение (1 месец) и разработка/внедряване (1-2 месеца).' },
    { q: 'Нужни ли са технически познания?', a: 'Не. Нашият екип се грижи за всичко техническо. Обучаваме ви как да използвате готовите инструменти без нужда от програмиране.' },
    { q: 'Колко струва AI трансформация?', a: 'Всеки проект е уникален. Предлагаме безплатна консултация, в която оценяваме нуждите ви и създаваме индивидуална оферта с ясна ROI прогноза.' },
    { q: 'Какво се случва след приключването?', a: 'Осигуряваме 24/7 поддръжка и мониторинг. Системите продължават да работят, а ние оптимизираме и надграждаме при нужда.' },
];

const transServiceSchema = createServiceSchema(
    'AI Трансформация на бизнес',
    'Пълна AI трансформация на бизнеса: стратегия, анализ, разработка и обучение на екипа. Двуседмичен анализ, AI внедряване и едномесечно обучение. 95% успеваемост.',
    '/transformation'
);

const Transformation = () => {
    const ref = useScrollReveal();
    return (
        <div ref={ref}>
            <SEOHead
                title="AI Трансформация на Бизнес | Adaptica AI България"
                description="Пълна AI трансформация: стратегия, разработка и обучение. 95% успеваемост. 40+ часа спестени седмично. 3× по-бърз растеж. Безплатна консултация."
                path="/transformation"
                jsonLd={[transServiceSchema, createFAQSchema(faqs)]}
            />

            {/* GEO: AI-extractable summary */}
            <section aria-label="Кратко обобщение" className="geo-summary" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                <h2>Кратко обобщение: AI трансформация от Adaptica AI</h2>
                <p>Adaptica AI предлага пълна AI трансформация за бизнес в България чрез изпитан 3-стъпков метод: Стратегия (двуседмичен анализ с ROI оценка), Разработка (внедряване на AI агенти и автоматизации) и Обучение (едномесечна програма за екипа). 95% успеваемост, средно 40+ часа спестени седмично, 3× по-бърз растеж.</p>
            </section>

            {/* Hero */}
            <section className="page-hero page-hero-dark">
                <div className="bg-glow-accent bg-glow-primary" style={{ width: 400, height: 400, top: '-10%', right: '10%', position: 'absolute' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <p className="section-label fade-in" style={{ justifyContent: 'center' }}>AI Трансформация</p>
                    <h1 className="fade-in">AI Трансформация за Бизнес — Вашият AI Партньор</h1>
                    <p className="subtitle fade-in">Превръщаме технологията от разход в конкурентно предимство. <strong>95% успеваемост.</strong></p>
                </div>
            </section>

            {/* Big stat intro */}
            <section className="trans-stat-hero section-padding">
                <div className="container trans-stat-grid">
                    <div className="fade-in">
                        <span className="trans-big-number">95%</span>
                        <p className="trans-big-sub">от AI инициативите в бизнеси по света се <strong>провалят</strong>.</p>
                        <p className="trans-big-source">MIT Sloan Management Review</p>
                    </div>
                    <div className="fade-in">
                        <p className="big-text">
                            Причината не е в технологията, а в подхода. AI трансформацията е процесът, в който заедно откриваме как изкуственият интелект може да улесни вашия бизнес. Да ви спести време и разходи, като ви помогне да растете и печелите повече.
                        </p>
                        <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', fontSize: '1rem' }}>
                            Това не е просто услуга, а дългосрочно партньорство. Ние не предлагаме шаблонни решения. Всяка AI стратегия е уникална и базирана на конкретните ви нужди и цели.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3-step method */}
            <section className="trans-steps section-padding section-dark">
                <div className="container">
                    <div className="section-header centered fade-in">
                        <p className="section-label" style={{ justifyContent: 'center' }}>Как Работим</p>
                        <h2>Как работи AI трансформацията на бизнес?</h2>
                    </div>
                    <div className="steps-timeline">
                        {steps.map((s, i) => (
                            <div key={i} className="step-item fade-in">
                                <div className="step-line-dot">
                                    <span className="step-dot" />
                                    {i < steps.length - 1 && <span className="step-connector-line" />}
                                </div>
                                <div className="dark-card step-card">
                                    <div className="step-icon-wrap">{s.icon}</div>
                                    <span className="step-num">{s.num}</span>
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="trans-benefits section-padding">
                <div className="container">
                    <div className="section-header centered fade-in">
                        <p className="section-label" style={{ justifyContent: 'center' }}>Резултати</p>
                        <h2>Какви резултати дава AI трансформацията?</h2>
                        <p>Реални, измерими резултати от първия месец.</p>
                    </div>
                    <div className="benefits-grid">
                        {benefits.map((b, i) => (
                            <div key={i} className="neo-card benefit-card fade-in">
                                <div className="scanline" />
                                <div className="benefit-icon">{b.icon}</div>
                                <h3>{b.title}</h3>
                                <p>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who is it for */}
            <section className="trans-for section-padding section-dark">
                <div className="container trans-for-grid">
                    <div className="fade-in">
                        <p className="section-label">За кого е</p>
                        <h2>AI Трансформацията е за вашия бизнес, ако:</h2>
                    </div>
                    <div className="fade-in">
                        <ul className="check-list">
                            <li>Губите часове в повтарящи се ръчни задачи.</li>
                            <li>Искате да мащабирате без да наемате повече хора.</li>
                            <li>Конкурентите ви вече използват AI и усещате натиска.</li>
                            <li>Знаете, че AI е бъдещето, но не знаете откъде да започнете.</li>
                            <li>Искате партньор, не просто доставчик на технологии.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="trans-faq section-padding">
                <div className="container">
                    <div className="section-header centered fade-in">
                        <p className="section-label" style={{ justifyContent: 'center' }}>Въпроси</p>
                        <h2>Често Задавани Въпроси</h2>
                    </div>
                    <FaqAccordion faqs={faqs} />
                </div>
            </section>
        </div>
    );
};

export default Transformation;
