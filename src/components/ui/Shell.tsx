import * as React from 'react'

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
	as?: React.ElementType
}

function Shell({ className, as: Comp = 'div', ...props }: ShellProps) {
	return <Comp className={className} {...props} />
}

export { Shell }
