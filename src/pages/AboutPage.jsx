import React from 'react';
import profileImage from '../assets/profile_sv.jpg';

const AboutPage = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">

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
                                    Jsem ML Engineer a lektor, který AI modely nasazuje do procesů ve firmách a také je sám využívá v každodenním životě.
                                    Přesto vnímám, že AI nástroje vedle zvýšení produktivity přinášejí i možnost mimořádně levného, leč nekvalitního výstupu.
                                    Tyto výstupy se velmi snadno dostávají do veřejného prostoru, kde působí celkovou degradaci estetiky, funkčnosti, spolehlivosti a bezpečnosti.
                                    Platformu haiters jsem založil s úmyslem pragmaticky a bez emocí zdůrazňovat možné negativní dopady využívání AI, a zvýšit tak důslednost a obezřetnost při jejím používání.
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
