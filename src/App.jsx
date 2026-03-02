import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Transformation = lazy(() => import('./pages/Transformation'));
const AICrm = lazy(() => import('./pages/AICrm'));
const Agents = lazy(() => import('./pages/Agents'));
const Automation = lazy(() => import('./pages/Automation'));
const Education = lazy(() => import('./pages/Education'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Book = lazy(() => import('./pages/Book'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">Към съдържанието</a>
      <div className="app-container">
        <Navbar />
        <main id="main-content">
          <Suspense fallback={<div className="page-loader"><div className="loader-spinner" /></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/transformation" element={<Transformation />} />
              <Route path="/aicrm" element={<AICrm />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/automation" element={<Automation />} />
              <Route path="/education" element={<Education />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/book" element={<Book />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
