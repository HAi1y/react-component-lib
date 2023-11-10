import * as React from 'react';
import { UIAccessibilityElement } from '../UIAccessibilityElement';
import { UIView } from './UIView';
import { UIWindow } from '../UIWindow';
import { Classes } from './Classes';
import { UIAccessibilityCustomAction } from '../UIAccessibilityCustomAction';

export interface UITextFieldProps {
	label: string
	value?: string
	classes?: Classes
	a11yElement?: UIAccessibilityElement
	errors?: Array<string>
	onClick?: () => any
}

export function UITextField({ label, value, classes = new Classes, a11yElement }: UITextFieldProps) {

	if (a11yElement === undefined) {
		a11yElement = UIWindow.newElement()
		a11yElement.label = label
		a11yElement.value = value

		a11yElement.actions.push(new UIAccessibilityCustomAction(
			"Default",
			() => {
				if (window) window.document.getElementById(label)?.focus()
			}
		))
	}

	classes.push("text-field")

	return (
		<UIView classes={classes} a11yElement={a11yElement}>
			<label htmlFor={label}>{label}</label>
			<input type="text" value={value} id={label} name={label} />
		</UIView>
	)
}

export function UITextField2({ label, value, classes = new Classes }: UITextFieldProps) {

	var labelElement = UIWindow.newElement()
	labelElement.label = label

	var inputElement = UIWindow.newElement()
	inputElement.value = value

	inputElement.actions.push(new UIAccessibilityCustomAction(
		"Default",
		() => {
			if (window) window.document.getElementById(label)?.focus()
		}
	))

	return (
		<div className="ios text-field">
			<UIView classes={classes} a11yElement={labelElement}>
				<label htmlFor={label}>{label}</label>
			</UIView>
			<UIView classes={classes} a11yElement={inputElement}>
				<input type="text" value={value} id={label} name={label} onFocus={() => UIWindow.announce("insertion point at end")} />
			</UIView>
		</div>
	)
}