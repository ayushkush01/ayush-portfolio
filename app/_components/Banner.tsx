'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const hasVisited = sessionStorage.getItem('hasVisited');

            // Intro Animation
            const introTl = gsap.timeline();
            introTl.fromTo('.slide-up-and-fade',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: 'power3.out',
                    delay: hasVisited ? 0.2 : 2.2,
                }
            );

            // Scroll Animation
            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            scrollTl.to(
                '.slide-up-and-fade',
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden min-h-screen flex items-center pt-24" id="banner">
            <ArrowAnimation />
            <div
                className="container relative z-10 grid lg:grid-cols-2 gap-10 items-center"
                ref={containerRef}
            >
                <div className="flex flex-col justify-center items-start">
                    <p className="banner-subtitle slide-up-and-fade text-xl md:text-2xl text-muted-foreground mb-4 font-medium tracking-wide">
                        Hi, I&apos;m <span className="text-foreground">Ayush Kushwaha</span>
                    </p>
                    <h1 className="banner-title slide-up-and-fade leading-none text-[3.5rem] xs:text-6xl sm:text-8xl md:text-9xl font-anton tracking-tight mb-6">
                        <span className="text-primary block">FULL STACK</span>
                        <span className="block text-foreground ml-2 sm:ml-4 opacity-90">DEV.</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
                        Building digital experiences that blend <span className="text-primary font-medium">performance</span> with <span className="text-primary font-medium">aesthetics</span>.
                    </p>
                    <div className="flex flex-wrap gap-4 slide-up-and-fade">
                        <Button
                            as="link"
                            href="#contact"
                            variant="primary"
                            className="px-8 py-6 text-lg"
                        >
                            Start a Project
                        </Button>
                        <a
                            href="/logo/Ayush_Kushwaha_2025.pdf"
                            download="Ayush_Kushwaha_Resume_2025.pdf"
                            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md border border-muted-foreground/20 bg-transparent px-8 font-medium text-foreground transition-all duration-300 hover:bg-muted/10 hover:border-primary/50"
                        >
                            <span className="mr-2 h-2 w-2 rounded-full bg-primary duration-300 group-hover:scale-150"></span>
                            Resume
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-6 md:items-end slide-up-and-fade">
                    <div className="p-8 rounded-2xl bg-card/30 backdrop-blur-md border border-white/5 w-full max-w-md hover:border-primary/20 transition-colors">
                        <h5 className="text-5xl font-anton text-primary mb-2">2+</h5>
                        <p className="text-lg text-muted-foreground font-medium">Years of Experience</p>
                        <p className="text-sm text-muted-foreground/60 mt-2">Delivering robust solutions across the stack.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card/30 backdrop-blur-md border border-white/5 w-full max-w-md hover:border-primary/20 transition-colors">
                        <h5 className="text-5xl font-anton text-primary mb-2">3+</h5>
                        <p className="text-lg text-muted-foreground font-medium">Major Projects</p>
                        <p className="text-sm text-muted-foreground/60 mt-2">From e-commerce to enterprise dashboards.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
