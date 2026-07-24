'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

// Particle color palette — premium dust feel
const PARTICLE_COLORS = [
    'rgba(255, 255, 255, 1)',        // white
    'rgba(255, 255, 255, 1)',        // white (weighted)
    'rgba(0, 214, 143, 1)',          // emerald accent
    'rgba(102, 255, 227, 1)',        // glow cyan
    'rgba(77, 166, 255, 1)',         // soft blue
    'rgba(255, 255, 255, 1)',        // white (weighted)
];

const TOTAL_PARTICLES = 120;

const ParticleBackground = () => {
    const particlesRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        particlesRef.current.forEach((particle, i) => {
            if (!particle) return;

            // Size tiers: micro / small / medium
            const tier = i % 10;
            const size =
                tier < 5
                    ? Math.random() * 1.5 + 0.5   // micro: 0.5–2px
                    : tier < 8
                      ? Math.random() * 2 + 2       // small: 2–4px
                      : Math.random() * 3 + 4;      // medium: 4–7px

            const color =
                PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
            const opacity = Math.random() * 0.55 + 0.08; // 0.08–0.63
            const isGlowing = Math.random() > 0.75;
            const isBlurred = Math.random() > 0.8;

            const startX = Math.random() * (window.innerWidth + 200) - 100;
            const startY =
                Math.random() * (window.innerHeight * 1.5) - window.innerHeight * 0.25;

            // Build color with opacity embedded
            const baseColor = color.replace('1)', `${opacity})`);
            const glowColor = isGlowing
                ? color.replace('1)', '0.6)')
                : 'transparent';

            gsap.set(particle, {
                width: size,
                height: size,
                left: startX,
                top: startY,
                backgroundColor: baseColor,
                borderRadius: '50%',
                filter: isBlurred ? `blur(${Math.random() * 1.5 + 0.5}px)` : 'none',
                boxShadow: isGlowing
                    ? `0 0 ${size * 3}px ${size}px ${glowColor}`
                    : 'none',
                opacity: 1,
            });

            // Primary float animation — upward drift + slight horizontal sway
            const duration = Math.random() * 18 + 12; // 12–30s
            const swayX = (Math.random() - 0.5) * 80;

            gsap.to(particle, {
                y: -(window.innerHeight * 1.3 + startY + 200),
                x: swayX,
                duration,
                ease: 'none',
                repeat: -1,
                delay: -Math.random() * duration, // stagger by starting mid-animation
            });

            // Pulse opacity on 25% of particles
            if (Math.random() > 0.75) {
                gsap.to(particle, {
                    opacity: opacity * 0.15,
                    duration: Math.random() * 3 + 2,
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                    delay: Math.random() * 5,
                });
            }
        });
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {[...Array(TOTAL_PARTICLES)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        if (el) particlesRef.current[i] = el;
                    }}
                    className="absolute rounded-full"
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
