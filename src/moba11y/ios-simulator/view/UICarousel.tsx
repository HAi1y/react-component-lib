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

export function UICarousel({ label, views, classes = new Classes }: React.PropsWithChildren<UICarouselProps>) {

	const initial = 1
	const max = views.length
	var [index, setIndex] = React.useState(initial);

	classes.addClass("carousel")

	return (<>
		{views[index - 1]}
		<UIPager label={label} initial={initial} max={max} onChange={(current) => { index = current; setIndex(index); }} />
	</>
	)
}