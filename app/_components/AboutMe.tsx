'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I believe in a user centered design approach, ensuring that
                    every project I work on is tailored to meet the specific
                    needs of its users.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9 gap-8">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Ayush.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[550px] space-y-6">
                            {/* WHY Section - Prominent */}
                            <div className="slide-up-and-fade p-8 bg-background-light border-l-4 border-primary rounded-r-lg">
                                <h3 className="text-3xl font-anton text-primary mb-4 uppercase tracking-wider">
                                    Why I Code
                                </h3>
                                <p className="text-base leading-relaxed">
                                    I code because I believe technology should solve real problems and make people&apos;s lives better.
                                    Every line of code I write is driven by the desire to create solutions that are not just functional,
                                    but meaningful. I&apos;m passionate about building applications that empower users, streamline workflows,
                                    and deliver tangible value to businesses and individuals alike.
                                </p>
                                <p className="text-base leading-relaxed mt-4">
                                    What excites me most is the moment when a complex problem clicks into place, when elegant code
                                    transforms a challenging requirement into a smooth user experience. This is why I wake up every
                                    day eager to build, learn, and create.
                                </p>
                            </div>

                            {/* What I Do */}
                            <div className="slide-up-and-fade">
                                <h4 className="text-xl font-semibold text-foreground mb-3">What I Do</h4>
                                <p>
                                    I&apos;m a Full Stack .NET Developer dedicated to
                                    turning ideas into creative solutions. I
                                    specialize in building scalable web applications using Angular, .NET, and modern technologies.
                                </p>
                            </div>

                            {/* How I Approach */}
                            <div className="slide-up-and-fade">
                                <h4 className="text-xl font-semibold text-foreground mb-3">How I Approach</h4>
                                <p>
                                    My approach focuses on creating scalable,
                                    high-performing solutions tailored to both user
                                    needs and business objectives. By prioritizing
                                    performance, security, and maintainability,
                                    I strive to deliver applications that not only
                                    meet requirements but also drive tangible business results.
                                </p>
                            </div>

                            {/* My Values */}
                            <div className="slide-up-and-fade grid sm:grid-cols-2 gap-4 mt-6">
                                <div className="p-4 bg-background-light rounded-lg border border-border hover:border-primary transition-all duration-300 group">
                                    <h5 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        🎯 Problem Solving
                                    </h5>
                                    <p className="text-sm">
                                        I thrive on complex challenges and finding elegant solutions that balance technical excellence with practical needs.
                                    </p>
                                </div>
                                <div className="p-4 bg-background-light rounded-lg border border-border hover:border-primary transition-all duration-300 group">
                                    <h5 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        🚀 Continuous Learning
                                    </h5>
                                    <p className="text-sm">
                                        Technology evolves rapidly, and I&apos;m committed to staying current with the latest tools, frameworks, and best practices.
                                    </p>
                                </div>
                                <div className="p-4 bg-background-light rounded-lg border border-border hover:border-primary transition-all duration-300 group">
                                    <h5 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        💡 Innovation
                                    </h5>
                                    <p className="text-sm">
                                        I don&apos;t just build what&apos;s asked—I think about what could be, exploring new approaches to create better outcomes.
                                    </p>
                                </div>
                                <div className="p-4 bg-background-light rounded-lg border border-border hover:border-primary transition-all duration-300 group">
                                    <h5 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        🤝 Collaboration
                                    </h5>
                                    <p className="text-sm">
                                        Great software is built by great teams. I value open communication, feedback, and working together to achieve shared goals.
                                    </p>
                                </div>
                            </div>

                            {/* Philosophy */}
                            <div className="slide-up-and-fade mt-6">
                                <p>
                                    I value clarity, consistency, and long-term impact in the work I do.
                                    My focus goes beyond implementation — I aim to understand business context,
                                    user expectations, and technical constraints before making decisions.
                                    This mindset helps me build solutions that are maintainable, scalable,
                                    and aligned with real-world requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
