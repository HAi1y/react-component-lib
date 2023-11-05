import * as React from 'react';
import { UIAccessibilityElement } from '../UIAccessibilityElement';
import { Classes } from './Classes';
import { UIPager } from './UIPager';
import { UIWindow } from '../UIWindow';

export interface UICarouselProps {
	views: Array<React.ReactNode>
	a11yElement?: UIAccessibilityElement
	classes?: Classes
}

export function UICarousel({ views, a11yElement, classes = new Classes }: React.PropsWithChildren<UICarouselProps>) {

	const initial = 0
	const max = views.length - 1
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

		UIWindow.clear()
		updateValue(current + " of " + max)
	}

	var decrement = () => {

		if (current - 1 <= 0) {
			current = max;
			setIndex(current)
		} else {
			setIndex(--current)
		}

		UIWindow.clear()

		updateValue(current + " of " + max)
	}

	var result: Array<React.ReactElement> = []

	for (var i = 0; i < max; i++) {
		result.push(<span key={i} className={current - 1 === i ? "active" : ""} />)
	}

	return (<>
		{views[current]}
		<UIPager initial={initial} max={max} onIncrement={increment} onDecrement={decrement} />
	</>
	)
}