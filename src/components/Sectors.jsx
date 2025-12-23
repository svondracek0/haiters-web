import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, PenTool, Palette } from 'lucide-react';

const sectors = [
    {
        id: 'education',
        title: 'Vzdělávání',
        icon: BookOpen,
        description: 'Redefinice metodiky výuky a akademické integrity v éře AI.',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10'
    },
    {
        id: 'programming',
        title: 'Programování',
        icon: Code,
        description: 'Využití AI asistentů pro psaní čistšího a efektivnějšího kódu při zachování architektonické kontroly.',
        color: 'text-green-400',
        bg: 'bg-green-400/10'
    },
    {
        id: 'copywriting',
        title: 'Copywriting',
        icon: PenTool,
        description: 'Vyvážení lidské kreativity s obsahem generovaným AI pro působivé vyprávění příběhů.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10'
    },
    {
        id: 'design',
        title: 'Design',
        icon: Palette,
        description: 'Objevování nových hranic vizuálního vyjádření bez ztráty lidského doteku.',
        color: 'text-pink-400',
        bg: 'bg-pink-400/10'
    }
];

const Sectors = () => {
    return (
        <section id="sectors" className="py-20 bg-dark/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Oblasti zájmu</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Zkoumáme dopad AI napříč čtyřmi klíčovými pilíři kreativní ekonomiky.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={sector.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group"
                        >
                            <div className={`w-12 h-12 rounded-lg ${sector.bg} ${sector.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <sector.icon size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{sector.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {sector.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sectors;
