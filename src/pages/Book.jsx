import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronLeft, ChevronRight, Clock, CalendarDays, User, Mail, Phone, Building2, MessageSquare, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import './Book.css';

const WEBHOOK_URL = 'https://hook.eu2.make.com/w5nb3sqed1v8fxt558zl553uwe3n4h16';

const DAYS_BG = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
const MONTHS_BG = [
    'Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни',
    'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'
];

const TIME_SLOTS = [
    '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00',
];

const STEPS = [
    { num: 1, label: 'Дата' },
    { num: 2, label: 'Час' },
    { num: 3, label: 'Данни' },
];

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Mon=0
}

function isSameDay(d1, d2) {
    return d1 && d2 && d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

function formatDate(date) {
    if (!date) return '';
    return `${date.getDate()} ${MONTHS_BG[date.getMonth()]} ${date.getFullYear()}`;
}

const Book = () => {
    const ref = useScrollReveal();
    const today = useMemo(() => {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    }, []);

    const [step, setStep] = useState(1);
    const [viewYear, setViewYear] = useState(today.getFullYear());
    const [viewMonth, setViewMonth] = useState(today.getMonth());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState('');

    // Calendar helpers
    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

    const prevMonth = () => {
        if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
        else setViewMonth(m => m - 1);
    };
    const nextMonth = () => {
        if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
        else setViewMonth(m => m + 1);
    };

    const canGoPrev = viewYear > today.getFullYear() || (viewYear === today.getFullYear() && viewMonth > today.getMonth());

    const handleDateSelect = (day) => {
        const d = new Date(viewYear, viewMonth, day);
        d.setHours(0, 0, 0, 0);
        const dow = d.getDay();
        if (dow === 0 || dow === 6) return; // weekend
        if (d < today) return; // past
        setSelectedDate(d);
        setStep(2);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setStep(3);
    };

    const handleInputChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    };

    const validateForm = () => {
        const errs = {};
        if (!formData.name.trim()) errs.name = 'Моля, въведете име';
        if (!formData.email.trim()) errs.email = 'Моля, въведете имейл';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Невалиден имейл';
        if (!formData.phone.trim()) errs.phone = 'Моля, въведете телефон';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);
        setSubmitError('');

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'booking',
                    date: selectedDate ? `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}` : '',
                    time: selectedTime,
                    ...formData,
                    submittedAt: new Date().toISOString(),
                }),
            });

            if (!response.ok) throw new Error('Webhook request failed');
            setSubmitted(true);
        } catch (err) {
            console.error('Booking submission failed:', err);
            setSubmitError('Възникна грешка при запазването. Моля, опитайте отново.');
        } finally {
            setLoading(false);
        }
    };

    // Build calendar grid
    const calendarCells = [];
    for (let i = 0; i < firstDay; i++) calendarCells.push(null);
    for (let d = 1; d <= daysInMonth; d++) calendarCells.push(d);

    if (submitted) {
        return (
            <div ref={ref}>
                <section className="book-page section-padding">
                    <div className="container">
                        <div className="book-success book-step-enter">
                            <div className="book-success-icon">
                                <CheckCircle size={64} strokeWidth={1.5} />
                            </div>
                            <h2>Консултацията е запазена!</h2>
                            <p className="book-success-details">
                                <strong>{formatDate(selectedDate)}</strong> в <strong>{selectedTime}</strong>
                            </p>
                            <p className="book-success-sub">Ще се свържем с Вас за потвърждение на имейл <strong>{formData.email}</strong></p>
                            <Link to="/" className="btn-primary" style={{ marginTop: '2rem' }}>Към Началната Страница</Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div ref={ref}>
            <section className="book-page">
                <div className="container">
                    {/* Step Indicator */}
                    <div className="book-steps fade-in">
                        {STEPS.map((s, i) => (
                            <React.Fragment key={s.num}>
                                <button
                                    className={`book-step ${step >= s.num ? 'active' : ''} ${step === s.num ? 'current' : ''}`}
                                    onClick={() => { if (s.num < step) setStep(s.num); }}
                                    disabled={s.num > step}
                                >
                                    <span className="book-step-num">{s.num}</span>
                                    <span className="book-step-label">{s.label}</span>
                                </button>
                                {i < STEPS.length - 1 && <div className={`book-step-line ${step > s.num ? 'filled' : ''}`} />}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="book-content">
                        {/* STEP 1: DATE */}
                        {step === 1 && (
                            <div className="book-step-content book-step-enter">
                                <div className="book-step-header">
                                    <CalendarDays size={24} strokeWidth={1.5} />
                                    <div>
                                        <h2>Изберете Дата</h2>
                                        <p>Изберете удобен ден за вашата безплатна консултация.</p>
                                    </div>
                                </div>

                                <div className="book-calendar">
                                    <div className="cal-header">
                                        <button className="cal-nav" onClick={prevMonth} disabled={!canGoPrev}>
                                            <ChevronLeft size={20} />
                                        </button>
                                        <span className="cal-title">{MONTHS_BG[viewMonth]} {viewYear}</span>
                                        <button className="cal-nav" onClick={nextMonth}>
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>

                                    <div className="cal-grid">
                                        {DAYS_BG.map(d => (
                                            <div key={d} className="cal-day-name">{d}</div>
                                        ))}
                                        {calendarCells.map((day, i) => {
                                            if (day === null) return <div key={`e-${i}`} className="cal-cell empty" />;
                                            const date = new Date(viewYear, viewMonth, day);
                                            date.setHours(0, 0, 0, 0);
                                            const dow = date.getDay();
                                            const isWeekend = dow === 0 || dow === 6;
                                            const isPast = date < today;
                                            const isToday = isSameDay(date, today);
                                            const isSelected = isSameDay(date, selectedDate);
                                            const disabled = isWeekend || isPast;

                                            return (
                                                <button
                                                    key={`d-${day}`}
                                                    className={`cal-cell ${disabled ? 'disabled' : ''} ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${isWeekend ? 'weekend' : ''}`}
                                                    onClick={() => !disabled && handleDateSelect(day)}
                                                    disabled={disabled}
                                                >
                                                    {day}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="cal-legend">
                                        <span><span className="legend-dot today" /> Днес</span>
                                        <span><span className="legend-dot weekend" /> Уикенд</span>
                                        <span><span className="legend-dot selected" /> Избран</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 2: TIME */}
                        {step === 2 && (
                            <div className="book-step-content book-step-enter">
                                <div className="book-step-header">
                                    <Clock size={24} strokeWidth={1.5} />
                                    <div>
                                        <h2>Изберете Час</h2>
                                        <p>Свободни часове за <strong>{formatDate(selectedDate)}</strong></p>
                                    </div>
                                </div>

                                <div className="book-time-grid">
                                    {TIME_SLOTS.map(time => (
                                        <button
                                            key={time}
                                            className={`book-time-slot ${selectedTime === time ? 'selected' : ''}`}
                                            onClick={() => handleTimeSelect(time)}
                                        >
                                            <Clock size={14} />
                                            {time}
                                        </button>
                                    ))}
                                </div>

                                <button className="book-back" onClick={() => setStep(1)}>
                                    <ArrowLeft size={16} /> Обратно към Дата
                                </button>
                            </div>
                        )}

                        {/* STEP 3: DETAILS */}
                        {step === 3 && (
                            <div className="book-step-content book-step-enter">
                                <div className="book-step-header">
                                    <User size={24} strokeWidth={1.5} />
                                    <div>
                                        <h2>Вашите Данни</h2>
                                        <p>Попълнете информацията за да потвърдим консултацията.</p>
                                    </div>
                                </div>

                                <div className="book-summary-bar">
                                    <div className="book-summary-item">
                                        <CalendarDays size={16} />
                                        <span>{formatDate(selectedDate)}</span>
                                    </div>
                                    <div className="book-summary-item">
                                        <Clock size={16} />
                                        <span>{selectedTime}</span>
                                    </div>
                                </div>

                                <form className="book-form" onSubmit={handleSubmit}>
                                    <div className="book-form-row">
                                        <div className="book-field">
                                            <label><User size={14} /> Име *</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Иван Иванов" className={errors.name ? 'error' : ''} />
                                            {errors.name && <span className="book-error">{errors.name}</span>}
                                        </div>
                                        <div className="book-field">
                                            <label><Mail size={14} /> Имейл *</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="ivan@company.bg" className={errors.email ? 'error' : ''} />
                                            {errors.email && <span className="book-error">{errors.email}</span>}
                                        </div>
                                    </div>
                                    <div className="book-form-row">
                                        <div className="book-field">
                                            <label><Phone size={14} /> Телефон *</label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+359 8XX XXX XXX" className={errors.phone ? 'error' : ''} />
                                            {errors.phone && <span className="book-error">{errors.phone}</span>}
                                        </div>
                                        <div className="book-field">
                                            <label><Building2 size={14} /> Компания</label>
                                            <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Вашата компания" />
                                        </div>
                                    </div>
                                    <div className="book-field full">
                                        <label><MessageSquare size={14} /> Съобщение (по избор)</label>
                                        <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} placeholder="Опишете накратко какво бихте искали да обсъдим..." />
                                    </div>
                                    <div className="book-form-actions">
                                        <button type="button" className="book-back" onClick={() => setStep(2)}>
                                            <ArrowLeft size={16} /> Обратно
                                        </button>
                                        {submitError && <p style={{ color: '#e74c3c', fontSize: '0.9rem' }}>{submitError}</p>}
                                        <button type="submit" className="btn-primary" disabled={loading}>
                                            {loading ? 'Запазване...' : 'Запази Консултация'} {!loading && <ArrowRight size={16} />}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Book;
