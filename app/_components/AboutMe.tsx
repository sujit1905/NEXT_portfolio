'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    // Entrance animation
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

    // Exit animation
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
                {/* Editorial pull-quote with left border */}
                <div
                    className="slide-up-and-fade mb-20 pl-8 relative"
                    style={{ borderLeft: '2px solid rgba(0,214,143,0.5)' }}
                >
                    {/* Glow dot at top of border */}
                    <div
                        className="absolute -left-[5px] top-0 w-2 h-2 rounded-full"
                        style={{
                            background: '#00D68F',
                            boxShadow: '0 0 12px rgba(0,214,143,0.8)',
                        }}
                        aria-hidden="true"
                    />
                    <h2
                        className="font-space-grotesk font-light tracking-tight leading-[1.15]"
                        style={{
                            fontSize: 'clamp(1.6rem, 4.5vw, 3.5rem)',
                            color: '#F5F5F5',
                        }}
                    >
                        I believe in a{' '}
                        <span style={{ color: '#B8B8B8' }}>
                            user centered design
                        </span>{' '}
                        approach, ensuring that every project I work on is
                        tailored to meet the{' '}
                        <em
                            className="not-italic font-medium"
                            style={{ color: '#00D68F' }}
                        >
                            specific needs of its users.
                        </em>
                    </h2>
                </div>

                {/* Divider with label */}
                <div className="slide-up-and-fade flex items-center gap-5 mb-12">
                    <span
                        className="font-space-grotesk text-xs tracking-[0.3em] uppercase"
                        style={{ color: '#7A7A7A' }}
                    >
                        — &nbsp; This is me.
                    </span>
                    <div
                        className="flex-1 h-px"
                        style={{ background: 'rgba(255,255,255,0.06)' }}
                        aria-hidden="true"
                    />
                </div>

                {/* Bio grid */}
                <div className="grid md:grid-cols-12 gap-y-8">
                    {/* Name */}
                    <div className="md:col-span-5">
                        <p
                            className="slide-up-and-fade font-space-grotesk font-semibold leading-tight"
                            style={{
                                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                                color: '#F5F5F5',
                            }}
                        >
                            Hi, I&apos;m{' '}
                            <span style={{ color: '#00D68F' }}>Sujit.</span>
                        </p>
                    </div>

                    {/* Bio text */}
                    <div className="md:col-span-7">
                        <div className="max-w-[450px] space-y-4">
                            <p
                                className="slide-up-and-fade font-jakarta leading-relaxed"
                                style={{ color: '#B8B8B8' }}
                            >
                                I&apos;m a MERN Stack Developer passionate about transforming ideas into modern, scalable, and user-focused web applications. I specialize in building seamless digital experiences with React, Next.js, Node.js, Express.js, and MongoDB, combining intuitive frontend interfaces with robust backend systems.
                            </p>
                            <p
                                className="slide-up-and-fade font-jakarta leading-relaxed"
                                style={{ color: '#B8B8B8' }}
                            >
                                My approach focuses on writing clean, maintainable code and developing high-performance applications that are responsive, secure, and scalable. I enjoy solving real-world problems, continuously learning new technologies, and creating products that deliver exceptional user experiences while meeting business goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
