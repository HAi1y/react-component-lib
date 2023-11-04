import * as React from 'react';
import { UIAccessibilityElement } from '../UIAccessibilityElement';
import { FontStyle } from './UITextView';
import { UIView } from './UIView';
import { UIAccessibilityTrait } from '../UIAccessibilityTrait';
import { UIWindow } from '../UIWindow';

export interface UIButtonProps {
	text: string
	fontStyle?: FontStyle
	className?: string
	a11yElement?: UIAccessibilityElement
	onClick?: () => any
}

export function UIButton({ text, fontStyle = FontStyle.body, className, a11yElement, onClick }: UIButtonProps) {

	if (!a11yElement) {
		a11yElement = UIWindow.newElement()
		a11yElement.label = text

		if (!onClick) {
			a11yElement.traits.push(UIAccessibilityTrait.notEnabled)
		}
	}

	return (
		<UIView className={[className, fontStyle].join(' ')} a11yElement={a11yElement}>
			<button onClick={onClick}>{text}</button>
		</UIView>
	)
}