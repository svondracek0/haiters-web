import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

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

    const navLinks = [
        { path: '/about', label: 'O nás' },
        { path: '/newsletter', label: 'Newsletter' },
        { path: '/blog', label: 'Blog' },
        { path: '/contact', label: 'Kontakt' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white text-black overflow-hidden">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="text-2xl font-bold tracking-tighter mr-6">
                            <Link to="/" onClick={closeMenu}>h<span className="text-secondary font-extrabold">AI</span>ters<span className="text-secondary">.cz</span></Link>
                        </div>
                        {pageTitle && (
                            <div className="hidden md:block text-xl font-medium text-gray-400 border-l border-gray-300 pl-6">
                                {pageTitle}
                            </div>
                        )}
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`hover:text-black transition-colors ${location.pathname.startsWith(link.path) ? 'text-black' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={closeMenu}
                                className={`text-lg font-medium hover:text-secondary transition-colors ${location.pathname.startsWith(link.path) ? 'text-black' : 'text-gray-600'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
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
