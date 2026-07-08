'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog';
import SectionTitle from '@/components/SectionTitle';
import { Calendar, Clock, ArrowRight, Tag, ArrowLeft } from 'lucide-react';

export default function BlogListingPage() {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Get all unique tags
    const allTags = Array.from(
        new Set(BLOG_POSTS.flatMap((post) => post.tags))
    );

    // Filter posts based on selected tag
    const filteredPosts = selectedTag
        ? BLOG_POSTS.filter((post) => post.tags.includes(selectedTag))
        : BLOG_POSTS;

    return (
        <section className="min-h-screen py-32 px-5 md:px-10 max-w-6xl mx-auto">
            {/* Back Navigation */}
            <div className="mb-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>

            <div className="mb-12">
                <SectionTitle title="MY WRITINGS" />
                <p className="text-muted-foreground mt-4 max-w-xl text-lg">
                    Thoughts, guides, and insights on software engineering, clean code, .NET, Angular, AI, and modern web development.
                </p>
            </div>

            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2.5 mb-12 items-center">
                <span className="text-muted-foreground text-sm flex items-center gap-1.5 mr-2">
                    <Tag size={14} /> Filter by tag:
                </span>
                <button
                    onClick={() => setSelectedTag(null)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                        selectedTag === null
                            ? 'bg-white text-black border-white'
                            : 'bg-transparent text-muted-foreground border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                >
                    All
                </button>
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                            selectedTag === tag
                                ? 'bg-primary text-black border-primary'
                                : 'bg-transparent text-muted-foreground border-white/10 hover:border-white/30 hover:text-white'
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                    <article
                        key={post.slug}
                        className="group flex flex-col justify-between bg-background-light border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                    >
                        <div>
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] uppercase font-bold tracking-wider text-primary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                                <Link href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>

                            {/* Description */}
                            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
                                {post.description}
                            </p>
                        </div>

                        {/* Metadata & Footer */}
                        <div className="border-t border-white/5 pt-4 mt-auto flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                    <Calendar size={12} />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock size={12} />
                                    {post.readTime}
                                </span>
                            </div>

                            <Link
                                href={`/blog/${post.slug}`}
                                className="flex items-center gap-1 font-bold text-white group-hover:text-primary transition-colors duration-300"
                            >
                                Read <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
                    <p className="text-muted-foreground">No posts found with this tag.</p>
                </div>
            )}
        </section>
    );
}
