import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="min-h-screen flex flex-col bg-dark text-light overflow-hidden">
            <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold tracking-tighter"
                    >
                        <Link to="/">haiters<span className="text-primary">.cz</span></Link>
                    </motion.div>
                    <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
                        {isHome ? (
                            <>
                                <a href="#mission" className="hover:text-white transition-colors">Mise</a>
                                <a href="#sectors" className="hover:text-white transition-colors">Sektory</a>
                            </>
                        ) : (
                            <Link to="/" className="hover:text-white transition-colors">Domů</Link>
                        )}
                        <Link to="/contact" className="hover:text-white transition-colors">Kontakt</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-grow pt-20">
                {children}
            </main>

            <footer className="border-t border-white/10 py-8 mt-20">
                <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} haiters.cz. Všechna práva vyhrazena.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
