/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}'
		// './pages/**/*.{js,ts,jsx,tsx,mdx}',
		// './components/**/*.{js,ts,jsx,tsx,mdx}',
		// './app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			sx: '350px',
			sm: '480px',
			md: '640px',
			md2: '768px',
			lg: '976px',
			xl: '1200px',
			'2xl': '1440px',
			'3xl': '1600px'
		},
		colors: {
			red: {
				100: 'hsl(358, 79%, 66%)',
				200: 'hsl(357, 100%, 86%)'
			},
			white: `hsl(0, 0%, 100%)`,
			blue: {
				100: 'hsl(239, 57%, 85%)',
				200: 'hsl(211, 10%, 45%)',
				300: 'hsl(238, 40%, 52%)',
				400: 'hsl(212, 24%, 26%)'
			},
			gray: {
				100: 'hsl(228, 33%, 97%)',
				200: 'hsl(223, 19%, 93%)'
			}
		},
		backgroundColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'hsl(13, 100%, 96%)',
			secondary: 'hsl(12, 88%, 59%)',
			dark: 'hsl(233, 12%, 13%)'
		}),
		textColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'hsl(228, 39%, 23%)',
			secondary: 'hsl(227, 12%, 61%)'
		}),
		fontFamily: {
			sans: 'Rubik'
		},
		fontSize: {
			us: ['10px', '12px'],
			sm: ['12px', '16px'],
			md: ['14px', '20px'],
			lg: ['16px', '24px'],
			xl: ['20px', '24px'],
			'2xl': ['24px', '32px'],
			'3xl': ['30px', '36px'],
			'4xl': ['36px', '40px'],
			'5xl': ['48px', '48px']
		},
		fontWeight: {
			light: '400',
			normal: '500',
			bold: '700'
		},
		extend: {
			boxShadow: {
				'3xl': '0px 26px 34px -19px hsl(12, 88%, 59%)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: []
}
