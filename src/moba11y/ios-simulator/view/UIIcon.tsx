import * as React from 'react';
import { UIAccessibilityElement } from '../UIAccessibilityElement';
import { UIView } from './UIView';
import { UIWindow } from '../UIWindow';
import { UIAccessibilityCustomAction } from '../UIAccessibilityCustomAction';
import { Classes } from './Classes';

export interface UIIconProps {
	label: string
	classes?: Classes
	href?: string
	a11yElement?: UIAccessibilityElement
	onClick?: () => any
}

export function UIIcon({ label, onClick, classes = new Classes, href, a11yElement, children }: React.PropsWithChildren<UIIconProps>) {

	if (!a11yElement) {
		a11yElement = UIWindow.newElement()
		a11yElement.label = label

		if (onClick) {
			a11yElement.hint = "Activate to perform default action."
		}
	}

	a11yElement.actions.push(new UIAccessibilityCustomAction(
		"Default",
		() => {
			if (window !== undefined && href) window.location.href = href
			if (onClick) onClick()
		}
	))

	return (
		<UIView classes={classes} a11yElement={a11yElement}>
			{children}
			<div>{label}</div>
		</UIView>
	)
}
