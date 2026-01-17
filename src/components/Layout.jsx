import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white text-black overflow-hidden">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold tracking-tighter">
                        <Link to="/">h<span className="text-secondary font-extrabold">AI</span>ters<span className="text-secondary">.cz</span></Link>
                    </div>
                    <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
                        <Link to="/about" className="hover:text-black transition-colors">O nás</Link>
                        <Link to="/newsletter" className="hover:text-black transition-colors">Newsletter</Link>
                        <Link to="/blog" className="hover:text-black transition-colors">Blog</Link>
                        <Link to="/contact" className="hover:text-black transition-colors">Kontakt</Link>
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
