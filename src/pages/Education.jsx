import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';
import { Search, Cpu, Zap, BarChart3, GraduationCap, Monitor, Users, Bot } from 'lucide-react';
import SEOHead, { createServiceSchema, createFAQSchema } from '../components/SEOHead';
import FaqAccordion from '../components/FaqAccordion';

const process = [
    {
        step: '01',
        icon: <Search size={24} strokeWidth={1.5} />,
        title: 'AI Одит',
        desc: 'Анализираме как екипът ви работи. Идентифицираме кой използва AI, как го използва, и кои задачи могат да бъдат автоматизирани — конкретно и измеримо.',
    },
    {
        step: '02',
        icon: <BarChart3 size={24} strokeWidth={1.5} />,
        title: 'Картотекиране на Спестеното Време',
        desc: 'Изчисляваме точно колко часа седмично губи екипът ви. Показваме реален потенциал за оптимизация — по роля, по задача, по отдел.',
    },
    {
        step: '03',
        icon: <GraduationCap size={24} strokeWidth={1.5} />,
        title: 'Персонализирано Обучение',
        desc: 'Провеждаме обучение, изцяло адаптирано към вашия стек и процеси. Не теория — само практика с реални инструменти и вашите собствени задачи.',
    },
    {
        step: '04',
        icon: <Zap size={24} strokeWidth={1.5} />,
        title: 'Внедряване в Работния Процес',
        desc: 'Не оставяме екипа сам. Помагаме да интегрирате наученото — нови workflow-и, нови навици, реална промяна в продуктивността.',
    },
];

const curriculum = [
    {
        module: 'Модул 1',
        title: 'AI Одит & Диагностика',
        topics: [
            'Как се прави AI одит на един екип',
            'Картиране на задачи с потенциал за AI',
            'Измерване на ROI от AI внедряване',
            'Идентифициране на bottleneck-и в процесите',
        ],
    },
    {
        module: 'Модул 2',
        title: 'Vibe Coding & AI-Assisted Dev',
        topics: [
            'Какво е vibe coding и защо е революционно',
            'Работа с модерни AI IDE-та (Cursor, Windsurf, Antigravity)',
            'Prompt engineering за разработчици',
            'Code review, debugging и refactor с AI',
        ],
    },
    {
        module: 'Модул 3',
        title: 'Agentic Workflows',
        topics: [
            'Какво представляват AI Агентите',
            'Agent-first подход към разработката',
            'Изграждане на multi-agent pipeline-и',
            'Автоматизиране на QA, документация и DevOps задачи',
        ],
    },
    {
        module: 'Модул 4',
        title: 'Workflow Автоматизация за Екипи',
        topics: [
            'Автоматизиране на повтарящи се задачи',
            'AI-интегрирани Slack / Notion / Linear workflow-и',
            'Вградени AI инструменти в everyday работа',
            'Изграждане на owned productивни системи',
        ],
    },
];

const outcomes = [
    'Екипът ви ще работи 30–50% по-бързо без допълнителни хора.',
    'Всеки разработчик ще знае как да vibe code продуктивно.',
    'Ще имате изградени agentic workflows за ключови процеси.',
    'Ще знаете точно кои задачи AI може и не може да свърши.',
    'Конкурентно предимство пред компании, които все още не са се адаптирали.',
];

const tools = [
    { name: 'Antigravity', desc: 'Следващо поколение AI IDE' },
    { name: 'Cursor / Windsurf', desc: 'AI-first редактори за код' },
    { name: 'Claude / GPT-4', desc: 'Advanced reasoning агенти' },
    { name: 'Zapier / Make', desc: 'Workflow автоматизация без код' },
    { name: 'Linear AI', desc: 'AI-assisted project management' },
    { name: 'Notion AI', desc: 'Интелигентна документация' },
];

const formats = [
    { icon: <Monitor size={26} strokeWidth={1.5} />, title: 'Online', desc: 'Live сесии, screen sharing, реален код. Работим заедно, не само лекции.', badge: 'Популярен' },
    { icon: <Users size={26} strokeWidth={1.5} />, title: 'На Място', desc: 'Идваме при вас. Работим директно с вашия екип, вашия код и вашите процеси.', badge: null },
    { icon: <Bot size={26} strokeWidth={1.5} />, title: 'Embedded', desc: 'Работим с вашия екип за 2–4 седмици. Най-дълбоката трансформация, максимален резултат.', badge: 'Препоръчан' },
];

const eduFaqs = [
    { q: 'Какво включва AI обучението на Adaptica?', a: 'Обучението включва 4 модула: AI одит и диагностика, vibe coding с AI IDE-та, agentic workflows и workflow автоматизация. Всичко е практическо и персонализирано за вашия екип.' },
    { q: 'За кого е подходящо AI обучението?', a: 'Обучението е насочено към software екипи, които искат да увеличат продуктивността си с 30–50% чрез AI. Подходящо е и за ръководители, които искат да разберат къде AI може да помогне на бизнеса.' },
    { q: 'Колко време отнема обучението?', a: 'Стандартното обучение е 1 месец (4 модула). Embedded форматът е 2–4 седмици интензивна работа с вашия екип. Online сесиите са по-гъвкави като график.' },
    { q: 'Какви резултати мога да очаквам?', a: 'Екипът ви ще работи 30–50% по-бързо без допълнителни хора. Всеки разработчик ще знае как да използва AI инструменти продуктивно. Ще имате изградени AI workflow-и за ключовите процеси.' },
    { q: 'Нужни ли са предварителни знания за AI?', a: 'Не. Обучението е проектирано да бъде достъпно за всички нива. Започваме с AI одит и диагностика, за да разберем точно къде е вашият екип и как да адаптираме съдържанието.' },
];

const eduServiceSchema = createServiceSchema(
    'AI Обучения за екипи',
    'Практически AI обучения за software екипи: AI одит, vibe coding, agentic workflows и workflow автоматизация. Резултат: 30–50% по-бърза работа.',
    '/education'
);

const Education = () => {
    const ref = useScrollReveal();
    return (
        <div ref={ref}>
            <SEOHead
                title="AI Обучения за Екипи | Adaptica AI България"
                description="Практически AI обучения: AI одит, vibe coding, agentic workflows. Екипът ви ще работи 30–50% по-бързо. Безплатна консултация."
                path="/education"
                jsonLd={[eduServiceSchema, createFAQSchema(eduFaqs)]}
            />

            {/* GEO: AI-extractable summary */}
            <section aria-label="Кратко обобщение" className="geo-summary" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                <h2>Кратко обобщение: AI обучения от Adaptica AI</h2>
                <p>Adaptica AI провежда практически AI обучения за software екипи в България. 4 модула: AI одит и диагностика, vibe coding и AI-assisted development, agentic workflows и workflow автоматизация. Резултат: екипът работи 30–50% по-бързо без допълнителни хора.</p>
            </section>
            <section className="page-hero page-hero-dark">
                <div className="bg-glow-accent bg-glow-secondary" style={{ width: 350, height: 350, top: '0%', left: '30%', position: 'absolute' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <p className="section-label fade-in" style={{ justifyContent: 'center' }}>За Software Екипи</p>
                    <h1 className="fade-in">AI Обучения за Екипи — Научете екипа си да работи с AI</h1>
                    <p className="subtitle fade-in">AI одит, vibe coding, agentic workflows и модерни IDE-та. Екипът ви ще работи <strong>30–50% по-бързо</strong>.</p>
                </div>
            </section>

            {/* Process */}
            <section className="edu-process section-padding">
                <div className="container">
                    <div className="section-header centered fade-in">
                        <p className="section-label" style={{ justifyContent: 'center' }}>Как Работим</p>
                        <h2>Как работи AI обучението на Adaptica?</h2>
                        <p>Не провеждаме общи лекции. Всяко обучение започва с диагностика на вашия екип.</p>
                    </div>
                    <div className="edu-process-grid">
                        {process.map((p, i) => (
                            <div key={i} className="neo-card edu-process-card fade-in">
                                <div className="scanline" />
                                <span className="edu-step-num">{p.step}</span>
                                <div className="edu-process-icon">{p.icon}</div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="edu-curriculum section-padding section-dark">
                <div className="container">
                    <div className="section-header centered fade-in">
                        <p className="section-label" style={{ justifyContent: 'center' }}>Програма</p>
                        <h2>Какво покрива AI обучението?</h2>
                        <p>Четири модула, изцяло ориентирани към software екипи и реална продуктивност.</p>
                    </div>
                    <div className="curriculum-grid">
                        {curriculum.map((c, i) => (
                            <div key={i} className="dark-card curriculum-card fade-in">
                                <span className="curriculum-day">{c.module}</span>
                                <h3>{c.title}</h3>
                                <ul className="curriculum-topics">
                                    {c.topics.map((t, j) => (
                                        <li key={j}>{t}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools */}
            <section className="edu-tools section-padding">
                <div className="container">
                    <div className="section-header centered fade-in">
                        <p className="section-label" style={{ justifyContent: 'center' }}>Инструменти</p>
                        <h2>Работим с Най-Добрите AI Инструменти</h2>
                        <p>Вашият екип ще излезе с практически умения в реалните инструменти, използвани от водещи tech компании.</p>
                    </div>
                    <div className="edu-tools-grid">
                        {tools.map((t, i) => (
                            <div key={i} className="neo-card edu-tool-card fade-in">
                                <div className="scanline" />
                                <h4>{t.name}</h4>
                                <p>{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes */}
            <section className="edu-outcomes section-padding section-dark">
                <div className="container edu-outcomes-grid">
                    <div className="fade-in">
                        <p className="section-label">Резултати</p>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1.5rem' }}>
                            Какво печели вашият екип
                        </h2>
                        <p style={{ color: 'var(--muted-dark)', lineHeight: '1.8', marginBottom: '2rem' }}>
                            Обученията ни са проектирани да дадат измерим резултат. Не просто "запознанство с AI" — а реална промяна в начина на работа.
                        </p>
                    </div>
                    <div className="fade-in">
                        <ul className="check-list">
                            {outcomes.map((o, i) => (
                                <li key={i}>{o}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Formats */}
            <section className="edu-formats section-padding">
                <div className="container">
                    <div className="section-header centered fade-in">
                        <p className="section-label" style={{ justifyContent: 'center' }}>Формати</p>
                        <h2>Изберете Как да Работим</h2>
                    </div>
                    <div className="formats-grid">
                        {formats.map((f, i) => (
                            <div key={i} className="neo-card format-card fade-in">
                                <div className="scanline" />
                                {f.badge && <span className="format-badge">{f.badge}</span>}
                                <div className="format-icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="edu-faq section-padding">
                <div className="container">
                    <div className="section-header centered fade-in">
                        <p className="section-label" style={{ justifyContent: 'center' }}>Въпроси</p>
                        <h2>Често задавани въпроси за AI обучения</h2>
                    </div>
                    <FaqAccordion faqs={eduFaqs} />
                </div>
            </section>
        </div>
    );
};

export default Education;
