import { Button, Chip, Container, Switch } from '@mantine/core'

export default function Home() {
	return (
		<div>
			<Container fluid>
				<h1>home page</h1>

				<Button variant="light">Click me</Button>

				<Chip>Chip 1</Chip>

				<Switch
					label="I agree to sell my privacy"
					onLabel="On"
					offLabel="Off"
					size="xl"
				/>
			</Container>
		</div>
	)
}
