import lightLogo from '@/assets/images/light-logo.svg'
import { MENU_LIST } from '@/layout/constants'
import {
	Anchor,
	AppShellHeader,
	Button,
	Container,
	Group,
	Image,
	rem
} from '@mantine/core'
import { map } from 'lodash'
import NextImage from 'next/image'
import Link from 'next/link'
import SearchModal from './SearchModal'
import { ROUTES } from '@/utils/routes'

export default function Header() {
	return (
		<AppShellHeader pos="static" bg="var(--bg-header)">
			<Container size="normal" px="xl" h="100%">
				<Group justify="space-between" align="center" h="inherit">
					<Link title="Home page" href={ROUTES.HOME}>
						<Image
							h={rem(40)}
							src={lightLogo}
							alt="Logo"
							component={NextImage}
						/>
					</Link>
					<Group gap={rem(28)} align="center" component="nav">
						{map(MENU_LIST, (item) => (
							<Anchor
								component={Link}
								style={{
									textTransform: 'capitalize'
								}}
								c="white"
								fw={600}
								key={item.label}
								title={item.label}
								href={item.path}
							>
								{item.label}
							</Anchor>
						))}
						<Group gap="md" component="ul" p={0}>
							<Button radius="xl">Join</Button>
							<SearchModal />
						</Group>
					</Group>
				</Group>
			</Container>
		</AppShellHeader>
	)
}
