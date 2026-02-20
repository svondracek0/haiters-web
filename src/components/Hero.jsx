import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="mission" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-white">
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-black">
                    Jsme h<span className="text-secondary">AI</span>ters
                </h1>
                <p className="text-xl md:text-2xl text-black max-w-6xl mx-auto mb-10 leading-relaxed">
                    Zajímá nás kvalita výstupů práce s AI která se dostává do veřejného prostoru.<br />
                    Chceme, aby se lidská tvořivost, empatie a vědomí neutopily pod nánosy nekvalitního AI obsahu.<br />
                    Nabízíme střízlivý pohled opojeným.<br />
                    Když už h<span className="text-secondary">AI</span>tíme... nechybí fakta.
                </p>

            </div>
        </section>
    );
};

export default Hero;
