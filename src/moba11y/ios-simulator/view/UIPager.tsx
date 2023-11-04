import * as React from 'react';
import { UIVIew } from './UIView';
import { UIWindow } from '../UIWindow';
import { UIAccessibilityElement } from '../UIAccessibilityElement';
import { UIAccessibilityTrait } from '../UIAccessibilityTrait';
import { Classes } from './Classes';

export interface UIPagerProps {
	initial: number
	max: number
	createView: (index: number) => React.ReactElement
	a11yElement?: UIAccessibilityElement
	classes?: Classes
}

export function UIPager({ initial, max, createView, a11yElement, classes = new Classes }: React.PropsWithChildren<UIPagerProps>) {

	var [current, setIndex] = React.useState(initial);

	classes.addClass("pager")

	if (!a11yElement) {
		a11yElement = UIWindow.newElement()
		a11yElement.label = "Page"
		a11yElement.value = current + " of " + max
		a11yElement.traits.push(UIAccessibilityTrait.adjustable)

		if (onclick) {
			a11yElement.hint = "Activate to perform default action."
		}
	}

	function updateValue(value: string) {
		if (a11yElement) {
			a11yElement.value = value
		}
	}

	a11yElement.increment = () => {

		if (current >= max) {
			current = 1;
			setIndex(current)
		} else {
			setIndex(++current)
		}

		updateValue(current + " of " + max)
	}

	a11yElement.decrement = () => {

		if (current - 1 <= 0) {
			current = max;
			setIndex(current)
		} else {
			setIndex(--current)
		}

		updateValue(current + " of " + max)
	}

	var result: Array<React.ReactElement> = []

	for (var i = 0; i < max; i++) {
		result.push(<span key={i} className={current - 1 === i ? "active" : ""} />)
	}

	return (<>
		{createView(current)}
		<UIVIew classes={classes} a11yElement={a11yElement}>
			<div>
				{result}
			</div>
		</UIVIew>
	</>
	)
}