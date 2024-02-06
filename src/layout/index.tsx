import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { AppShell, AppShellMain } from '@mantine/core'
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
			<AppShellMain>{children}</AppShellMain>
			<Footer />
		</AppShell>
	)
}
