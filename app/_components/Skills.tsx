'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const Skills = () => {
    const allSkills = [
        ...MY_STACK.frontend,
        ...MY_STACK.backend,
        ...MY_STACK.database,
        ...MY_STACK.tools,
    ];

    // Split skills into two groups for visually pleasing diverse rows
    const row1 = [...MY_STACK.frontend, ...MY_STACK.backend];
    const row2 = [...MY_STACK.database, ...MY_STACK.tools, ...MY_STACK.frontend]; // duplicated some to ensure enough length

    const SkillPill = ({ item }: { item: { name: string; icon: string } }) => (
        <div className="flex items-center gap-3 px-6 py-4 bg-muted/30 border border-white/5 rounded-2xl backdrop-blur-sm min-w-max hover:bg-muted/50 transition-colors cursor-default group">
            <div className="relative w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
                <Image
                    src={item.icon}
                    alt={item.name}
                    fill
                    className="object-contain"
                />
            </div>
            <span className="text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {item.name}
            </span>
        </div>
    );

    return (
        <section id="my-stack" className="py-24 overflow-hidden relative">
            <div className="container mb-16">
                <SectionTitle title="My Stack" />
            </div>

            <div className="flex flex-col gap-10">
                {/* Row 1 - Left */}
                <div className="relative flex overflow-hidden w-full group">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

                    <div className="flex gap-6 animate-marquee min-w-full">
                        {[...row1, ...row1, ...row1, ...row1].map((item, idx) => (
                            <SkillPill item={item} key={`row1-${idx}`} />
                        ))}
                    </div>
                </div>

                {/* Row 2 - Right */}
                <div className="relative flex overflow-hidden w-full group">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

                    <div className="flex gap-6 animate-marquee-reverse min-w-full">
                        {[...row2, ...row2, ...row2, ...row2].map((item, idx) => (
                            <SkillPill item={item} key={`row2-${idx}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
