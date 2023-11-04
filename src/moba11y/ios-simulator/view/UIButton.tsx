import * as React from 'react';
import { UIAccessibilityElement } from '../UIAccessibilityElement';
import { FontStyle } from './UITextView';
import { UIView } from './UIView';
import { UIAccessibilityTrait } from '../UIAccessibilityTrait';
import { UIWindow } from '../UIWindow';
import { Classes } from './Classes';

export interface UIButtonProps {
	text: string
	fontStyle?: FontStyle
	classes: Classes
	a11yElement?: UIAccessibilityElement
	onClick?: () => any
}

export function UIButton({ text, fontStyle = FontStyle.body, classes = new Classes, a11yElement, onClick }: UIButtonProps) {

	if (!a11yElement) {
		a11yElement = UIWindow.newElement()
		a11yElement.label = text

		if (!onClick) {
			a11yElement.traits.push(UIAccessibilityTrait.notEnabled)
		}
	}

	classes.push(fontStyle)
	return (
		<UIView classes={classes} a11yElement={a11yElement}>
			<button onClick={onClick}>{text}</button>
		</UIView>
	)
}