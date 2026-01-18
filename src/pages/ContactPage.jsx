import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
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
            // Send Email via EmailJS
            const SERVICE_ID = 'haiters_email_service';
            const TEMPLATE_ID = 'haiters_email_template';
            const PUBLIC_KEY = 'GUcQ6cAp-svs9OglB';

            // Only attempt to send email if keys are not placeholders
            if (SERVICE_ID !== 'YOUR_SERVICE_ID') {
                await emailjs.send(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        message: formData.message,
                    },
                    PUBLIC_KEY
                );
            } else {
                console.warn('EmailJS keys are missing. Email was not sent.');
            }

            console.log('Message submission success:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 5000);
        } catch (error) {
            console.error('Error submitting message:', error);
            if (error.text) {
                console.error('EmailJS Error:', error.text);
            }
            setStatus('error');
            // Reset error state after 5 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 5000);
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto">

                    <div className="bg-white">
                        <p className="text-gray-600 mb-8 text-center">
                            Máte dotaz, nápad na spolupráci nebo nám chcete jen něco vzkázat?
                            Vyplňte formulář níže a my se vám ozveme.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Jméno</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Vaše jméno"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-black text-black placeholder-gray-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Váš e-mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-black text-black placeholder-gray-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Zpráva</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Vaše zpráva..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-black text-black placeholder-gray-500 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full px-8 py-4 bg-black hover:bg-gray-800 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                            >
                                {status === 'loading' ? 'Odesílám...' : 'Odeslat zprávu'}
                            </button>

                            {status === 'success' && (
                                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center">
                                    Děkujeme za vaši zprávu! Brzy se vám ozveme.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="p-4 bg-red-50 text-red-700 rounded-lg text-center">
                                    Něco se pokazilo. Zkuste to prosím znovu nebo nám napište přímo na email.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
