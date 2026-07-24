import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: 'hsl(var(--background))',
                    mid: 'hsl(var(--background-mid))',
                    light: 'hsl(var(--background-light))',
                },
                foreground: {
                    DEFAULT: 'hsl(var(--foreground))',
                    muted: 'hsl(var(--foreground-muted))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                glow: 'hsl(var(--glow))',
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                // New premium fonts
                'space-grotesk': ['var(--font-space-grotesk)'],
                jakarta: ['var(--font-jakarta)'],
                // Kept for backward compat (mapped to new fonts)
                anton: ['var(--font-space-grotesk)'],
                'roboto-flex': ['var(--font-jakarta)'],
            },
            padding: {
                section: '250px',
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    xl: '1148px',
                    '2xl': '1148px',
                },
            },
            transitionDuration: {
                '7000': '7s',
            },
            screens: {
                xs: '420px',
            },
            boxShadow: {
                'glow-sm': '0 0 12px rgba(0, 214, 143, 0.2)',
                'glow-md': '0 0 24px rgba(0, 214, 143, 0.15)',
                'glow-lg': '0 0 40px rgba(0, 214, 143, 0.1)',
                'glow-blue': '0 0 20px rgba(77, 166, 255, 0.15)',
            },
        },
    },
    plugins: [tailwindAnimate],
} satisfies Config;
