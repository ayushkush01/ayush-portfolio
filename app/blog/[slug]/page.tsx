import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog';
import { Metadata } from 'next';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export const generateStaticParams = async () => {
    return BLOG_POSTS.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    return {
        title: post ? `${post.title} - Ayush Kushwaha` : 'Blog Post',
        description: post?.description,
    } as Metadata;
};

const BlogDetailsPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        return notFound();
    }

    return (
        <article className="min-h-screen py-32 px-5 md:px-10 max-w-3xl mx-auto">
            {/* Back Navigation */}
            <div className="mb-10">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to all writings
                </Link>
            </div>

            {/* Header */}
            <header className="mb-12">
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold uppercase tracking-wider text-primary"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                    {post.title}
                </h1>

                {/* Metadata */}
                <div className="flex items-center gap-6 text-sm text-muted-foreground border-y border-white/5 py-4">
                    <span className="flex items-center gap-1.5">
                        <Calendar size={16} />
                        {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock size={16} />
                        {post.readTime}
                    </span>
                </div>
            </header>

            {/* Content Body */}
            <div 
                className="blog-content max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
};

export default BlogDetailsPage;
