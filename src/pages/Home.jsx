import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import { getBlogPosts } from '../utils/posts';
import { formatDate, calculateReadingTime } from '../utils/blogUtils';

const Home = () => {
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await getBlogPosts();
                setLatestPosts(posts.slice(0, 3));
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <Hero />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nejnovější z blogu</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Přečtěte si naše nejnovější články a postřehy.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                        {latestPosts.map((post) => (
                            <article
                                key={post.slug}
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
                                            {formatDate(post.date)}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {calculateReadingTime(post.content)}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                        <Link to={`/blog/${post.slug}`} className="hover:text-beige transition-colors">
                                            {post.title}
                                        </Link>
                                    </h3>

                                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <User className="w-4 h-4 mr-1" />
                                            {post.author}
                                        </div>
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="inline-flex items-center text-beige font-medium hover:text-secondary transition-colors"
                                        >
                                            Číst dále <ArrowRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/blog"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-beige hover:bg-secondary transition-colors"
                        >
                            Všechny články
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
