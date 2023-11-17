import * as React from 'react';

export interface ToggleButtonProps {
	onClick: (isExpanded: boolean) => any;
	description?: string;
	className?: string;
}

export function ToggleButton({ children, className, description, onClick }: React.PropsWithChildren<ToggleButtonProps>) {

	const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		event.stopPropagation();

		const button: HTMLButtonElement = event.currentTarget;

		button.classList.toggle('opened');

		var pressed = button.classList.contains('opened');

		button.setAttribute('aria-pressed', "" + pressed);

		if (onClick) {
			onClick(pressed)
		}
	};

	return (
		<button className={className}
			onClick={buttonHandler}
			aria-label={description}
			aria-pressed={false}
			disabled={typeof onClick === 'undefined'}
		>
			{children}
		</button>
	)
}

export interface ButtonProps {
	onClick: () => any;
	description?: string;
	className?: string;
}

export function CTAButton({ children, className, description, onClick }: React.PropsWithChildren<ButtonProps>) {
	return (<button className={className + " moba11y-button"}
		onClick={onClick}
		aria-label={description}
		aria-pressed={false}
	>{children}</button>)
}