import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { blogPosts } from '../data/blogPosts';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import './Blog.css';
import SEOHead from '../components/SEOHead';

const Blog = () => {
    const ref = useScrollReveal();
    const [activeCategory, setActiveCategory] = useState('Всички');

    const categories = ['Всички', ...new Set(blogPosts.map(p => p.category))];
    const filtered = activeCategory === 'Всички' ? blogPosts : blogPosts.filter(p => p.category === activeCategory);
    const featured = blogPosts.filter(p => p.featured);

    return (
        <div ref={ref}>
            <SEOHead
                title="AI Блог — Статии и Ръководства за Бизнес | Adaptica AI"
                description="AI блог на Adaptica AI: статии, анализи и практически ръководства за AI трансформация, автоматизация и AI агенти за бизнес."
                path="/blog"
                jsonLd={[]}
            />
            {/* Hero */}
            <section className="blog-hero" style={{ background: '#e8eaef' }}>
                <div className="container">
                    <div className="blog-hero-frame fade-in">
                        <div className="blog-hero-frame-inner">
                            <p className="section-label" style={{ justifyContent: 'center' }}>Блог</p>
                            <h1>AI Блог — Статии и Ръководства за Бизнес</h1>
                            <p className="subtitle">Статии, анализи и практически ръководства за AI трансформация.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            {featured.length > 0 && (
                <section className="blog-featured section-padding section-dark">
                    <div className="container">
                        <div className="section-header fade-in">
                            <p className="section-label">Избрани Статии</p>
                        </div>
                        <div className="featured-grid">
                            {featured.map((post, i) => (
                                <Link to={`/blog/${post.slug}`} key={post.slug} className={`featured-card fade-in ${i === 0 ? 'featured-main' : ''}`}>
                                    <div className="featured-card-inner">
                                        <span className="blog-tag">{post.category}</span>
                                        <h2>{post.title}</h2>
                                        <p>{post.excerpt}</p>
                                        <div className="featured-meta">
                                            <span><Calendar size={14} /> {post.date}</span>
                                            <span><Clock size={14} /> {post.readTime}</span>
                                        </div>
                                        <span className="featured-read">
                                            Прочети <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Category Filter + All Posts */}
            <section className="blog-listing section-padding">
                <div className="container">
                    <div className="section-header centered fade-in">
                        <h2>Всички Статии</h2>
                    </div>

                    <div className="blog-filters fade-in">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="blog-grid">
                        {filtered.map(post => (
                            <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card neo-card fade-in">
                                <div className="blog-card-top">
                                    <span className="blog-tag">{post.category}</span>
                                    <span className="blog-read-time"><Clock size={13} /> {post.readTime}</span>
                                </div>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <div className="blog-card-bottom">
                                    <span className="blog-date">{post.date}</span>
                                    <span className="blog-arrow"><ArrowRight size={16} /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
