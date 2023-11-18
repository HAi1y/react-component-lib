import * as React from 'react';
import { UIAccessibilityElement } from './UIAccessibilityElement';
import { UIView } from './UIView';
import { UIWindow } from './UIWindow';
import { Classes } from './Classes';
import { UIAccessibilityCustomAction } from './UIAccessibilityCustomAction';
import { UITextView } from './UITextView';
import { UIInput } from './UIInput';

export interface UITextFieldProps {
	label: string
	value?: string
	classes?: Classes
	a11yElement?: UIAccessibilityElement
	errors?: Array<string>
	onClick?: () => any
}

export function UITextField({ label, value, classes = new Classes, a11yElement, errors }: UITextFieldProps) {

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

	var errorElements: Array<React.ReactNode> = []


	errors?.forEach((error, index) => {
		if (a11yElement) a11yElement.value += ", Error: " + error
		errorElements.push(<div key={index} style={{ margin: "0 2em" }} >
			<UITextView text={error} a11yElement={new UIAccessibilityElement(true)} />
		</div>)
	})

	return (
		<UIView style={{ display: "block" }} classes={classes} a11yElement={a11yElement}>
			<div>
				<label htmlFor={label}>{label}</label>
				<UIInput value={value} label={label} a11yElement={a11yElement} />
			</div>
			{errorElements}
		</UIView>
	)
}