import React, { useState } from 'react';

const Newsletter = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // TODO: Implement newsletter subscription logic (e.g., EmailJS or other service)
            console.log('Newsletter submission (mock):', formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            setStatus('success');
            setFormData({ name: '', email: '' });

            // Reset success message after 3 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 3000);
        } catch (error) {
            console.error('Error submitting newsletter:', error);
            setStatus('error');
            // Reset error state after 3 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 3000);
        }
    };

    return (
        <section id="newsletter" className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-gray-600 mb-8">
                        Přihlaste se k odběru našeho newsletteru a získejte nejnovější informace o našich projektech a investičních příležitostech.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Vaše jméno"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-black text-black placeholder-gray-500 transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Váš e-mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-black text-black placeholder-gray-500 transition-colors"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full px-8 py-3 bg-black hover:bg-gray-800 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? 'Odesílám...' : 'Přihlásit se k odběru'}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-600 text-sm mt-2">
                                Děkujeme za přihlášení!
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-600 text-sm mt-2">
                                Něco se pokazilo. Zkuste to prosím znovu.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
