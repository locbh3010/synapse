import darkLogo from '@/assets/images/dark-logo.svg'
import {
	Anchor,
	AppShellFooter,
	Box,
	Container,
	Group,
	Image,
	Stack,
	Text,
	rem
} from '@mantine/core'
import NextImage from 'next/image'

import { FOOTER_LINKS } from '@/layout/constants'
import { ROUTES } from '@/utils/routes'
import styles from '@styles/components/Footer.module.css'
import { map } from 'lodash'
import Link from 'next/link'

export default function Footer() {
	return (
		<AppShellFooter>
			<Container px="xl" size="normal">
				<Group className={styles.footer} align="start" justify="space-between">
					<Box maw={rem(435)}>
						<Link title="Home" href={ROUTES.HOME}>
							<Image
								mb="xl"
								component={NextImage}
								src={darkLogo}
								alt="Logo"
								h={rem(40)}
								w={rem(174)}
							/>
						</Link>
						<Text mb="xl" fz="lg">
							Introducing Synapse, a sleek and sophisticated Ghost theme perfect
							for tech, science, culture or any other publication.
						</Text>
						<Text fz="sm">
							© 2024 Synapse. Published with Ghost & Synapse.
						</Text>
					</Box>
					<Group>
						{map(FOOTER_LINKS, (column, colIdx) => (
							<Box key={colIdx} className={styles.column}>
								<Text fz="lg" fw={600} mb="md">
									{column.title}
								</Text>
								<Stack gap="sm">
									{map(
										column.children,
										(
											child: (typeof FOOTER_LINKS)[number]['children'][number],
											childIdx
										) => (
											<Anchor
												key={childIdx}
												c="dark"
												component={Link}
												title={child.label}
												href={child.path}
												fz="md"
												className={styles.social}
											>
												{(child as any)?.icon}
												{child.label}
											</Anchor>
										)
									)}
								</Stack>
							</Box>
						))}
					</Group>
				</Group>
			</Container>
		</AppShellFooter>
	)
}
