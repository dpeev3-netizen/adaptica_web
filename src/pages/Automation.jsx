import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Automation.css';
import { Target, Smartphone, Settings, Palette, ArrowRight, Workflow, Mail, FileText } from 'lucide-react';
import SEOHead, { createServiceSchema, createFAQSchema } from '../components/SEOHead';
import FaqAccordion from '../components/FaqAccordion';

const modules = [
    {
        title: 'AI Lead Generation & Outreach',
        desc: 'Системи, които откриват и достигат до качествени потенциални клиенти. Автоматизираме целия процес: от таргетиране до персонализирани съобщения.',
        points: ['Автоматизирано генериране на лийдове', 'Персонализиран outreach в мащаб', 'Повече срещи и затворени сделки'],
        icon: <Target size={26} strokeWidth={1.5} />,
    },
    {
        title: 'Social Media & AI Съдържание',
        desc: 'Автоматизирано публикуване, AI генерирано съдържание и оптимизация на стратегията ви. Спестете часове работа всяка седмица.',
        points: ['Ежедневно публикуване', 'Ръст на ангажираност', 'Анализ и оптимизация'],
        icon: <Smartphone size={26} strokeWidth={1.5} />,
    },
    {
        title: 'AI Операционни Автоматизации',
        desc: 'Системи, които автоматизират фактури, договори, обработка на данни и вътрешни справки.',
        points: ['Намаление на грешки', 'По-ниски оперативни разходи', 'Повече време за стратегия'],
        icon: <Settings size={26} strokeWidth={1.5} />,
    },
    {
        title: 'AI Креативен Екип',
        desc: 'Системи, които извличат топ реклами от Facebook Ad Library и с AI ги преработват за вашия бизнес.',
        points: ['Извличане на успешни реклами', 'AI ремикс на съдържание', 'По-висока възвръщаемост'],
        icon: <Palette size={26} strokeWidth={1.5} />,
    },
];

const integrations = ['Zapier', 'Make.com', 'n8n', 'Gmail', 'Slack', 'HubSpot', 'Google Sheets', 'Notion', 'WhatsApp', 'Facebook', 'Stripe', 'Calendly'];

const autoFaqs = [
    { q: 'Какво е AI автоматизация на бизнес процеси?', a: 'AI автоматизацията използва изкуствен интелект за премахване на повтарящи се ръчни задачи: обработка на данни, комуникация с клиенти, управление на документи и генериране на отчети. Спестява средно 40+ часа седмично.' },
    { q: 'Кои бизнес процеси могат да бъдат автоматизирани с AI?', a: 'Почти всички: генериране на лийдове, social media публикации, обработка на фактури, договори, клиентски запитвания, имейл маркетинг, отчети и анализи. 80% от рутинните задачи са автоматизируеми.' },
    { q: 'С какви инструменти работите?', a: 'Интегрираме AI автоматизации с 20+ платформи: Zapier, Make.com, n8n, Gmail, Slack, HubSpot, Google Sheets, Notion, WhatsApp, Facebook, Stripe, Calendly и много други.' },
    { q: 'Колко време отнема внедряването на автоматизация?', a: 'Зависи от обхвата. Прости автоматизации (имейл, отговори) се внедряват за 1-2 седмици. Комплексни системи за lead generation и операции — 4-8 седмици.' },
    { q: 'Каква е възвръщаемостта на инвестицията (ROI)?', a: 'Нашите клиенти отчитат ROI в първите 30-90 дни. Средните спестявания са 40+ часа ръчна работа седмично и до 3× по-бърз ръст на приходите.' },
];

const autoServiceSchema = createServiceSchema(
    'AI Автоматизация на бизнес процеси',
    'Автоматизация на бизнес процеси с AI: lead generation, social media, операционни автоматизации и AI креативен екип. Интеграции с 20+ платформи.',
    '/automation'
);

const Automation = () => {
    const ref = useScrollReveal();
    return (
        <div ref={ref}>
            <SEOHead
                title="AI Автоматизация на Бизнес Процеси | Adaptica AI"
                description="Автоматизирайте бизнес процесите с AI: lead generation, social media, фактури, документи. Интеграции с 20+ платформи. Спестете 40+ часа седмично."
                path="/automation"
                jsonLd={[autoServiceSchema, createFAQSchema(autoFaqs)]}
            />

            {/* GEO: AI-extractable summary */}
            <section aria-label="Кратко обобщение" className="geo-summary" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                <h2>Кратко обобщение: AI автоматизация от Adaptica AI</h2>
                <p>Adaptica AI автоматизира бизнес процеси с изкуствен интелект: lead generation и outreach, social media управление, операционни автоматизации (фактури, договори, данни) и AI креативен екип. Интеграции с 20+ платформи включително Zapier, Make.com, n8n, HubSpot. Средно спестяване: 40+ часа ръчна работа седмично.</p>
            </section>

            <section className="page-hero page-hero-dark">
                <div className="bg-glow-accent bg-glow-primary" style={{ width: 400, height: 400, bottom: '-20%', left: '20%', position: 'absolute' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <p className="section-label fade-in" style={{ justifyContent: 'center' }}>AI Автоматизация</p>
                    <h1 className="fade-in">AI Автоматизация на Бизнес Процеси</h1>
                    <p className="subtitle fade-in">Автоматизирайте рутинните задачи с изкуствен интелект. Спестете <strong>40+ часа</strong> седмично.</p>
                </div>
            </section>

            {/* Intro with flow diagram */}
            <section className="auto-intro section-padding">
                <div className="container">
                    <div className="auto-intro-content fade-in">
                        <p style={{ fontSize: '1.1rem', color: 'var(--muted-text)', lineHeight: '1.8', textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
                            AI автоматизацията спестява време и ресурси, като премахва рутинните задачи. Днес <strong>80% от бизнес процесите</strong> могат да бъдат автоматизирани: от продажби и обслужване до маркетинг и управление.
                        </p>
                        <div className="auto-flow-visual">
                            <div className="flow-node">
                                <div className="flow-node-icon"><Mail size={20} strokeWidth={1.5} /></div>
                                <span>Trigger</span>
                            </div>
                            <div className="flow-arrow"><ArrowRight size={18} /></div>
                            <div className="flow-node">
                                <div className="flow-node-icon"><Workflow size={20} strokeWidth={1.5} /></div>
                                <span>AI Process</span>
                            </div>
                            <div className="flow-arrow"><ArrowRight size={18} /></div>
                            <div className="flow-node">
                                <div className="flow-node-icon"><FileText size={20} strokeWidth={1.5} /></div>
                                <span>Output</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules */}
            <section className="auto-modules section-padding section-dark">
                <div className="container">
                    <div className="section-header centered fade-in">
                        <p className="section-label" style={{ justifyContent: 'center' }}>Модули</p>
                        <h2>Какви бизнес процеси автоматизираме с AI?</h2>
                    </div>
                    {modules.map((m, i) => (
                        <div key={i} className={`auto-module fade-in ${i % 2 !== 0 ? 'reverse' : ''}`}>
                            <div className="module-info">
                                <div className="module-icon-wrap">{m.icon}</div>
                                <h3>{m.title}</h3>
                                <p>{m.desc}</p>
                            </div>
                            <div className="module-points dark-card">
                                {m.points.map((p, j) => (
                                    <div key={j} className="point-item">
                                        <span className="point-bullet">▸</span>
                                        <span>{p}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Integration grid */}
            <section className="auto-integrations section-padding">
                <div className="container">
                    <div className="section-header centered fade-in">
                        <p className="section-label" style={{ justifyContent: 'center' }}>Интеграции</p>
                        <h2>С какви платформи се интегрира AI автоматизацията?</h2>
                        <p>Свързваме AI автоматизации с инструментите, които вече използвате.</p>
                    </div>
                    <div className="integrations-grid fade-in">
                        {integrations.map((name, i) => (
                            <div key={i} className="neo-card-inset integration-chip">
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="auto-faq section-padding">
                <div className="container">
                    <div className="section-header centered fade-in">
                        <p className="section-label" style={{ justifyContent: 'center' }}>Въпроси</p>
                        <h2>Често задавани въпроси за AI автоматизация</h2>
                    </div>
                    <FaqAccordion faqs={autoFaqs} />
                </div>
            </section>
        </div>
    );
};

export default Automation;
