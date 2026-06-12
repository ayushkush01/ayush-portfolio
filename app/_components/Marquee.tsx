'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Marquee = () => {
    const container = useRef<HTMLDivElement>(null);
    const textRef1 = useRef<HTMLDivElement>(null);
    const textRef2 = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (textRef1.current) {
                gsap.to(textRef1.current, {
                    xPercent: -50,
                    repeat: -1,
                    duration: 15,
                    ease: 'none',
                });
            }
            if (textRef2.current) {
                // start at -50% and go to 0% to scroll right seamlessly
                gsap.fromTo(
                    textRef2.current,
                    { xPercent: -50 },
                    {
                        xPercent: 0,
                        repeat: -1,
                        duration: 18, // slightly different speed for parallax feel
                        ease: 'none',
                    }
                );
            }
        },
        { scope: container }
    );

    // Reusable text blocks
    const generateText = (isPrimaryBg: boolean) => {
        return [...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-10 px-4 md:px-6">
                <span
                    className={`text-3xl md:text-5xl font-anton tracking-wider uppercase ${isPrimaryBg ? 'text-background' : 'text-transparent'}`}
                    style={!isPrimaryBg ? { WebkitTextStroke: '1.5px hsl(var(--primary))' } : {}}
                >
                    AVAILABLE FOR WORK
                </span>
                <span className={isPrimaryBg ? "text-background text-2xl md:text-3xl" : "text-primary text-2xl md:text-3xl"}>
                    ✦
                </span>
                <span className={`text-3xl md:text-5xl font-anton tracking-wider uppercase ${isPrimaryBg ? 'text-background' : 'text-foreground'}`}>
                    OPEN TO OPPORTUNITIES
                </span>
                <span className={isPrimaryBg ? "text-background text-2xl md:text-3xl" : "text-primary text-2xl md:text-3xl"}>
                    ✦
                </span>
                <span
                    className={`text-3xl md:text-5xl font-anton tracking-wider uppercase ${isPrimaryBg ? 'text-background' : 'text-transparent'}`}
                    style={!isPrimaryBg ? { WebkitTextStroke: '1.5px hsl(var(--foreground))' } : {}}
                >
                    FULL STACK DEV
                </span>
                <span className={isPrimaryBg ? "text-background text-2xl md:text-3xl" : "text-primary text-2xl md:text-3xl"}>
                    ✦
                </span>
            </div>
        ));
    };

    return (
        <section
            className="relative py-40 overflow-hidden my-20 flex items-center justify-center"
            ref={container}
        >
            {/* Background gradient masks for the edges to blend it smoothly into the background */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-[10] pointer-events-none"></div>

            {/* Strip 1: Primary background, solid black text, rotates slightly up, scrolls left */}
            <div className="absolute w-[110vw] md:w-[110vw] bg-primary py-4 md:py-6 -rotate-3 md:-rotate-2 shadow-2xl z-[2] transform-gpu">
                <div className="flex whitespace-nowrap w-max" ref={textRef1}>
                    {generateText(true)}
                </div>
            </div>

            {/* Strip 2: Dark background, outlined text, rotates slightly down, scrolls right */}
            <div className="absolute w-[110vw] md:w-[110vw] bg-background border-y border-primary/20 py-4 md:py-6 rotate-3 md:rotate-2 shadow-2xl z-[1] transform-gpu mt-4">
                <div className="flex whitespace-nowrap w-max" ref={textRef2}>
                    {generateText(false)}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
