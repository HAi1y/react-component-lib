import * as React from 'react';
import { UIAccessibilityElement } from '../UIAccessibilityElement';
import { Classes } from './Classes';
import { UIWindow } from '../UIWindow';
import { RotorSettings } from '../IOSSimulator';

export interface UIViewProps {
	classes?: Classes
	a11yElement: UIAccessibilityElement
}

export function UIView({ classes = new Classes, a11yElement, children }: React.PropsWithChildren<UIViewProps>) {

	classes.addClass("ios")
	classes.addClass("accessibility-element")

	if (a11yElement !== null) {

		const [isAccessibilityFocused, setIsAccessibilityFocused] = React.useState(false)

		a11yElement.setIsAccessibilityFocused = setIsAccessibilityFocused
		a11yElement.rotor.add(RotorSettings.Characters)

		if (isAccessibilityFocused) {
			classes.addClass("accessibility-focus")
		} else {
			classes.removeClass("accessibility-focus")
		}

		React.useEffect(() => {
			UIWindow.add(a11yElement)

			return (() => {
				UIWindow.remove(a11yElement)
			})
		})
	}

	function onHover() {
		UIWindow.focus(a11yElement)
	}

	return (
		<div className={classes.toClassName()} onMouseEnter={onHover}>
			{children}
		</div>
	)
}