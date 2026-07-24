'use client';
import { GENERAL_INFO } from '@/lib/data';
import React from 'react';

const StickyEmail = () => {
    return (
        <div className="max-xl:hidden fixed bottom-32 left-0 block z-[10]">
            <a
                href={`mailto:${GENERAL_INFO.email}`}
                className="group relative px-3 font-space-grotesk text-xs tracking-[2px] transition-all duration-300"
                style={{
                    textOrientation: 'mixed',
                    writingMode: 'vertical-rl',
                    color: '#7A7A7A',
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#00D68F';
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#7A7A7A';
                }}
            >
                {GENERAL_INFO.email}
            </a>
        </div>
    );
};

export default StickyEmail;
