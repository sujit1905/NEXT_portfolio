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

    // Scroll-out animation (kept from original)
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    // Entrance animation — clip-path reveal
    useGSAP(
        () => {
            const tl = gsap.timeline({ delay: 1.8 }); // after preloader

            tl.fromTo(
                '.hero-eyebrow',
                { opacity: 0, y: 16 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
            )
                .fromTo(
                    '.hero-title-line',
                    { opacity: 0, y: 40, skewY: 3 },
                    {
                        opacity: 1,
                        y: 0,
                        skewY: 0,
                        stagger: 0.12,
                        duration: 0.8,
                        ease: 'power4.out',
                    },
                    '-=0.2',
                )
                .fromTo(
                    '.hero-sub',
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
                    '-=0.4',
                )
                .fromTo(
                    '.hero-cta',
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
                    '-=0.3',
                )
                .fromTo(
                    '.hero-stat',
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.1,
                        duration: 0.5,
                        ease: 'power3.out',
                    },
                    '-=0.4',
                );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[580px]">
                    {/* Eyebrow label */}
                    <div
                        className="hero-eyebrow slide-up-and-fade flex items-center gap-2.5 mb-7 opacity-0"
                        aria-label="Availability status"
                    >
                        <span
                            className="relative flex h-2 w-2"
                        >
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                                style={{ background: '#00D68F' }}
                            />
                            <span
                                className="relative inline-flex rounded-full h-2 w-2"
                                style={{ background: '#00D68F' }}
                            />
                        </span>
                        <span
                            className="font-space-grotesk text-xs tracking-[0.2em] uppercase"
                            style={{ color: '#00D68F' }}
                        >
                            Available for work
                        </span>
                    </div>

                    {/* Main title — editorial mix of weights */}
                    <h1 className="leading-[0.95] mb-7">
                        <span
                            className="hero-title-line slide-up-and-fade block font-space-grotesk font-light tracking-tight opacity-0"
                            style={{
                                fontSize: 'clamp(3.5rem, 5vw, 7rem)',
                                color: '#F5F5F5',
                            }}
                        >MERN Stack
                        </span>
                        <span
                            className="hero-title-line slide-up-and-fade block font-space-grotesk font-bold tracking-tighter opacity-0"
                            style={{
                                fontSize: 'clamp(3.5rem, 9vw, 7rem)',
                                color: '#00D68F',
                            }}
                        >
                            Developer
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        className="hero-sub slide-up-and-fade font-jakarta text-base leading-relaxed opacity-0 max-w-[440px]"
                        style={{ color: '#B8B8B8' }}
                    >
                        Hi! I&apos;m{' '}
                        <span
                            className="font-semibold"
                            style={{ color: '#F5F5F5' }}
                        >
                            Sujit Mecwan
                        </span>
                        . Hi! I&apos;m Sujit Mecwan. A passionate MERN Stack Developer focused on building modern, scalable, and high-performance full-stack web applications with exceptional user experiences and clean backend architecture.
                    </p>

                    {/* CTA */}
                    <div className="hero-cta slide-up-and-fade mt-10 opacity-0">
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={GENERAL_INFO.upworkProfile}
                            variant="primary"
                        >
                            Hire Me
                        </Button>
                    </div>
                </div>

                {/* Stats panel */}
                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-6 md:gap-10 text-center md:text-right">
                    {[
                        { value: 'Fresher', label: 'Years of Experience' },
                        { value: '5+', label: 'Completed Projects' },
                        { value: '10K+', label: 'Hours Worked' },
                    ].map(({ value, label }, i) => (
                        <div key={label} className={`hero-stat slide-up-and-fade opacity-0`}>
                            <div className="md:flex md:flex-col md:items-end">
                                <h5
                                    className="font-space-grotesk font-bold leading-none mb-1"
                                    style={{
                                        fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
                                        color: '#00D68F',
                                    }}
                                >
                                    {value}
                                </h5>
                                <p
                                    className="font-jakarta text-xs tracking-wide"
                                    style={{ color: '#7A7A7A' }}
                                >
                                    {label}
                                </p>
                            </div>
                            {/* Separator (desktop only) */}
                            {i < 2 && (
                                <div
                                    className="hidden md:block mt-6 ml-auto"
                                    style={{
                                        width: 1,
                                        height: 1,
                                        background: 'rgba(255,255,255,0.08)',
                                        marginBottom: '-10px',
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;
