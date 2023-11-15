import * as React from 'react';
import { UIView } from './UIView';
import { Classes } from './Classes';
import { UIAccessibilityElement } from './UIAccessibilityElement';
import { UIWindow } from './UIWindow';
import { UIAccessibilityTrait } from './UIAccessibilityTrait';


export enum FontStyle {
	title = "title-1",
	body = "body"
}

export interface UITextViewProps {
	text: string
	fontStyle?: FontStyle
	classes?: Classes
	a11yElement?: UIAccessibilityElement
	style?: React.CSSProperties
}

export function UITextView({ text, fontStyle = FontStyle.body, classes = new Classes, a11yElement, style }: UITextViewProps) {

	if (a11yElement === undefined) {
		a11yElement = UIWindow.newElement()
		a11yElement.label = text
		a11yElement.traits.push(UIAccessibilityTrait.none)
	}

	classes.push(fontStyle)

	return (
		<UIView a11yElement={a11yElement} classes={classes} style={style}>
			{text}
		</UIView>
	)
}

export function UITitle({ text, fontStyle = FontStyle.title, classes = new Classes, a11yElement, style }: UITextViewProps) {

	if (!a11yElement) {
		a11yElement = UIWindow.newElement()
		a11yElement.label = text
		a11yElement.traits.push(UIAccessibilityTrait.heading)
	}

	classes.push(fontStyle);
	classes.push("text-view")

	return (
		<div>
			<UIView a11yElement={a11yElement} classes={classes} style={style}>
				<h2>{text}</h2>
			</UIView>
		</div>
	)
}