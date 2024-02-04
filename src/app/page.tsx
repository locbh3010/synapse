'use client'

import Button from '@/components/primitives/Buttons/Button'

export default function Home() {
	return (
		<div className="mx-auto h-[200vh] max-w-[760px]">
			<h1>home page</h1>

			<div className="grid grid-flow-row auto-rows-auto grid-cols-5 items-center gap-8 py-3">
				<Button color="default" variant="soft" size="xs">
					Click me
				</Button>
				<Button color="default" variant="soft" size="sm">
					Click me
				</Button>
				<Button color="default" variant="soft">
					Click me
				</Button>
				<Button color="default" variant="soft" size="lg">
					Click me
				</Button>
				<Button color="default" variant="soft" size="xl">
					Click me
				</Button>

				<Button color="primary" variant="soft" size="xs">
					Click me
				</Button>
				<Button color="primary" variant="soft" size="sm">
					Click me
				</Button>
				<Button color="primary" variant="soft">
					Click me
				</Button>
				<Button color="primary" variant="soft" size="lg">
					Click me
				</Button>
				<Button color="primary" variant="soft" size="xl">
					Click me
				</Button>

				<Button color="secondary" variant="soft" size="xs">
					Click me
				</Button>
				<Button color="secondary" variant="soft" size="sm">
					Click me
				</Button>
				<Button color="secondary" variant="soft">
					Click me
				</Button>
				<Button color="secondary" variant="soft" size="lg">
					Click me
				</Button>
				<Button color="secondary" variant="soft" size="xl">
					Click me
				</Button>
			</div>
		</div>
	)
}
