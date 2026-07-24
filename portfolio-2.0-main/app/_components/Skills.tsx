'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Entrance animation (bulletproof gsap.to)
    useGSAP(
        () => {
            gsap.to('.slide-up-item', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.03,
                ease: 'power2.out',
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef} className="py-24">
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="space-y-16">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="grid sm:grid-cols-12 gap-8" key={key}>
                            {/* Category label */}
                            <div className="sm:col-span-4">
                                <div className="slide-up-item opacity-0 translate-y-6 flex items-center gap-3">
                                    <div
                                        className="w-0.5 h-8 rounded-full"
                                        style={{
                                            background:
                                                'linear-gradient(180deg, #00D68F, transparent)',
                                        }}
                                        aria-hidden="true"
                                    />
                                    <p
                                        className="font-space-grotesk font-bold uppercase leading-none tracking-tight"
                                        style={{
                                            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                                            color: '#F5F5F5', // Bright white instead of dark transparent white
                                        }}
                                    >
                                        {key}
                                    </p>
                                </div>
                            </div>

                            {/* Skill cards grid */}
                            <div className="sm:col-span-8 flex gap-3 flex-wrap">
                                {value.map((item) => (
                                    <div
                                        key={item.name}
                                        className="slide-up-item opacity-0 translate-y-6 group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 bg-white/[0.02] border border-white/[0.06] hover:border-[#00D68F]/30 hover:bg-[#00D68F]/[0.03] hover:shadow-[0_0_20px_rgba(0,214,143,0.06)]"
                                    >
                                        <div className="transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width={32}
                                                height={32}
                                                className="max-h-8 w-auto object-contain"
                                            />
                                        </div>
                                        <span
                                            className="font-jakarta font-medium text-sm whitespace-nowrap"
                                            style={{ color: '#B8B8B8' }}
                                        >
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
