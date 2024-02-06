import Badge from '@/components/Badge'
import HomeHeroSlide from '@/components/Hero/HomeHeroSlide'
import {
	AspectRatio,
	Avatar,
	Box,
	Button,
	Container,
	Divider,
	Group,
	Image,
	Paper,
	SimpleGrid,
	Text,
	Title,
	rem
} from '@mantine/core'
import styles from '@styles/pages/Home.module.css'
import { times } from 'lodash'

export default function Home() {
	return (
		<>
			<Box component="section" className={styles.hero}>
				<Container>
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
				<Container>
					<Divider color="dark.4" />
					<Box className={styles.heroSlide}>
						<Group justify="space-between" align="center" mb={rem(24)}>
							<Title order={4} fw={600} c="white">
								Featured Posts
							</Title>
						</Group>
						<Box mb={rem(-160 * 2)}>
							<HomeHeroSlide />
						</Box>
					</Box>
				</Container>
			</Box>
			<Box pb={rem(480 - 320)} />
			<Box component="section" my={rem(80)}>
				<Container>
					<Divider mb="lg" color="gray.2" />
					<Title order={4} fw={600} mb="lg">
						Latest Posts
					</Title>
					<SimpleGrid spacing={rem(36)} cols={3}>
						{times(12, (i) => (
							<Paper key={i}>
								<Box
									style={{
										position: 'relative',
										borderRadius: rem(6),
										overflow: 'hidden'
									}}
								>
									<AspectRatio ratio={16 / 9}>
										<Image
											alt=""
											src="https://images.unsplash.com/photo-1543164904-8ff92670a192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDQ5fHxhcHBsZSUyMHdhdGNofGVufDB8fHx8MTY4Nzg0ODE4Mnww&ixlib=rb-4.0.3&q=80&w=1000"
											style={{
												objectFit: 'cover',
												objectPosition: 'center',
												width: '100%',
												height: '100%'
											}}
										/>
									</AspectRatio>
									<Box pos="absolute" bottom={rem(16)} left={rem(16)}>
										<Group gap="xs">
											<Badge label="Apple" color="blue" />
											<Badge label="Google" color="red" />
											<Badge label="AI" color="orange" />
										</Group>
									</Box>
								</Box>
								<Box mt="md">
									<Title
										fw={600}
										order={5}
										fz="lg"
										mb="sm"
										lineClamp={2}
										lh="1.75rem"
									>
										The Rise of Smart Homes: Transforming the Way We Live
									</Title>
									<Text lineClamp={3} c="dimmed" lh="1.625" fz="md" mb="sm">
										Duo Reges, constructio interrete. Mene ergo et Triarium
										dignos existimas, apud quos turpiter loquare? Unum est sine
										dolore esse, alterum cum voluptate. Quis est autem dignus
										nomine hominis, qui unum diem totum velit esse in genere
										isto voluptatis? * Bona autem corporis huic sunt, quod
										posterius posui, similiora. Quod cum ita
									</Text>
									<Group gap="sm" align="center">
										<Avatar
											size="md"
											alt=""
											src="https://i.pinimg.com/564x/52/69/e3/5269e3c11cf2f2cd3a76bbdbe076b619.jpg"
										/>
										<Text fw={700} size="xs">
											by <strong>John Doe</strong>
										</Text>
									</Group>
								</Box>
							</Paper>
						))}
					</SimpleGrid>
				</Container>
			</Box>
			<Box pt="lg" mb={rem(80)}>
				<Container>
					<Divider mb="lg" color="gray.2" />
					<Title order={4} fw={600} mb="lg">
						Popular Tags
					</Title>
					<SimpleGrid cols={6} spacing={rem(28)}>
						{times(6, (i) => (
							<Paper
								key={`tag-${i}`}
								style={{
									backgroundImage: `url("https://images.unsplash.com/photo-1593508512255-86ab42a8e620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDExfHx2cnxlbnwwfHx8fDE2ODY5NTM3MTl8MA&ixlib=rb-4.0.3&q=80&w=1000")`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									borderRadius: rem(6),
									position: 'relative',
									aspectRatio: '186/144'
								}}
							>
								<Box
									style={{
										position: 'absolute',
										bottom: rem(16),
										left: rem(16)
									}}
								>
									<Badge label="Apple" color="violet" />
								</Box>
							</Paper>
						))}
					</SimpleGrid>
				</Container>
			</Box>
		</>
	)
}
