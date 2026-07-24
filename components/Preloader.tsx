'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: {
                    ease: 'power2.inOut',
                },
            });

            // Reveal name letters
            tl.to('.name-text span', {
                y: 0,
                stagger: 0.07,
                duration: 0.35,
            });

            // Hold, then exit
            tl.to('.preloader-item', {
                delay: 0.9,
                y: '100%',
                duration: 0.55,
                stagger: 0.08,
                ease: 'power3.inOut',
            })
                .to('.name-text span', { autoAlpha: 0, duration: 0.2 }, '<0.3')
                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                        duration: 0.3,
                        pointerEvents: 'none',
                    },
                    '<0.4',
                );
        },
        { scope: preloaderRef },
    );

    return (
        <div className="fixed inset-0 z-[6] flex overflow-hidden" ref={preloaderRef}>
            {/* 5 sliding bars */}
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    className="preloader-item h-full flex-1"
                    style={{ background: '#090909' }}
                />
            ))}

            {/* Name text */}
            <p className="name-text flex text-[18vw] lg:text-[180px] font-space-grotesk font-bold text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden tracking-tighter">
                <span className="inline-block translate-y-full">S</span>
                <span className="inline-block translate-y-full">U</span>
                <span className="inline-block translate-y-full">J</span>
                <span className="inline-block translate-y-full">I</span>
                <span className="inline-block translate-y-full">T</span>
            </p>
        </div>
    );
};

export default Preloader;
