import React from 'react';
import profileImage from '../assets/profile_sv.jpg';

const AboutPage = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-12 text-black text-center">O nás</h1>

                    <div className="grid grid-cols-1 gap-12">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-48 flex-shrink-0 flex justify-center">
                                <img
                                    src={profileImage}
                                    alt="Štěpán Vondráček"
                                    className="w-48 h-auto object-cover rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2 text-black">Štěpán Vondráček</h2>
                                <p className="text-secondary font-medium mb-4">Zakladatel & Tvůrce</p>
                                <p className="text-gray-600 leading-relaxed">
                                    Jsem ML Engineer a lektor, který nejenže AI modely nasazuje do produkčních procesů ve firmách, ale také je sám využívá v každodenním životě.
                                    Přesto vnímám, že AI nástroje vedle zvýšení produktivity přinášejí i značné množství nekvalitních výstupů, které se velmi snadno dostávají do veřejného prostoru,
                                    kde působí celkovou degradaci estetiky, funkčnosti, spolehlivosti a bezpečnosti
                                    Platformu hAIters jsem založil s úmyslem pragmaticky a bez emocí zdůrazňovat negativní dopady využívání AI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
