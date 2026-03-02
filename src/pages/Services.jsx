import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Services.css';
import { Settings, BarChart3, Bot, Zap, GraduationCap, ArrowRight } from 'lucide-react';
import SEOHead, { createServiceSchema, createFAQSchema } from '../components/SEOHead';
import FaqAccordion from '../components/FaqAccordion';

const services = [
    {
        to: '/transformation',
        label: 'AI Трансформация',
        desc: 'Стратегия, обучение и разработка. Вашият пълен AI партньор. Създаваме пътна карта и внедряваме AI от нулата.',
        icon: <Settings size={28} strokeWidth={1.5} />,
        tag: 'Стратегия',
    },
    {
        to: '/aicrm',
        label: 'AI CRM',
        desc: 'Интелигентна CRM система, изцяло персонализирана за вашия бизнес. Вградени AI агенти, автоматизации и отчети.',
        icon: <BarChart3 size={28} strokeWidth={1.5} />,
        tag: 'Продукт',
    },
    {
        to: '/agents',
        label: 'AI Агенти',
        desc: 'Дигитални служители, които работят 24/7 без почивка. Обслужват клиенти, обработват заявки и генерират съдържание.',
        icon: <Bot size={28} strokeWidth={1.5} />,
        tag: 'Екип',
    },
    {
        to: '/automation',
        label: 'AI Автоматизация',
        desc: 'Автоматизирайте всичко: от продажби до маркетинг, от фактури до клиентско обслужване.',
        icon: <Zap size={28} strokeWidth={1.5} />,
        tag: 'Процеси',
    },
    {
        to: '/education',
        label: 'AI Обучения',
        desc: 'Практически обучения за вашия екип. Научете ги да работят с AI инструменти за реална производителност.',
        icon: <GraduationCap size={28} strokeWidth={1.5} />,
        tag: 'Екип',
    },
];

const serviceFaqs = [
    { q: 'Какви AI услуги предлага Adaptica AI?', a: 'Adaptica AI предлага 5 основни AI услуги: AI Трансформация (стратегия + внедряване), AI CRM системи с вградени AI агенти, AI Агенти за автоматизация на задачи, AI Автоматизация на бизнес процеси и AI Обучения за екипи.' },
    { q: 'Как AI може да намали разходите на моята фирма?', a: 'AI автоматизира повтарящите се задачи, намалява нуждата от допълнителен персонал и елиминира човешки грешки. Нашите клиенти спестяват средно 40+ часа седмично и отчитат до 3× по-бърз растеж на бизнеса.' },
    { q: 'Колко време отнема внедряването на AI?', a: 'Зависи от обхвата на проекта. Стандартна AI трансформация отнема 3-4 месеца. По-малки автоматизации и AI агенти могат да бъдат внедрени за 2-4 седмици.' },
    { q: 'Нужни ли са технически познания за работа с AI?', a: 'Не. Нашият екип се грижи за цялата техническа реализация. Обучаваме вашия екип да използва готовите инструменти без програмиране.' },
    { q: 'Предлагате ли безплатна консултация?', a: 'Да. Първата консултация е напълно безплатна и без ангажимент. Анализираме нуждите на вашия бизнес и предлагаме конкретен план с очаквана ROI.' },
];

const serviceSchemas = [
    createServiceSchema('AI Трансформация', 'Стратегия, обучение и разработка за пълна AI трансформация на бизнеса.', '/transformation'),
    createServiceSchema('AI CRM система', 'Персонализирана CRM система с вградени AI агенти и автоматизации.', '/aicrm'),
    createServiceSchema('AI Агенти', 'Дигитални служители, работещи 24/7 за обслужване, продажби и управление.', '/agents'),
    createServiceSchema('AI Автоматизация', 'Автоматизация на бизнес процеси с AI: lead generation, social media, операции.', '/automation'),
    createServiceSchema('AI Обучения', 'Практически AI обучения за екипи: промптинг, Cursor IDE, workflow автоматизация.', '/education'),
];

const Services = () => {
    const ref = useScrollReveal();
    return (
        <div ref={ref}>
            <SEOHead
                title="AI Услуги за Бизнес | Adaptica AI България"
                description="Комплексни AI услуги за бизнес в България: AI трансформация, AI CRM, AI агенти, автоматизация на процеси и AI обучения. Безплатна консултация."
                path="/services"
                jsonLd={[...serviceSchemas, createFAQSchema(serviceFaqs)]}
            />

            {/* GEO: AI-extractable summary */}
            <section aria-label="Кратко обобщение" className="geo-summary" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                <h2>Кратко обобщение: AI услуги от Adaptica AI</h2>
                <p>Adaptica AI предлага 5 комплексни AI услуги за бизнес в България: AI Трансформация, AI CRM системи, AI Агенти, AI Автоматизация на бизнес процеси и AI Обучения. Всяка услуга е персонализирана за конкретния бизнес и включва безплатна първа консултация.</p>
            </section>

            <section className="page-hero page-hero-dark">
                <div className="bg-glow-accent bg-glow-primary" style={{ width: 400, height: 400, top: '-10%', right: '10%', position: 'absolute' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <p className="section-label fade-in" style={{ justifyContent: 'center' }}>Нашите Услуги</p>
                    <h1 className="fade-in">AI Услуги за Бизнес в България</h1>
                    <p className="subtitle fade-in">Комплексни AI решения: от стратегия до внедряване. Безплатна консултация.</p>
                </div>
            </section>

            <section className="services-main section-padding">
                <div className="container">
                    <div className="services-list">
                        {services.map((s, i) => (
                            <Link to={s.to} key={s.to} className="service-row neo-card fade-in">
                                <div className="scanline" />
                                <div className="service-row-left">
                                    <div className="service-row-icon">{s.icon}</div>
                                    <div>
                                        <div className="service-row-header">
                                            <h3>{s.label}</h3>
                                            <span className="tag">{s.tag}</span>
                                        </div>
                                        <p>{s.desc}</p>
                                    </div>
                                </div>
                                <span className="service-row-arrow"><ArrowRight size={20} strokeWidth={1.5} /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before/After comparison */}
            <section className="services-comparison section-padding section-dark">
                <div className="container">
                    <div className="section-header centered fade-in">
                        <p className="section-label" style={{ justifyContent: 'center' }}>Резултати</p>
                        <h2>Как AI трансформира бизнес процесите?</h2>
                    </div>
                    <div className="comparison-grid fade-in">
                        <div className="dark-card comparison-before">
                            <h3 className="comparison-title before-title">Без AI</h3>
                            <ul>
                                <li><strong>40+</strong> часа ръчна работа седмично</li>
                                <li>Бавно обработване на запитвания</li>
                                <li>Загуба на лийдове</li>
                                <li>Нужда от голям екип</li>
                                <li>Липса на данни за решения</li>
                            </ul>
                        </div>
                        <div className="dark-card comparison-after">
                            <h3 className="comparison-title after-title">С AI от Adaptica</h3>
                            <ul>
                                <li><strong>40+</strong> часа спестени седмично</li>
                                <li>Моментален отговор 24/7</li>
                                <li>Автоматично квалифициране на лийдове</li>
                                <li>Мащабиране без нов персонал</li>
                                <li>AI-базирани прогнози и отчети</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="services-faq section-padding">
                <div className="container">
                    <div className="section-header centered fade-in">
                        <p className="section-label" style={{ justifyContent: 'center' }}>Въпроси</p>
                        <h2>Често задавани въпроси за AI услуги</h2>
                    </div>
                    <FaqAccordion faqs={serviceFaqs} />
                </div>
            </section>
        </div>
    );
};

export default Services;
