'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import SectionTitle from '@/components/SectionTitle';
import { Camera, Image as ImageIcon, ArrowLeft } from 'lucide-react';

interface ClickItem {
    id: number;
    title: string;
    description: string;
    image_url: string;
    aspect_ratio?: string;
}

export default function ClicksPage() {
    const [clicks, setClicks] = useState<ClickItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClicks = async () => {
            try {
                const { data, error } = await supabase
                    .from('clicks')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) {
                    console.error('Error fetching clicks:', error);
                } else if (data) {
                    setClicks(data);
                }
            } catch (err) {
                console.error('Unexpected error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchClicks();
    }, []);

    // Helper to map aspect ratio strings to Tailwind classes
    const getAspectClass = (ratio?: string) => {
        switch (ratio) {
            case 'portrait':
                return 'aspect-[3/4]';
            case 'landscape':
                return 'aspect-[4/3]';
            case 'video':
                return 'aspect-video';
            case 'square':
            default:
                return 'aspect-square';
        }
    };

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

            <div className="mb-16">
                <SectionTitle title="MY CLICKS" />
                <p className="text-muted-foreground mt-4 max-w-xl text-lg">
                    Capturing moments, light, and geometry. A collection of my favorite street photography, landscapes, and snapshots.
                </p>
            </div>

            {loading ? (
                /* Skeleton Loader */
                <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className={`w-full bg-white/[0.02] border border-white/5 rounded-2xl animate-pulse ${
                                i % 2 === 0 ? 'h-80' : 'h-60'
                            }`}
                        ></div>
                    ))}
                </div>
            ) : clicks.length > 0 ? (
                /* Masonry-style column layout */
                <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
                    {clicks.map((item) => (
                        <div
                            key={item.id}
                            className="break-inside-avoid group relative w-full overflow-hidden rounded-2xl bg-background-light border border-white/5 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
                        >
                            {/* Image container with fixed aspect ratio option */}
                            <div className={`relative w-full overflow-hidden ${getAspectClass(item.aspect_ratio)}`}>
                                <img
                                    src={item.image_url}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                                            <Camera size={16} className="text-primary" />
                                            {item.title}
                                        </h3>
                                        {item.description && (
                                            <p className="text-xs text-zinc-300 line-clamp-2">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Empty state */
                <div className="text-center py-24 border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4">
                    <ImageIcon size={48} className="text-muted-foreground animate-bounce" />
                    <p className="text-muted-foreground text-lg">No clicks published yet.</p>
                    <p className="text-xs text-muted-foreground/60 max-w-sm">
                        Upload some images to your Supabase `clicks-images` storage bucket and add records to your `clicks` table!
                    </p>
                </div>
            )}
        </section>
    );
}
