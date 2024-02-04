import { FC, ReactNode, forwardRef } from 'react'
import Text from '../Typography/Text'
import cn from 'classnames'

const buttonClasses = {
	root: 'flex w-max items-center justify-center gap-2 rounded transition-all duration-200',
	size: {
		xs: 'px-3 h-6',
		sm: 'px-4 h-8',
		md: 'px-5 h-10',
		lg: 'px-6 h-12',
		xl: 'px-8 h-16'
	},
	variants: {
		filled: {
			default: {
				root: 'bg-dark text-white hover:bg-dark-hover',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			primary: {
				root: 'bg-primary text-white hover:bg-primary-600',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			secondary: {
				root: 'bg-secondary text-white hover:bg-secondary-600',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			info: {
				root: 'bg-info text-white hover:bg-info-600',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			success: {
				root: 'bg-success text-white hover:bg-success-600',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			warning: {
				root: 'bg-warning text-white hover:bg-warning-600',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			danger: {
				root: 'bg-danger text-white hover:bg-danger-600',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			}
		},
		outlined: {
			default: {
				root: 'border border-dark text-dark hover:bg-dark-hover hover:text-white',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD] !border-[#E9ECEF]'
			},
			primary: {
				root: 'border border-primary text-primary hover:bg-primary-600 hover:text-white',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD] !border-[#E9ECEF]'
			},
			secondary: {
				root: 'border border-secondary text-secondary hover:bg-secondary-600 hover:text-white',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD] !border-[#E9ECEF]'
			},
			info: {
				root: 'border border-info text-info hover:bg-info-600 hover:text-white',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD] !border-[#E9ECEF]'
			},
			success: {
				root: 'border border-success text-success hover:bg-success-600 hover:text-white',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD] !border-[#E9ECEF]'
			},
			warning: {
				root: 'border border-warning text-warning hover:bg-warning-600 hover:text-white',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD] !border-[#E9ECEF]'
			},
			danger: {
				root: 'border border-danger text-danger hover:bg-danger-600 hover:text-white',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD] !border-[#E9ECEF]'
			}
		},
		ghost: {
			default: {
				root: 'bg-transparent text-dark hover:bg-dark/10',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			primary: {
				root: 'bg-transparent text-primary hover:bg-primary-50',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			secondary: {
				root: 'bg-transparent text-secondary hover:bg-secondary-50',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			info: {
				root: 'bg-transparent text-info hover:bg-info-50',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			success: {
				root: 'bg-transparent text-success hover:bg-success-50',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			warning: {
				root: 'bg-transparent text-warning hover:bg-warning-50',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			danger: {
				root: 'bg-transparent text-danger hover:bg-danger-50',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			}
		},
		soft: {
			default: {
				root: 'bg-dark/10 text-dark/80 hover:bg-dark/20',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			primary: {
				root: 'bg-primary-50 text-primary hover:bg-primary-100',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			secondary: {
				root: 'bg-secondary-50 text-secondary hover:bg-secondary-100',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			info: {
				root: 'bg-info-50 text-info hover:bg-info-100',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			success: {
				root: 'bg-success-50 text-success hover:bg-success-100',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			warning: {
				root: 'bg-warning-50 text-warning hover:bg-warning-100',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			},
			danger: {
				root: 'bg-danger-50 text-danger hover:bg-danger-100',
				disabled: '!bg-[#E9ECEF] !text-[#ADB5BD]'
			}
		}
	},
	fullWidth: 'w-full',
	loading: 'cursor-not-allowed',
	iconSize: {
		xs: 'size-3 text-sm',
		sm: 'size-4 text-base',
		md: 'size-5 text-xl',
		lg: 'size-6 text-2xl',
		xl: 'size-8 text-[32px]'
	}
}

interface IButtonProps {
	size?: keyof typeof buttonClasses.size
	color?: keyof typeof buttonClasses.variants.filled
	variant?: keyof typeof buttonClasses.variants
	fullWidth?: boolean
	loading?: boolean
	loaderPosition?: 'left' | 'right'
	disabled?: boolean
	startIcon?: ReactNode
	endIcon?: ReactNode
	type?: 'button' | 'submit' | 'reset'
	children: ReactNode
	className?: string
	classNames?: {
		text?: string
		icon?: string
		root?: string
	}
	[key: string]: any
}

const Button: FC<IButtonProps> = forwardRef<HTMLButtonElement, IButtonProps>(
	({
		children,
		size = 'md',
		fullWidth = false,
		className,
		type = 'button',
		disabled = false,
		loading = false,
		loaderPosition = 'left',
		endIcon,
		startIcon,
		variant = 'filled',
		color = 'default',
		classNames,
		...rest
	}) => {
		return (
			<button
				className={cn(
					buttonClasses.root,
					{
						[buttonClasses.loading]: loading,
						[buttonClasses.fullWidth]: fullWidth,
						[buttonClasses.variants[variant][color].disabled]: disabled,
						'flex-row-reverse': loaderPosition === 'right'
					},
					buttonClasses.size[size],
					buttonClasses.variants[variant][color].root,
					className,
					classNames?.root
				)}
				type={type}
				disabled={disabled || loading}
				{...rest}
			>
				<Text size={size} className={classNames?.text}>
					{children}
				</Text>
			</button>
		)
	}
)

Button.displayName = 'Button'

export default Button
