'use client';
import React, { useEffect, useRef } from 'react';

const ScrollProgressIndicator = () => {
    const scrollBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollBarRef.current) {
                const { scrollHeight, clientHeight } = document.documentElement;
                const scrollableHeight = scrollHeight - clientHeight;
                const scrollY = window.scrollY;
                const scrollProgress = (scrollY / scrollableHeight) * 100;

                scrollBarRef.current.style.transform = `translateY(-${
                    100 - scrollProgress
                }%)`;
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="fixed top-[50svh] right-[1.5%] -translate-y-1/2 z-[20] overflow-hidden rounded-full"
            style={{
                width: 2,
                height: 80,
                background: 'rgba(255,255,255,0.05)',
            }}
        >
            <div
                ref={scrollBarRef}
                className="w-full h-full rounded-full"
                style={{
                    background: '#00D68F',
                    boxShadow: '0 0 8px rgba(0, 214, 143, 0.7), 0 0 16px rgba(0, 214, 143, 0.3)',
                    transition: 'transform 0.1s linear',
                }}
            />
        </div>
    );
};

export default ScrollProgressIndicator;
