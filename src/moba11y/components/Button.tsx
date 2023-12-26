import * as React from 'react';
import { Classes } from '../Classes';

export interface ToggleButtonProps {
	onClick: (isExpanded: boolean) => any;
	description?: string;
	className?: string;
}

export function ToggleButton({ children, className, description, onClick }: React.PropsWithChildren<ToggleButtonProps>) {

	var [pressed, setPressed] = React.useState(false)

	const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		event.stopPropagation();

		pressed = !pressed

		if (onClick) {
			onClick(pressed)
		}

		setPressed(pressed)
	};

	const classes = new Classes

	if (pressed) classes.push("opened")

	if (className) classes.push(className)

	return (
		<button className={className}
			onClick={buttonHandler}
			aria-label={description}
			aria-pressed={pressed}
			disabled={typeof onClick === 'undefined'}
		>
			{children}
		</button>
	)
}

export interface ButtonProps {
	onClick: () => any;
	description: string;
	className?: string;
}

export function CTAButton({ children, className, description, onClick }: React.PropsWithChildren<ButtonProps>) {
	return (<button className={className + " moba11y-button"}
		onClick={onClick}
		aria-label={description}
	>{children}</button>)
}