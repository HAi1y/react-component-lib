import * as React from 'react';
import { UIAccessibilityElement } from './UIAccessibilityElement';
import { FontStyle } from './UITextView';
import { UIView } from './UIView';
import { UIAccessibilityTrait } from './UIAccessibilityTrait';
import { UIWindow } from './UIWindow';
import { Classes } from './Classes';
import { UIAccessibilityCustomAction } from './UIAccessibilityCustomAction';

export interface UIButtonProps {
	text: string
	fontStyle?: FontStyle
	classes?: Classes
	a11yElement?: UIAccessibilityElement
	onClick?: () => any
}

export function UIButton({ text, fontStyle = FontStyle.body, classes = new Classes, a11yElement, onClick }: UIButtonProps) {

	if (!a11yElement) {
		a11yElement = UIWindow.newElement()
		a11yElement.label = text
		a11yElement.traits.push(UIAccessibilityTrait.button)

		if (!onClick) {
			a11yElement.traits.push(UIAccessibilityTrait.notEnabled)
		} else {
			a11yElement.actions.push(new UIAccessibilityCustomAction("Default", onClick))
			a11yElement.hint = "Default action available."
		}
	}

	classes.push(fontStyle)

	return (
		<UIView classes={classes} a11yElement={a11yElement}>
			<button className="moba11y-button">{text}</button>
		</UIView>
	)
}

export interface UIButtonNavProps {
	text: string
	fontStyle?: FontStyle
	classes?: Classes
	a11yElement?: UIAccessibilityElement
	href?: string
}

export function UIButtonNav({ text, fontStyle = FontStyle.body, classes = new Classes, a11yElement, href }: UIButtonNavProps) {

	if (!a11yElement) {
		a11yElement = UIWindow.newElement()
		a11yElement.label = text
		a11yElement.traits.push(UIAccessibilityTrait.button)

		if (!href) {
			a11yElement.traits.push(UIAccessibilityTrait.notEnabled)
		} else {
			a11yElement.actions.push(new UIAccessibilityCustomAction(
				"Default", () => { if (window !== undefined && href) window.location.href = href }
			))
			a11yElement.hint = "Activate to follow link."
		}
	}

	classes.push(fontStyle)

	return (
		<UIView classes={classes} a11yElement={a11yElement}>
			<a href={href} className="moba11y-button nav">{text}</a>
		</UIView>
	)
}