import { cva } from 'class-variance-authority'
import { FC, ReactNode, forwardRef } from 'react'
import cn from 'classnames'

const textClasses = cva('font-inherit', {
	variants: {
		size: {
			xxs: 'text-[10px] leading-[1.2]',
			xs: 'text-xs leading-[1.16]',
			sm: 'text-sm leading-[1.14]',
			md: 'text-base leading-[1.14]',
			lg: 'text-lg leading-[1.11]',
			xl: 'text-xl leading-[1.2]'
		}
	}
})

interface ITextProps {
	size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	children: ReactNode
	className?: string
	[key: string]: any
}

const Text: FC<ITextProps> = forwardRef<HTMLParagraphElement, ITextProps>(
	({ size = 'md', children, className, ...rest }, ref) => {
		return (
			<p {...rest} ref={ref} className={cn(textClasses({ size, className }))}>
				{children}
			</p>
		)
	}
)

Text.displayName = 'Text'

export default Text
