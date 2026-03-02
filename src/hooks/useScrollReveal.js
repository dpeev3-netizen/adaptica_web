import { useEffect, useRef } from 'react';

export function useScrollReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
        );
        const el = ref.current;
        if (el) {
            const children = el.querySelectorAll('.fade-in');
            children.forEach((child, i) => {
                // Auto-stagger if no explicit delay class
                if (!child.className.match(/delay-\d/)) {
                    child.style.transitionDelay = `${i * 0.07}s`;
                }
                observer.observe(child);
            });
            return () => children.forEach((child) => observer.unobserve(child));
        }
    }, []);
    return ref;
}
