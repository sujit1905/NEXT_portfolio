'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.innerWidth < 768) return;

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Inner dot — snappy
            gsap.to(innerRef.current, {
                x: mouseX - 3,
                y: mouseY - 3,
                duration: 0.08,
                ease: 'power2.out',
                opacity: 1,
            });

            // Outer ring — lags behind for premium feel
            gsap.to(outerRef.current, {
                x: mouseX - 16,
                y: mouseY - 16,
                duration: 0.55,
                ease: 'power3.out',
                opacity: 1,
            });
        };

        const handleMouseEnterInteractive = () => {
            gsap.to(outerRef.current, {
                scale: 1.8,
                borderColor: 'rgba(0, 214, 143, 0.7)',
                boxShadow: '0 0 16px rgba(0, 214, 143, 0.35)',
                duration: 0.3,
                ease: 'power2.out',
            });
            gsap.to(innerRef.current, {
                scale: 0,
                duration: 0.2,
            });
        };

        const handleMouseLeaveInteractive = () => {
            gsap.to(outerRef.current, {
                scale: 1,
                borderColor: 'rgba(0, 214, 143, 0.35)',
                boxShadow: '0 0 8px rgba(0, 214, 143, 0.15)',
                duration: 0.3,
                ease: 'power2.out',
            });
            gsap.to(innerRef.current, {
                scale: 1,
                duration: 0.2,
            });
        };

        const handleMouseLeaveWindow = () => {
            gsap.to([outerRef.current, innerRef.current], {
                opacity: 0,
                duration: 0.3,
            });
        };

        // Attach to interactive elements
        const addInteractivity = () => {
            const interactives = document.querySelectorAll(
                'a, button, [data-cursor-hover]',
            );
            interactives.forEach((el) => {
                el.addEventListener('mouseenter', handleMouseEnterInteractive);
                el.addEventListener('mouseleave', handleMouseLeaveInteractive);
            });
        };

        addInteractivity();

        // Re-attach on DOM mutations (for dynamically added elements)
        const observer = new MutationObserver(addInteractivity);
        observer.observe(document.body, { childList: true, subtree: true });

        window.addEventListener('mousemove', handleMouseMove);
        document.documentElement.addEventListener(
            'mouseleave',
            handleMouseLeaveWindow,
        );

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener(
                'mouseleave',
                handleMouseLeaveWindow,
            );
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Outer lagging ring */}
            <div
                ref={outerRef}
                className="hidden md:block fixed top-0 left-0 z-[9999] pointer-events-none opacity-0"
                style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    border: '1px solid rgba(0, 214, 143, 0.35)',
                    boxShadow: '0 0 8px rgba(0, 214, 143, 0.15)',
                    mixBlendMode: 'normal',
                    willChange: 'transform',
                }}
            />
            {/* Inner snappy dot */}
            <div
                ref={innerRef}
                className="hidden md:block fixed top-0 left-0 z-[9999] pointer-events-none opacity-0"
                style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: '#00D68F',
                    boxShadow: '0 0 6px rgba(0, 214, 143, 0.8)',
                    willChange: 'transform',
                }}
            />
        </>
    );
};

export default CustomCursor;
