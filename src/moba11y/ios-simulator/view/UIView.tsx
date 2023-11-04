import * as React from 'react';
import { UIAccessibilityElement } from '../UIAccessibilityElement';
import { Classes } from './Classes';

export interface UIViewProps {
	classes?: Classes
	a11yElement: UIAccessibilityElement
}

export function UIView({ classes = new Classes, a11yElement, children }: React.PropsWithChildren<UIViewProps>) {

	classes.addClass("ios")
	classes.addClass("accessibility-element")

	const [isAccessibilityFocused, setIsAccessibilityFocused] = React.useState(false)

	a11yElement.setIsAccessibilityFocused = setIsAccessibilityFocused

	if (isAccessibilityFocused) {
		classes.addClass("accessibility-focus")
	} else {
		classes.removeClass("accessibility-focus")
	}

	return (
		<div className={classes.toClassName()}>
			{children}
		</div>
	)
}

export interface UIVIewProps {
	classes?: Classes
	a11yElement: UIAccessibilityElement
	children: React.ReactNode
}

export class UIViewState extends Object {
	isAccessibilityFocused = false
}

export class UIVIew extends React.PureComponent<UIVIewProps> {

	classes: Classes
	a11yElement: UIAccessibilityElement
	children: React.ReactNode
	isAccessibilityFocused = false

	constructor(props: UIVIewProps) {
		super(props)
		this.classes = props.classes ? props.classes : new Classes
		this.a11yElement = props.a11yElement
		this.children = props.children
	}

	state = new UIViewState

	setIsAccessibilityFocused(value: boolean) {
		this.state = { isAccessibilityFocused: value }
		this.isAccessibilityFocused = value
	}

	render() {

		this.setState(new UIViewState)
		console.log(this.state)

		this.classes.addClass("ios")
		this.classes.addClass("accessibility-element")

		this.a11yElement.setIsAccessibilityFocused = this.setIsAccessibilityFocused

		if (this.state["isAccessibilityFocused"]) {
			this.classes.addClass("accessibility-focus")
		} else {
			this.classes.removeClass("accessibility-focus")
		}

		return (
			<div className={this.classes.toClassName()}>
				{this.children}
			</div>
		)
	}
}