import * as React from 'react';
import { UIAccessibilityElement } from './UIAccessibilityElement';
import { Classes } from './Classes';
import { UIPager } from './UIPager';

export interface UICarouselProps {
	views: Array<React.ReactNode>
	a11yElement?: UIAccessibilityElement
	classes?: Classes
	label?: string
}

export function UICarousel({ label, views, a11yElement, classes = new Classes }: React.PropsWithChildren<UICarouselProps>) {

	const initial = 1
	const max = views.length
	var [current, setIndex] = React.useState(0);

	classes.addClass("carousel")

	function updateValue(value: string) {
		if (a11yElement) {
			a11yElement.value = value
		}
	}

	var increment = () => {

		if (current >= max) {
			current = 1;
			setIndex(current)
		} else {
			setIndex(++current)
		}

		updateValue(current + " of " + max)
	}

	var decrement = () => {

		if (current - 1 <= 0) {
			current = max;
			setIndex(current)
		} else {
			setIndex(--current)
		}

		updateValue(current + " of " + max)
	}

	return (<>
		{views[current]}
		<UIPager label={label} initial={initial} max={max} onIncrement={increment} onDecrement={decrement} />
	</>
	)
}