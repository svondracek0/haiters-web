import React, { useState, useEffect } from 'react';
import { ExternalLink, Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // TODO: Replace with your actual Substack URL
    const SUBSTACK_URL = 'https://haiters.substack.com';
    const RSS_TO_JSON_API = `https://api.rss2json.com/v1/api.json?rss_url=${SUBSTACK_URL}/feed`;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(RSS_TO_JSON_API);
                const data = await response.json();

                if (data.status === 'ok') {
                    setPosts(data.items);
                } else {
                    throw new Error('Failed to fetch blog posts');
                }
            } catch (err) {
                setError(err.message);
                // Fallback data for demonstration if the feed fails or doesn't exist yet
                setPosts([
                    {
                        title: "Welcome to Haiters",
                        pubDate: new Date().toISOString(),
                        author: "Haiters Team",
                        thumbnail: "https://images.unsplash.com/photo-1499750310159-5b600aaf0378?q=80&w=2069&auto=format&fit=crop",
                        description: "This is a placeholder post while we set up our Substack connection. Stay tuned for updates on AI in creative industries.",
                        link: "#"
                    },
                    {
                        title: "Why AI Matters in Education",
                        pubDate: new Date(Date.now() - 86400000 * 2).toISOString(),
                        author: "Haiters Team",
                        thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
                        description: "Exploring the impact of artificial intelligence on modern education systems and how teachers can adapt.",
                        link: "#"
                    },
                    {
                        title: "The Future of Creative Writing",
                        pubDate: new Date(Date.now() - 86400000 * 5).toISOString(),
                        author: "Haiters Team",
                        thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop",
                        description: "Will AI replace writers? We discuss the symbiotic relationship between human creativity and machine assistance.",
                        link: "#"
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('cs-CZ', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Helper to strip HTML tags from description for preview
    const stripHtml = (html) => {
        const tmp = document.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Myšlenky, postřehy a novinky ze světa AI a kreativního průmyslu.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, index) => (
                            <article
                                key={index}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100"
                            >
                                {post.thumbnail && (
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={post.thumbnail}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                )}

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {formatDate(post.pubDate)}
                                        </div>
                                        <div className="flex items-center">
                                            <User className="w-4 h-4 mr-1" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                        <a href={post.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
                                            {post.title}
                                        </a>
                                    </h2>

                                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                                        {stripHtml(post.description)}
                                    </p>

                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors mt-auto"
                                    >
                                        Číst dále <ArrowRight className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {!loading && posts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">Zatím zde nejsou žádné příspěvky.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
