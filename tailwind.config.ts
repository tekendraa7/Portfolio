
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"], 
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
        // Cyberpunk Neon Colors
        'neon-cyan': '#00f5d4',     // hsl(172, 100%, 48%)
        'hot-pink': '#ff006e',      // hsl(332, 100%, 50%)
        'electric-blue': '#3a86ff', // hsl(220, 100%, 61%)
        'bright-lime': '#caffbf',   // hsl(99, 100%, 87%)
        'deep-black': '#090909',    // hsl(0, 0%, 4%)
        'light-text': '#F1F1F1',    // hsl(0, 0%, 95%)

        // Custom colors for roadmap stage headers - Mapped to Cyberpunk Palette
        'roadmap-beginner': 'hsl(var(--primary))', // Neon Cyan
        'roadmap-intermediate': 'hsl(var(--accent))', // Hot Pink
        'roadmap-advanced': 'hsl(220, 100%, 61%)', // Electric Blue
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      boxShadow: { // Adding custom glow effects
        'glow-primary': '0 0 8px hsl(var(--primary)), 0 0 16px hsl(var(--primary)), 0 0 24px hsl(var(--primary))',
        'glow-accent': '0 0 8px hsl(var(--accent)), 0 0 16px hsl(var(--accent)), 0 0 24px hsl(var(--accent))',
        'glow-blue': '0 0 8px #3a86ff, 0 0 16px #3a86ff, 0 0 24px #3a86ff',
      },
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
      fontFamily: { // Ensure the new font can be used via Tailwind class if needed
        'share-tech-mono': ['var(--font-share-tech-mono)', 'monospace'],
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
