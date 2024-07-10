import React, { forwardRef } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
	className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ children, className, ...props }, ref) {
	return (
		<button ref={ref} className={className} {...props}>
			{children}
		</button>
	)
})
Button.displayName = 'Button'

export { Button }
