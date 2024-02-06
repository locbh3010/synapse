import HomeHeroSlide from '@/components/Hero/HomeHeroSlide'
import {
	ActionIcon,
	Box,
	Button,
	Container,
	Divider,
	Group,
	Text,
	Title,
	rem
} from '@mantine/core'
import styles from '@styles/pages/Home.module.css'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'

export default function Home() {
	return (
		<>
			<Box component="section" className={styles.hero}>
				<Container px="xl" size="normal">
					<div className={styles.heroContent}>
						<Title order={1} className={styles.heroContentTitle}>
							Welcome to Synapse!
						</Title>
						<Text className={styles.heroContentDescription} c="white">
							Introducing Synapse, a sleek and sophisticated Ghost theme perfect
							for tech, science, culture or any other publication.
						</Text>
						<div className={styles.heroContentSearch}>
							<input
								placeholder="Your email address"
								type="text"
								className={styles.heroContentSearchInput}
							/>
							<Button className={styles.heroContentSearchAction} radius="xl">
								Subscribe
							</Button>
						</div>
					</div>
				</Container>
				<Container size="normal" px="xl">
					<Divider color="dark.4" />
					<Box className={styles.heroSlide}>
						<Group justify="space-between" align="center" mb={rem(24)}>
							<Title order={4} fw={600} c="white">
								Featured Posts
							</Title>
							<Group gap="sm">
								<ActionIcon variant="subtle" color="white">
									<IconArrowLeft size="24px" />
								</ActionIcon>
								<ActionIcon variant="subtle" color="white">
									<IconArrowRight size="24px" />
								</ActionIcon>
							</Group>
						</Group>
						<Box mb={rem(-160 * 2)}>
							<HomeHeroSlide />
						</Box>
					</Box>
				</Container>
			</Box>
			<Box pb={rem(480 - 320)} />
			<Box component="section" mt={rem(80)}></Box>
		</>
	)
}
