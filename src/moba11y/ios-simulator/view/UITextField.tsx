import * as React from 'react';
import { UIAccessibilityElement } from './UIAccessibilityElement';
import { UIView } from './UIView';
import { UIWindow } from './UIWindow';
import { Classes } from './Classes';
import { UIAccessibilityCustomAction } from './UIAccessibilityCustomAction';
import { UITextView } from './UITextView';
import { Rotor, RotorSettings } from '../IOSSimulator';

export interface UITextFieldProps {
	label: string
	value?: string
	classes?: Classes
	a11yElement?: UIAccessibilityElement
	errors?: Array<string>
	onClick?: () => any
}

export interface UIInputProps {
	a11yElement: UIAccessibilityElement,
	value?: string,
	label: string
}

export function UIInput({ a11yElement, value, label }: UIInputProps) {

	function logSelection(event: React.SyntheticEvent<HTMLInputElement, Event>) {

		const currentTarget = event.currentTarget

		a11yElement.index = currentTarget.selectionStart ? currentTarget.selectionStart : 0
		a11yElement.rotor = new Rotor
		a11yElement.rotor.push(RotorSettings.Characters)
		a11yElement.rotor.setTo(RotorSettings.Characters)
		UIWindow.setRotor(a11yElement.rotor)
		a11yElement.requestAccessibilityFocus()
		a11yElement.character = (up: boolean) => {

			var value = currentTarget.value

			if (up && a11yElement.index < value.length) {
				a11yElement.index++
			} else if (!up && a11yElement.index > 0) {
				a11yElement.index--
			} else {
				return ""
			}

			currentTarget.select()
			currentTarget.setSelectionRange(a11yElement.index, a11yElement.index)

			return value.charAt(a11yElement.index)
		}

		currentTarget.setSelectionRange(a11yElement.index, a11yElement.index)
		return event
	}

	return (<input type="text" defaultValue={value} id={label} name={label}
		onSelect={(event) => logSelection(event)}
		onFocus={() => {
			UIWindow.announce("Insertion point at end.")
		}} />
	)

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

	errors?.forEach(error => {
		var a11yElement = new UIAccessibilityElement
		a11yElement.hidden = true
		a11yElement.value += " " + error
		errorElements.push(<div style={{ margin: "0 2em" }} >
			<UITextView text={error} a11yElement={a11yElement} />
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