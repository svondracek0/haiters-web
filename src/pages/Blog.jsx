import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { formatDate, calculateReadingTime } from '../utils/blogUtils';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Simulate fetching data
        setPosts(blogPosts);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
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

                                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    <Link to={`/blog/${post.slug}`} className="hover:text-beige transition-colors">
                                        {post.title}
                                    </Link>
                                </h2>

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

                {posts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">Zatím zde nejsou žádné příspěvky.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;

