import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();

    const getPageTitle = () => {
        const path = location.pathname;
        if (path === '/') return '';
        if (path === '/about') return 'O nás';
        if (path === '/newsletter') return 'Newsletter';
        if (path === '/blog') return 'Blog';
        if (path.startsWith('/blog/')) return 'Blog';
        if (path === '/contact') return 'Kontakt';
        return '';
    };

    const pageTitle = getPageTitle();

    return (
        <div className="min-h-screen flex flex-col bg-white text-black overflow-hidden">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="text-2xl font-bold tracking-tighter mr-6">
                            <Link to="/">h<span className="text-secondary font-extrabold">AI</span>ters<span className="text-secondary">.cz</span></Link>
                        </div>
                        {pageTitle && (
                            <div className="hidden md:block text-xl font-medium text-gray-400 border-l border-gray-300 pl-6">
                                {pageTitle}
                            </div>
                        )}
                    </div>
                    <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
                        <Link to="/about" className={`hover:text-black transition-colors ${location.pathname === '/about' ? 'text-black' : ''}`}>O nás</Link>
                        <Link to="/newsletter" className={`hover:text-black transition-colors ${location.pathname === '/newsletter' ? 'text-black' : ''}`}>Newsletter</Link>
                        <Link to="/blog" className={`hover:text-black transition-colors ${location.pathname.startsWith('/blog') ? 'text-black' : ''}`}>Blog</Link>
                        <Link to="/contact" className={`hover:text-black transition-colors ${location.pathname === '/contact' ? 'text-black' : ''}`}>Kontakt</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-grow pt-20">
                {children}
            </main>

            <footer className="border-t border-gray-100 py-8 mt-20">
                <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} haiters.cz. Všechna práva vyhrazena.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
