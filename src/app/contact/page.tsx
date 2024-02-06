import {
	Alert,
	AspectRatio,
	Button,
	Center,
	Container,
	Image,
	Text,
	TextInput,
	Textarea,
	Title,
	rem
} from '@mantine/core'
import { IconInfoCircle, IconMoodHappy } from '@tabler/icons-react'

export default function page() {
	return (
		<Container size="sm" pt={rem(80)} pb={rem(160)}>
			<Title
				order={1}
				style={{ textAlign: 'center' }}
				mb="xl"
				fz="60px"
				lh="1"
				fw={600}
			>
				Contact
			</Title>
			<AspectRatio
				ratio={704 / 396}
				style={{
					overflow: 'hidden',
					marginBottom: rem(80)
				}}
			>
				<Image
					radius="md"
					fit="cover"
					alt="Contact image"
					src="https://images.unsplash.com/photo-1559030623-0226b1241edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE3fHxjb250YWN0fGVufDB8fHx8MTY4NzkyNDg2MXww&ixlib=rb-4.0.3&q=80&w=2000"
				/>
			</AspectRatio>

			<Alert
				variant="light"
				color="violet"
				title="Success"
				icon={<IconMoodHappy size="20px" />}
				mb="xl"
			>
				<Text c="violet">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis,
					quae tempore necessitatibus placeat saepe.
				</Text>
			</Alert>

			<Alert
				variant="light"
				color="red"
				title="Failed"
				icon={<IconInfoCircle size="20px" />}
				mb="xl"
			>
				<Text c="red">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis,
					quae tempore necessitatibus placeat saepe.
				</Text>
			</Alert>

			<TextInput
				mb="xl"
				variant="filled"
				radius="sm"
				placeholder="Your name"
				size="lg"
			/>
			<TextInput
				mb="xl"
				variant="filled"
				radius="sm"
				placeholder="Your email address"
				size="lg"
			/>
			<Textarea
				mb="xl"
				variant="filled"
				radius="sm"
				placeholder="Your messages"
				size="lg"
				autosize
				minRows={4}
			/>
			<Center>
				<Button size="lg" radius="xl">
					Send message
				</Button>
			</Center>
		</Container>
	)
}
