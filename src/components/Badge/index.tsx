import { Box } from '@mantine/core'
import styles from '@styles/components/Badge.module.css'

interface IBadgeProps {
	label: string
	color?: string
}

export default function Badge({ label, color = 'blue' }: IBadgeProps) {
	return (
		<span className={styles.badgeRoot}>
			<Box
				component="span"
				className={styles.badgeDot}
				style={{
					'--badge-color': `var(--mantine-color-${color}-6)`
				}}
			/>
			<span>{label}</span>
		</span>
	)
}
