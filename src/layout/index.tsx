import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { AppShell, AppShellFooter, AppShellMain } from '@mantine/core'
import { ReactNode } from 'react'

interface ILayoutProps {
	children: ReactNode
}

export default function Layout({ children }: ILayoutProps) {
	return (
		<AppShell
			header={{
				height: 40 + 32 * 2
			}}
			withBorder={false}
		>
			<Header />
			<AppShellMain
				style={{
					width: '100%',
					overflowX: 'hidden'
				}}
			>
				{children}
			</AppShellMain>
			<AppShellFooter pos="static">
				<Footer />
			</AppShellFooter>
		</AppShell>
	)
}
