"use client"
import * as React from 'react';
import { UIView } from './UIView';
import { UIAccessibilityElement } from './UIAccessibilityElement';
import { UIAccessibilityTrait } from './UIAccessibilityTrait';
import { Classes } from './Classes';
import { UIWindow } from './UIWindow';
import { Rotor, RotorSettings } from '../IOSSimulator';

export interface UIPagerProps {
	initial: number
	max: number
	onChange: (current: number) => any
	a11yElement?: UIAccessibilityElement
	classes?: Classes
	label?: string
}

export function UIPager({ label, initial, max, onChange, a11yElement, classes = new Classes }: React.PropsWithChildren<UIPagerProps>) {

	var [current, setIndex] = React.useState(initial);

	classes.addClass("pager")

	if (a11yElement === undefined) {
		a11yElement = UIWindow.newElement()
		a11yElement.label = label ? label : "Page"
		a11yElement.value = current + " of " + max
		a11yElement.traits.push(UIAccessibilityTrait.adjustable)
		a11yElement.rotor = new Rotor().add(RotorSettings.Adjustable)
		a11yElement.rotor.setTo(RotorSettings.Adjustable)

		if (onclick) {
			a11yElement.hint = "Activate to perform default action."
		}

		a11yElement.increment = () => {

			if (current >= max) {
				current = max;
				setIndex(current)
			} else {
				setIndex(++current)
				if (onChange) onChange(current)
				a11yElement?.requestAccessibilityFocus()
			}

			updateValue(current + " of " + max)
		}

		a11yElement.decrement = () => {

			if (current - 1 < 1) {
				current = 1;
				setIndex(current)
			} else {
				setIndex(--current)
				if (onChange) onChange(current)
				a11yElement?.requestAccessibilityFocus()
			}

			updateValue(current + " of " + max)
		}
	}

	function updateValue(value: string) {
		if (a11yElement) {
			a11yElement.value = value
		}
	}

	var result: Array<React.ReactElement> = []

	for (var i = 0; i < max; i++) {
		result.push(<span key={i} className={current - 1 === i ? "active" : ""} />)
	}

	return (<>
		<UIView classes={classes} a11yElement={a11yElement}>
			<div>
				{result}
			</div>
		</UIView>
	</>
	)
}