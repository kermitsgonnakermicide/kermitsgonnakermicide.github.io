import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import BlogPage from './pages/BlogPage';
import ProjectPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <h1>My Portfolio</h1>
                    <div>
                        <Link to="/">Intro</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<IntroPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/projects" element={<ProjectPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <footer>
                    Made with ❤️ by [Your Name]. Check out my{' '}
                    <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                        GitHub
                    </a>.
                </footer>
            </div>
        </Router>
    );
}

export default App;
