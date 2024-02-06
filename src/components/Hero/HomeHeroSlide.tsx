import { Carousel, CarouselSlide } from '@mantine/carousel'
import {
	Avatar,
	Box,
	Flex,
	Group,
	Overlay,
	Paper,
	Text,
	Title,
	rem
} from '@mantine/core'
import { map } from 'lodash'
import Badge from '../Badge'

interface CardProps {
	image: string
	title: string
	badge?: { color: string; label: string }[]
	author: {
		avatar: string
		name: string
	}
}

function Card({ image, title, badge, author }: CardProps) {
	return (
		<Paper
			shadow="md"
			p="lg"
			h={rem(480)}
			radius="md"
			style={{ backgroundImage: `url(${image})`, overflow: 'hidden' }}
		>
			<Flex direction="column" justify="flex-end" h="100%" pos="relative">
				<Box
					style={{
						zIndex: 2,
						position: 'relative'
					}}
				>
					<Group gap="xs" mb="sm">
						{map(badge, (item, index) => (
							<Badge key={index} label={item.label} color={item.color} />
						))}
					</Group>
					<Title
						mb="xs"
						order={3}
						style={{
							color: 'white',
							lineHeight: '2.3'
						}}
					>
						<Text
							component="span"
							p="xs"
							bg="var(--bg-header)"
							fw={600}
							fz="xl"
							style={{
								borderRadius: rem(6),
								display: 'inline',
								lineHeight: '2.3'
							}}
							className="decoration-clone"
						>
							{title}
						</Text>
					</Title>
					<Group gap="sm">
						<Avatar size={rem(32)} src={author?.avatar} alt={author?.name} />
						<Text size="xs" c="white">
							by <strong>{author?.name}</strong>
						</Text>
					</Group>
				</Box>

				<Overlay
					m="-lg"
					zIndex={1}
					opacity={1}
					gradient="linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 50%)"
				/>
			</Flex>
		</Paper>
	)
}

const data = [
	{
		image:
			'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Best forests to visit in North America',
		badge: [
			{ label: 'Travel', color: 'blue' },
			{ label: 'Nature', color: 'green' }
		],
		author: {
			avatar:
				'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
			name: 'John Doe'
		}
	},
	{
		image:
			'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Hawaii beaches review: better than you think',
		badge: [{ label: 'Travel', color: 'blue' }],
		author: {
			avatar:
				'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
			name: 'John Doe'
		}
	},
	{
		image:
			'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Mountains at night: 12 best locations to enjoy the view',
		badge: [
			{ label: 'Travel', color: 'blue' },
			{ label: 'Nature', color: 'green' },
			{ label: 'Night', color: 'indigo' }
		],
		author: {
			avatar:
				'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
			name: 'John Doe'
		}
	},
	{
		image:
			'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Aurora in Norway: when to visit for best experience',
		badge: [
			{ label: 'Travel', color: 'blue' },
			{ label: 'Nature', color: 'green' }
		],
		author: {
			avatar:
				'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
			name: 'John Doe'
		}
	},
	{
		image:
			'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Best places to visit this winter',
		badge: [
			{ label: 'Travel', color: 'blue' },
			{ label: 'Winter', color: 'cyan' },
			{ label: 'Nature', color: 'green' }
		],
		author: {
			avatar:
				'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
			name: 'John Doe'
		}
	},
	{
		image:
			'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Active volcanos reviews: travel at your own risk',
		badge: [
			{ label: 'Travel', color: 'blue' },
			{ label: 'Nature', color: 'green' }
		],
		author: {
			avatar:
				'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
			name: 'John Doe'
		}
	}
]

export default function HomeHeroSlide() {
	const slides = data.map((item) => (
		<CarouselSlide key={item.title}>
			<Card {...item} />
		</CarouselSlide>
	))

	return (
		<Carousel
			slideSize={100 / 3 + '%'}
			slideGap={rem(28)}
			align="start"
			slidesToScroll={3}
			withControls={false}
			styles={{
				viewport: {
					overflow: 'visible'
				}
			}}
		>
			{slides}
		</Carousel>
	)
}
