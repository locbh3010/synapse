import Layout from '@/layout'
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core'
import type { Metadata } from 'next'

import '@/styles/globals.css'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

const theme = createTheme({
	colors: {
		pink: [
			'#ffe7f5',
			'#ffcee3',
			'#ff9bc3',
			'#ff63a2',
			'#ff3686',
			'#ff1874',
			'#ff016b',
			'#e5005a',
			'#cc004f',
			'#b40044'
		]
	},
	primaryColor: 'pink',
	primaryShade: 5,
	fontFamily: 'Mulish, sans-serif',
	lineHeights: {
		relax: '1.625'
	},
	components: {
		Container: {
			defaultProps: {
				size: 'normal',
				px: 'xl'
			}
		}
	}
})

export default function RootLayout({ children }: any) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript defaultColorScheme="light" />
			</head>
			<body>
				<MantineProvider defaultColorScheme="light" theme={theme}>
					<Layout>{children}</Layout>
				</MantineProvider>
			</body>
		</html>
	)
}
