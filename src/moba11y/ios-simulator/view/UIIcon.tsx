import * as React from 'react';
import { UIAccessibilityElement } from '../UIAccessibilityElement';
import { UIView } from './UIView';
import { UIWindow } from '../UIWindow';
import { UIAccessibilityCustomAction } from '../UIAccessibilityCustomAction';

export interface UIIconProps {
	label: string
	classes: Array<string>
	href?: string
	a11yElement?: UIAccessibilityElement
	onClick?: () => any
}

export function UIIcon({ label, classes, href, a11yElement, children }: React.PropsWithChildren<UIIconProps>) {

	if (!a11yElement) {
		a11yElement = UIWindow.newElement()
		a11yElement.label = label

		if (onclick) {
			a11yElement.hint = "Activate to perform default action."
		}
	}

	a11yElement.actions.push(new UIAccessibilityCustomAction(
		"Default",
		() => { if (window && href) window.location.href = href }
	))

	return (
		<UIView classes={classes} a11yElement={a11yElement}>
			{children}
			<div>{label}</div>
		</UIView>
	)
}
