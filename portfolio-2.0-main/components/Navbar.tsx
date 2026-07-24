'use client';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const MENU_LINKS = [
    { name: 'Home', url: '/', num: '01' },
    { name: 'About Me', url: '/#about-me', num: '02' },
    { name: 'Experience', url: '/#my-experience', num: '03' },
    { name: 'Projects', url: '/#selected-projects', num: '04' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    return (
        <>
            {/* ── Hamburger button ── */}
            <div className="sticky top-0 z-[4]">
                <button
                    className={cn(
                        'group size-12 absolute top-5 right-5 md:right-10 z-[2] flex flex-col items-center justify-center gap-1.5 rounded-full transition-all duration-300',
                        scrolled
                            ? 'backdrop-blur-md bg-white/[0.04] border border-white/[0.08]'
                            : '',
                    )}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span
                        className={cn(
                            'inline-block w-5 h-px bg-foreground rounded-full transition-all duration-300',
                            {
                                'rotate-45 translate-y-[3.5px]': isMenuOpen,
                                'group-hover:rotate-12': !isMenuOpen,
                            },
                        )}
                    />
                    <span
                        className={cn(
                            'inline-block w-5 h-px bg-foreground rounded-full transition-all duration-300',
                            {
                                '-rotate-45 -translate-y-[3.5px]': isMenuOpen,
                                'group-hover:-rotate-12': !isMenuOpen,
                            },
                        )}
                    />
                </button>
            </div>

            {/* ── Backdrop overlay ── */}
            <div
                className={cn(
                    'fixed inset-0 z-[2] transition-all duration-300',
                    {
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                        'opacity-100 visible': isMenuOpen,
                    },
                )}
                style={{ background: 'rgba(9,9,9,0.6)', backdropFilter: 'blur(4px)' }}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* ── Menu panel (slides in from right) ── */}
            <div
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[480px] max-w-[calc(100vw-2rem)]',
                    'transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-[3]',
                    'flex flex-col py-12 px-10',
                    { 'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen },
                )}
                style={{
                    background: 'rgba(15, 17, 21, 0.97)',
                    borderLeft: '1px solid rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                }}
            >
                {/* Top accent line */}
                <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(0,214,143,0.4), transparent)',
                    }}
                />

                {/* ── Menu links ── */}
                <nav className="flex-1 flex flex-col justify-center">
                    <p
                        className="text-xs tracking-[0.25em] uppercase mb-10 font-space-grotesk"
                        style={{ color: '#7A7A7A' }}
                    >
                        Navigation
                    </p>
                    <ul className="space-y-1">
                        {MENU_LINKS.map((link) => (
                            <li key={link.name}>
                                <button
                                    onClick={() => {
                                        router.push(link.url);
                                        setIsMenuOpen(false);
                                    }}
                                    className="group w-full text-left flex items-center gap-5 py-4 border-b transition-all duration-300"
                                    style={{ borderColor: 'rgba(255,255,255,0.04)' }}
                                >
                                    <span
                                        className="font-space-grotesk text-xs transition-colors duration-300"
                                        style={{ color: 'rgba(0,214,143,0.5)' }}
                                    >
                                        {link.num}
                                    </span>
                                    <span
                                        className="font-space-grotesk text-2xl font-medium tracking-tight transition-all duration-300 group-hover:translate-x-2"
                                        style={{ color: '#B8B8B8' }}
                                    >
                                        <span className="group-hover:text-white transition-colors duration-300">
                                            {link.name}
                                        </span>
                                    </span>
                                    <span
                                        className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs"
                                        style={{ color: '#00D68F' }}
                                    >
                                        →
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* ── Social + Contact ── */}
                <div className="space-y-8">
                    <div>
                        <p
                            className="text-xs tracking-[0.25em] uppercase mb-5 font-space-grotesk"
                            style={{ color: '#7A7A7A' }}
                        >
                            Social
                        </p>
                        <ul className="flex gap-6">
                            {SOCIAL_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-space-grotesk text-sm capitalize transition-all duration-300 hover:text-primary"
                                        style={{ color: '#B8B8B8' }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p
                            className="text-xs tracking-[0.25em] uppercase mb-3 font-space-grotesk"
                            style={{ color: '#7A7A7A' }}
                        >
                            Contact
                        </p>
                        <a
                            href={`mailto:${GENERAL_INFO.email}`}
                            className="font-space-grotesk text-sm transition-all duration-300 hover:text-primary"
                            style={{ color: '#B8B8B8' }}
                        >
                            {GENERAL_INFO.email}
                        </a>
                    </div>
                </div>

                {/* Bottom accent line */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(77,166,255,0.2), transparent)',
                    }}
                />
            </div>
        </>
    );
};

export default Navbar;
