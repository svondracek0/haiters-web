import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="mission" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    Rozumné využití <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    Platforma pro profesionály v kreativních odvětvích k diskuzi, definování a ovládnutí integrace umělé inteligence do každodenní práce.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a
                        href="#sectors"
                        className="inline-block bg-white text-dark px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                    >
                        Prozkoumat sektory
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
