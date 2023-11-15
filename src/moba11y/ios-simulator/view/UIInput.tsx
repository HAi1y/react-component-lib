import React from "react"
import { Rotor, RotorSettings } from "../IOSSimulator"
import { UIAccessibilityElement } from "./UIAccessibilityElement"
import { UIWindow } from "./UIWindow"

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