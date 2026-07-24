import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const Footer = () => {
    return (
        <footer
            id="contact"
            className="relative pt-24 pb-10 overflow-hidden"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
            {/* Ambient glow behind text */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse at top, rgba(0,214,143,0.04) 0%, transparent 70%)',
                }}
                aria-hidden="true"
            />

            <div className="container relative">
                {/* Label */}
                <p
                    className="text-xs tracking-[0.3em] uppercase mb-8 font-space-grotesk"
                    style={{ color: '#7A7A7A' }}
                >
                    ◆ &nbsp; Get in touch
                </p>

                {/* Big email link */}
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="group block font-space-grotesk font-semibold leading-none mb-14 transition-all duration-500"
                    style={{
                        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                        color: '#B8B8B8',
                    }}
                >
                    <span
                        className="inline-block transition-all duration-500 group-hover:translate-x-2"
                        style={{}}
                    >
                        {GENERAL_INFO.email}
                    </span>
                    <span
                        className="inline-block ml-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ color: '#00D68F' }}
                    >
                        ↗
                    </span>
                </a>

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <a
                        href="https://github.com/sujit1905"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-space-grotesk text-sm transition-colors duration-300 hover:text-primary"
                        style={{ color: '#7A7A7A' }}
                    >
                        Sujit Mecwan
                    </a>

                    {/* Social links */}
                    <ul className="flex gap-8">
                        {SOCIAL_LINKS.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-space-grotesk text-sm capitalize transition-all duration-300 hover:text-primary relative group"
                                    style={{ color: '#7A7A7A' }}
                                >
                                    {link.name}
                                    <span
                                        className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                                        style={{ background: '#00D68F' }}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <p
                        className="font-space-grotesk text-xs"
                        style={{ color: '#7A7A7A' }}
                    >
                        © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
