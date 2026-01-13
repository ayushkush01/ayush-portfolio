'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom 80%',
                    toggleActions: 'play none none reverse',
                },
            });

            gsap.utils.toArray('.timeline-item').forEach((item: any, i) => {
                tl.from(item, {
                    opacity: 0,
                    x: i % 2 === 0 ? -50 : 50,
                    duration: 0.8,
                    ease: 'power3.out'
                }, "-=0.6");
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section relative" id="my-experience">
            <div className="container relative" ref={containerRef}>
                <SectionTitle title="My Experience" />

                <div className="relative mt-20 max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 to-transparent -translate-x-1/2"></div>

                    <div className="space-y-16">
                        {MY_EXPERIENCE.map((item, idx) => (
                            <div
                                key={item.title}
                                className={cn(
                                    "timeline-item relative flex flex-col md:flex-row gap-8 md:gap-0",
                                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                                )}
                            >
                                {/* Dot on the line */}
                                <div className="absolute left-[20px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-background border-4 border-primary -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(34,197,94,0.5)]"></div>

                                <div className="md:w-1/2 pl-16 md:pl-0"></div> {/* Spacer */}

                                <div className={cn(
                                    "md:w-1/2 pl-12 md:px-12",
                                    idx % 2 === 0 ? "text-left" : "md:text-right"
                                )}>
                                    <div className="p-6 rounded-2xl bg-muted/20 border border-white/5 backdrop-blur-sm group hover:border-primary/30 transition-colors">
                                        <p className="text-sm font-mono text-primary mb-2">
                                            {item.duration}
                                        </p>
                                        <h3 className="text-2xl md:text-3xl font-anton text-foreground mb-1 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg text-muted-foreground">
                                            {item.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
