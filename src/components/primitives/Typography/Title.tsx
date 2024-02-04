import { cva } from 'class-variance-authority'
import { FC, ReactNode, forwardRef } from 'react'
import cn from 'classnames'

const titleClasses = cva('font-bold', {
	variants: {
		level: {
			1: 'text-[40px] leading-[1.2]',
			2: 'text-[32px] leading-[1.35]',
			3: 'text-2xl leading-[1.33]',
			4: 'text-lg leading-[1.2]',
			5: 'text-base leading-tight',
			6: 'text-sm leading-[1.33]'
		}
	}
})

interface ITitleProps {
	level?: 1 | 2 | 3 | 4 | 5 | 6
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	children: ReactNode
	className?: string
	[key: string]: any
}

const Title: FC<ITitleProps> = forwardRef<HTMLHeadingElement, ITitleProps>(
	({ as: Tag = 'h5', children, className, level = 5, ...rest }, ref) => {
		return (
			<Tag
				{...rest}
				className={cn(titleClasses({ level, className }))}
				ref={ref}
			>
				{children}
			</Tag>
		)
	}
)

Title.displayName = 'Title'

export default Title
