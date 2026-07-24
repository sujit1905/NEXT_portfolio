'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Entrance animation (preserved)
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    // Exit animation (preserved)
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Experience" />

                {/* Timeline container */}
                <div className="relative">
                    {/* Vertical timeline spine */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-px"
                        style={{
                            background:
                                'linear-gradient(180deg, rgba(0,214,143,0.4) 0%, rgba(0,214,143,0.1) 60%, transparent 100%)',
                        }}
                        aria-hidden="true"
                    />

                    <div className="space-y-0 pl-10">
                        {MY_EXPERIENCE.map((item, index) => (
                            <div
                                key={item.title}
                                className="experience-item relative group"
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute -left-[2.65rem] top-6 w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125"
                                    style={{
                                        background: '#00D68F',
                                        boxShadow:
                                            '0 0 12px rgba(0,214,143,0.6)',
                                    }}
                                    aria-hidden="true"
                                />
                                {/* Connector line between dots */}
                                {index < MY_EXPERIENCE.length - 1 && (
                                    <div
                                        className="absolute -left-[2.4rem] top-[2.3rem] w-px"
                                        style={{
                                            height: 'calc(100% + 2rem)',
                                            background:
                                                'rgba(255,255,255,0.04)',
                                        }}
                                        aria-hidden="true"
                                    />
                                )}

                                {/* Card content */}
                                <div
                                    className="py-8 px-6 rounded-xl transition-all duration-300 group-hover:bg-[rgba(0,214,143,0.02)]"
                                    style={{
                                        borderBottom:
                                            index < MY_EXPERIENCE.length - 1
                                                ? '1px solid rgba(255,255,255,0.04)'
                                                : 'none',
                                    }}
                                >
                                    {/* Date badge */}
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                                        <div>
                                            {item.company && (
                                                <p
                                                    className="font-space-grotesk text-xs tracking-[0.2em] uppercase mb-2"
                                                    style={{ color: '#00D68F' }}
                                                >
                                                    {item.company}
                                                </p>
                                            )}
                                            {(item as any).University && (
                                                <p
                                                    className="font-space-grotesk text-xs tracking-[0.2em] uppercase mb-2"
                                                    style={{ color: '#4DA6FF' }}
                                                >
                                                    {(item as any).University}
                                                </p>
                                            )}
                                            <h3
                                                className="font-space-grotesk font-bold leading-tight"
                                                style={{
                                                    fontSize: 'clamp(1.3rem, 3vw, 2rem)',
                                                    color: '#F5F5F5',
                                                }}
                                            >
                                                {item.title}
                                            </h3>
                                        </div>

                                        {/* Date pill */}
                                        <span
                                            className="flex-shrink-0 font-jakarta text-xs px-3 py-1.5 rounded-full"
                                            style={{
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                color: '#7A7A7A',
                                                background: 'rgba(255,255,255,0.02)',
                                            }}
                                        >
                                            {item.duration}
                                        </span>
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
