import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
    icon?: ReactNode;
    className?: string;
    classNames?: {
        container?: string;
        title?: string;
        icon?: string;
    };
    title: string;
}

const SectionTitle = ({ icon, title, className, classNames }: Props) => {
    return (
        <div
            className={cn(
                'flex items-center gap-4 mb-12',
                className,
                classNames?.container,
            )}
        >
            {icon ? (
                icon
            ) : (
                <span
                    className={cn(
                        'text-[10px]',
                        classNames?.icon,
                    )}
                    style={{ color: '#00D68F' }}
                    aria-hidden="true"
                >
                    ◆
                </span>
            )}
            <h2
                className={cn(
                    'font-space-grotesk text-xs uppercase tracking-[0.25em] leading-none',
                    classNames?.title,
                )}
                style={{ color: '#7A7A7A' }}
            >
                {title}
            </h2>
            {/* Accent line stretching to the right */}
            <div
                className="flex-1 h-px"
                style={{
                    background:
                        'linear-gradient(90deg, rgba(0, 214, 143, 0.25) 0%, transparent 100%)',
                }}
                aria-hidden="true"
            />
        </div>
    );
};

export default SectionTitle;
