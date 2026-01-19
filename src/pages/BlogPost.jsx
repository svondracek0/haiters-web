import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import Markdown from 'react-markdown';
import { getBlogPosts } from '../utils/posts';
import { formatDate, calculateReadingTime } from '../utils/blogUtils';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const posts = await getBlogPosts();
                const foundPost = posts.find(p => p.slug === slug);
                setPost(foundPost);
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Příspěvek nenalezen</h1>
                <Link to="/blog" className="text-beige hover:text-secondary flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Zpět na blog
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">


                    <div className="p-8 sm:p-12">
                        <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-beige mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Zpět na blog
                        </Link>

                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8 gap-4 sm:gap-8 border-b border-gray-100 pb-8">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {formatDate(post.date)}
                            </div>
                            <div className="flex items-center">
                                <User className="w-4 h-4 mr-2" />
                                {post.author}
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                {calculateReadingTime(post.content)}
                            </div>
                        </div>

                        <div className="prose prose-lg prose-indigo max-w-none prose-img:my-16 prose-img:rounded-xl prose-img:shadow-md prose-p:leading-loose prose-p:mb-8 prose-headings:mb-6 prose-headings:mt-12 prose-li:leading-relaxed">
                            <Markdown>{post.content}</Markdown>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogPost;
