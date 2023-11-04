import * as React from 'react';
import { UIAccessibilityElement } from '../UIAccessibilityElement';

export interface UIViewProps {
	classes?: Array<string>
	a11yElement: UIAccessibilityElement
}

export function UIView({ classes = [], a11yElement, children }: React.PropsWithChildren<UIViewProps>) {

	if (!classes.includes("ios")) classes.push("ios")
	if (!classes.includes("accessibility-element")) classes.push("accessibility-element")

	const [isAccessibilityFocused, setIsAccessibilityFocused] = React.useState(false)

	a11yElement.setIsAccessibilityFocused = setIsAccessibilityFocused

	if (isAccessibilityFocused) {
		if (!classes.includes("accessibility-focus")) classes.push("accessibility-focus")
	} else {
		if (classes.includes("accessibility-focus")) {
			classes.splice(classes.indexOf("accessibility-focus"), 1)
		}
	}

	return (
		<div className={classes.join(' ')}>
			{children}
		</div>
	)
}