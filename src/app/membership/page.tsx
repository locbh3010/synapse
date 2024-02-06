import {
	Accordion,
	AccordionControl,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Container,
	Divider,
	Group,
	List,
	ListItem,
	Paper,
	SimpleGrid,
	Switch,
	Text,
	ThemeIcon,
	Title,
	rem
} from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import { map } from 'lodash'

const pricingPlans = [
	{
		pricing: 0,
		title: 'Free',
		description: 'Sign up to be notified of new free content.',
		features: ['Full access to all free posts', 'Regular content updates'],
		button: 'Sign up for free'
	},
	{
		pricing: 9,
		title: 'Premium Monthly',
		description: 'Get access to our library of paid members only posts.',
		features: [
			'Full access to all free posts',
			'Access to all premium posts',
			'Regular content updates'
		],
		button: 'Sign up now'
	},
	{
		pricing: 14,
		title: 'Premium Plus Monthly',
		description: 'Get access to our library of paid members only posts.',
		features: [
			'Full access to all free posts',
			'Access to all premium posts',
			'Access to all premium plus posts',
			'Regular content updates'
		],
		button: 'Sign up now'
	}
]

const faqs = [
	{
		title: 'Does Synapse offer support?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum mauris vel bibendum plcerat. Nulla dictum lorem id ultrices tristique. Phasellus orci ligula, suscipit quis dui eget, euismod tempus leo. In sed leo in nulla cursus malesuada. Nunc gravida auctor hendrerit. Proin ac nunc maximus, convallis arcu quis, placerat magna. Quisque non arcu ut nisi tempor elementum nec ultricies libero. Quisque placerat sed nulla vitae lobortis.'
	},
	{
		title: 'What is Synapse?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum mauris vel bibendum plcerat. Nulla dictum lorem id ultrices tristique. Phasellus orci ligula, suscipit quis dui eget, euismod tempus leo. In sed leo in nulla cursus malesuada. Nunc gravida auctor hendrerit. Proin ac nunc maximus, convallis arcu quis, placerat magna. Quisque non arcu ut nisi tempor elementum nec ultricies libero. Quisque placerat sed nulla vitae lobortis.'
	},
	{
		title: 'What`s included with my membership?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum mauris vel bibendum plcerat. Nulla dictum lorem id ultrices tristique. Phasellus orci ligula, suscipit quis dui eget, euismod tempus leo. In sed leo in nulla cursus malesuada. Nunc gravida auctor hendrerit. Proin ac nunc maximus, convallis arcu quis, placerat magna. Quisque non arcu ut nisi tempor elementum nec ultricies libero. Quisque placerat sed nulla vitae lobortis.'
	}
]

export default function page() {
	return (
		<Container pt={rem(80)} pb={rem(160)}>
			<Box
				component="section"
				mb={rem(80)}
				style={{
					textAlign: 'center',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Title order={1} mb="xl" fw={600} fz={rem(60)}>
					Membership
				</Title>
				<Text fw={600} size="xl" lh="relax" maw="42rem">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore.
				</Text>
			</Box>
			<Box p="4rem" mb="5rem" bg="#f3f4f6">
				<Group justify="center" align="center" gap="sm" mb="3.5rem">
					<Text size="sm">Monthly</Text>
					<Switch defaultChecked size="lg" />
					<Text size="sm">Yearly</Text>
				</Group>
				<SimpleGrid cols={3} spacing="2.5rem">
					{map(pricingPlans, (plan) => (
						<Paper
							p="2.5rem"
							radius="md"
							key={plan.title}
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start'
							}}
						>
							<Group align="baseline" mb="1.25rem" gap={0}>
								<Text fw={600} lh="2.5rem" fz="2.25rem">
									${plan.pricing}
								</Text>
								<Text fz="sm"> / month</Text>
							</Group>
							<Title mb="md" order={3} fz="xl" fw={600} lh="2rem">
								{plan.title}
							</Title>
							<Text fz="lg" lh="1.75rem">
								{plan.description}
							</Text>
							<Divider my={rem(28)} />
							<List
								mb="auto"
								size="md"
								spacing="sm"
								center
								icon={
									<ThemeIcon size="sm" variant="light">
										<IconCheck size="14px" />
									</ThemeIcon>
								}
							>
								{map(plan.features, (feature) => (
									<ListItem key={feature}>{feature}</ListItem>
								))}
							</List>
							<Button size="md" mt={rem(28)} radius="xl">
								{plan.button}
							</Button>
						</Paper>
					))}
				</SimpleGrid>
			</Box>
			<Box
				style={{
					maxWidth: '56rem',
					margin: '0 auto'
				}}
			>
				<Title mb="xl" fw={600} order={3} fz={rem(30)}>
					FAQs
				</Title>
				<Accordion>
					{map(faqs, (faq) => (
						<AccordionItem key={faq.title} value={faq.title}>
							<AccordionControl>{faq.title}</AccordionControl>
							<AccordionPanel>{faq.content}</AccordionPanel>
						</AccordionItem>
					))}
				</Accordion>
			</Box>
		</Container>
	)
}
