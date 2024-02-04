/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#FFE5F2',
					100: '#FFCCE6',
					200: '#FF99CC',
					300: '#FF66B3',
					400: '#FF3399',
					DEFAULT: '#FF0080',
					600: '#CC0066',
					700: '#99004D',
					800: '#660033',
					900: '#33001A',
					950: '#19000D'
				},
				secondary: {
					50: '#E9E7F3',
					100: '#D2D0E7',
					200: '#A29DCD',
					300: '#766DB5',
					400: '#50488E',
					DEFAULT: '#342F5D',
					600: '#2A264B',
					700: '#201D3A',
					800: '#151325',
					900: '#0B0A14',
					950: '#06050A'
				},
				gray: {
					50: '#F7F7F7',
					100: '#E0E0E0',
					200: '#B0B0B0',
					300: '#808080',
					400: '#595959',
					DEFAULT: '#3D3D3D',
					600: '#333333',
					700: '#292929',
					800: '#1E1E1E',
					900: '#141414',
					950: '#0A0A0A'
				},
				info: {
					50: '#EBF7FF',
					100: '#D6EFFF',
					200: '#A8DCFF',
					300: '#80CCFF',
					400: '#57BCFF',
					DEFAULT: '#2CAAFF',
					600: '#0090F0',
					700: '#006BB3',
					800: '#004675',
					900: '#00253D',
					950: '#00121F'
				},
				success: {
					50: '#E9FBF2',
					100: '#D3F8E5',
					200: '#A8F0CB',
					300: '#78E8AE',
					400: '#4CE194',
					DEFAULT: '#24D57A',
					600: '#1DAA61',
					700: '#157F48',
					800: '#0F5732',
					900: '#072C19',
					950: '#04160C'
				},
				warning: {
					50: '#FFF4E6',
					100: '#FFE8CC',
					200: '#FFD199',
					300: '#FEB862',
					400: '#FEA12F',
					DEFAULT: '#F98B01',
					600: '#C66D01',
					700: '#935101',
					800: '#663800',
					900: '#331C00',
					950: '#190E00'
				},
				danger: {
					50: '#FEEDEB',
					100: '#FDDAD8',
					200: '#FCB1AC',
					300: '#FA8C84',
					400: '#F9675D',
					DEFAULT: '#F74032',
					600: '#E71809',
					700: '#AC1207',
					800: '#710C04',
					900: '#3B0602',
					950: '#1D0301'
				},
				dark: {
					DEFAULT: '#141517',
					hover: '#101113'
				}
			},
			screens: {
				xs: '480px',
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1024px',
				'2xl': '1200px',
				'3xl': '1280px',
				'4xl': '1440px',
				'5xl': '1600px',
				'<xs': { max: '479.98px' },
				'<sm': { max: '575.98px' },
				'<md': { max: '767.98px' },
				'<lg': { max: '991.98px' },
				'<xl': { max: '1023.98px' },
				'<2xl': { max: '1199.98px' },
				'<3xl': { max: '1279.98px' },
				'<4xl': { max: '1439.98px' },
				'<5xl': { max: '1599.98px' }
			},
			spacing: {},
			height: {
				'56px': '56px'
			},
			boxShadow: {
				sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
				DEFAULT:
					'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
				md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
				lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
				xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
				'2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
				inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
				none: '0 0 rgb(0, 0 / 0, 0)'
			}
		}
	},
	plugins: []
}
