import * as React from 'react';
import { UIAccessibilityElement } from '../UIAccessibilityElement';
import { Classes } from './Classes';

export interface UIViewProps {
	classes?: Classes
	a11yElement: UIAccessibilityElement
}

export function UIView({ classes = new Classes, a11yElement, children }: React.PropsWithChildren<UIViewProps>) {

	classes.addClass("ios")
	classes.addClass("accessibility-element")

	const [isAccessibilityFocused, setIsAccessibilityFocused] = React.useState(false)

	a11yElement.setIsAccessibilityFocused = setIsAccessibilityFocused

	if (isAccessibilityFocused) {
		classes.addClass("accessibility-focus")
	} else {
		classes.removeClass("accessibility-focus")
	}

	return (
		<div className={classes.toClassName()}>
			{children}
		</div>
	)
}