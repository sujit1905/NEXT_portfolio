import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

interface Props {
    index: number;
    project: IProject;
    selectedProject: string | null;
    onMouseEnter: (_slug: string) => void;
}

gsap.registerPlugin(useGSAP);

const Project = ({ index, project, selectedProject, onMouseEnter }: Props) => {
    const externalLinkSVGRef = useRef<SVGSVGElement>(null);

    const { context, contextSafe } = useGSAP(() => {}, {
        scope: externalLinkSVGRef,
        revertOnUpdate: true,
    });

    const handleMouseEnter = contextSafe?.(() => {
        onMouseEnter(project.slug);

        const arrowLine = externalLinkSVGRef.current?.querySelector(
            '#arrow-line',
        ) as SVGPathElement;
        const arrowCurb = externalLinkSVGRef.current?.querySelector(
            '#arrow-curb',
        ) as SVGPathElement;
        const box = externalLinkSVGRef.current?.querySelector(
            '#box',
        ) as SVGPathElement;

        gsap.set(box, {
            opacity: 0,
            strokeDasharray: box?.getTotalLength(),
            strokeDashoffset: box?.getTotalLength(),
        });
        gsap.set(arrowLine, {
            opacity: 0,
            strokeDasharray: arrowLine?.getTotalLength(),
            strokeDashoffset: arrowLine?.getTotalLength(),
        });
        gsap.set(arrowCurb, {
            opacity: 0,
            strokeDasharray: arrowCurb?.getTotalLength(),
            strokeDashoffset: arrowCurb?.getTotalLength(),
        });

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        tl.to(externalLinkSVGRef.current, { autoAlpha: 1 })
            .to(box, { opacity: 1, strokeDashoffset: 0 })
            .to(arrowLine, { opacity: 1, strokeDashoffset: 0 }, '<0.2')
            .to(arrowCurb, { opacity: 1, strokeDashoffset: 0 })
            .to(externalLinkSVGRef.current, { autoAlpha: 0 }, '+=1');
    });

    const handleMouseLeave = contextSafe?.(() => {
        context.kill();
    });

    return (
        <TransitionLink
            href={`/projects/${project.slug}`}
            className="project-item group leading-none py-7 border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-20 md:hover:!opacity-100 transition-all duration-500"
            style={{
                borderColor: 'rgba(255,255,255,0.06)',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Mobile thumbnail */}
            {selectedProject === null && (
                <div className="relative overflow-hidden rounded-lg mb-5 aspect-[3/2]">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                    {/* Glass overlay on mobile image */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                            background:
                                'linear-gradient(180deg, transparent 40%, rgba(9,9,9,0.6) 100%)',
                        }}
                    />
                </div>
            )}

            <div className="flex gap-4 md:gap-6 items-start">
                {/* Project number */}
                <div
                    className="flex-shrink-0 font-space-grotesk text-xs font-medium pt-1 tabular-nums"
                    style={{ color: 'rgba(0,214,143,0.5)' }}
                >
                    {(index + 1).toString().padStart(2, '0')}
                </div>

                <div className="flex-1 min-w-0">
                    {/* Title */}
                    <h4
                        className="flex items-center gap-3 font-space-grotesk font-bold transition-all duration-500 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left"
                        style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}
                    >
                        {project.title}
                        <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                ref={externalLinkSVGRef}
                                style={{ color: '#F5F5F5' }}
                            >
                                <path
                                    id="box"
                                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                />
                                <path id="arrow-line" d="M10 14 21 3" />
                                <path id="arrow-curb" d="M15 3h6v6" />
                            </svg>
                        </span>
                    </h4>

                    {/* Tech stack pills */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.techStack
                            .slice(0, 4)
                            .map((tech) => (
                                <span
                                    key={tech}
                                    className="font-jakarta text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full"
                                    style={{
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        color: '#7A7A7A',
                                        background: 'rgba(255,255,255,0.02)',
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
        </TransitionLink>
    );
};

export default Project;
