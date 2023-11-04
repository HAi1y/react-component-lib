import * as React from 'react';
import { UIAccessibilityElement } from '../UIAccessibilityElement';
import { UIView } from './UIView';
import { UIWindow } from '../UIWindow';
import { UIAccessibilityTrait } from '../UIAccessibilityTrait';


export enum FontStyle {
	title = "title-1",
	body = "body"
}

export interface UITextViewProps {
	text: string
	fontStyle?: FontStyle
	classes?: Array<string>
	a11yElement?: UIAccessibilityElement
}

export function UITextView({ text, fontStyle = FontStyle.body, classes = [], a11yElement }: UITextViewProps) {

	if (!a11yElement) {
		a11yElement = UIWindow.newElement()
		a11yElement.label = text
		a11yElement.traits.push(UIAccessibilityTrait.none)
	}

	classes.push(fontStyle)

	return (
		<UIView a11yElement={a11yElement} classes={classes}>
			{text}
		</UIView>
	)
}

export function UITitle({ text, fontStyle = FontStyle.title, classes = [], a11yElement }: UITextViewProps) {

	if (!a11yElement) {
		a11yElement = UIWindow.newElement()
		a11yElement.label = text
		a11yElement.traits.push(UIAccessibilityTrait.none)
	}

	classes.push(fontStyle);
	classes.push("text-view")

	return (
		<div>
			<UIView a11yElement={a11yElement} classes={classes}>
				<h2 className={classes.join(' ')}>{text}</h2>
			</UIView>
		</div>
	)
}