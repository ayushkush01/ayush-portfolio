'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

export default function Template({ children }: { children: React.ReactNode }) {
    useGSAP(() => {
        // Explicitly reset positions to ensure clean transition state on mount
        gsap.set('.page-transition', { yPercent: 0 });
        gsap.set('.page-transition--inner', { yPercent: 100 });

        const tl = gsap.timeline();

        tl.to('.page-transition--inner', {
            yPercent: 0,
            duration: 0.25,
            ease: 'power2.out',
        })
            .to('.page-transition--inner', {
                yPercent: -100,
                duration: 0.25,
                ease: 'power2.in',
            })
            .to('.page-transition', {
                yPercent: -100,
                duration: 0.1,
            });
    });

    return (
        <div>
            <div className="page-transition w-screen h-screen fixed top-0 left-0 bg-background-light z-[5]">
                <div className="page-transition--inner w-screen h-screen fixed top-0 left-0 bg-primary z-[5] translate-y-full"></div>
            </div>

            {children}
        </div>
    );
}
