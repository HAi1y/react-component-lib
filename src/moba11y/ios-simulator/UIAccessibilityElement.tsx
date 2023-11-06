import React from "react"
import { TagList } from "../components/Tag"
import { UIAccessibilityTraits } from "./UIAccessibilityTrait"
import { UIAccessibilityCustomActions } from "./UIAccessibilityCustomAction"

export class UIAccessibilityElement {

	setIsAccessibilityFocused?: (state: boolean) => any
	label?: string
	value?: string
	hint?: string
	increment?: () => any
	decrement?: () => any
	traits: UIAccessibilityTraits = new UIAccessibilityTraits
	actions: UIAccessibilityCustomActions = new UIAccessibilityCustomActions
	hidden = false
	nextElement?: UIAccessibilityElement
	previousElement?: UIAccessibilityElement

	next(element?: UIAccessibilityElement) {
		this.nextElement = element
		if (element) element.previousElement = this
	}

	previous(element?: UIAccessibilityElement) {
		this.previousElement = element
		if (element) element.nextElement = this
	}

	constructor(
		label?: string,
		value?: string,
		hint?: string,
		traits?: UIAccessibilityTraits,
		actions?: UIAccessibilityCustomActions
	) {
		this.label = label
		this.value = value
		this.hint = hint
		traits?.forEach(trait => this.traits.push(trait))
		actions?.forEach(action => this.actions.push(action))
	}

	toProps() {
		return {
			"a11y-label": this.label,
			"a11y-value": this.value,
			"a11y-hint": this.hint,
			"a11y-traits": this.traits,
			"a11y-actions": this.actions
		}
	}

	toJsx() {
		return (<div className="accessibility-element">
			<ul>
				<li><span><strong>Label:</strong></span><span>{this.label}</span></li>
				<li><span><strong>Traits:</strong></span><TagList tags={this.traits.tags()} /></li>
				<li><span><strong>Value:</strong></span>{this.value}</li>
				<li><span><strong>Hint:</strong></span>{this.hint}</li>
				<li><span><strong>Actions:</strong></span><TagList tags={this.actions.tags()}></TagList></li>
			</ul>
		</div>)
	}

	toAnnouncement() {
		var announcement = this.label ? this.label : "";
		announcement.concat(this.traits && this.traits.length > 0 ? ", " + this.traits.join(' ') : "")
		announcement += this.value ? ", " + this.value : ""
		return announcement
	}

	removeAccessibilityFocus() {

		if (this.setIsAccessibilityFocused) {
			this.setIsAccessibilityFocused(false)
		} else {
			console.log("Set Is Accessibilty Focused Undefined")
		}
	}

	requestAccessibilityFocus() {
		if (this.setIsAccessibilityFocused) {
			this.setIsAccessibilityFocused(true)
		} else {
			console.log("Set Is Accessibilty Focused Undefined")
		}
	}

	log() {
		console.log(this.previousElement?.label + " - " + this.label + " - " + this.nextElement?.label)
	}
}

export class UIAccessibilityElements extends Array<UIAccessibilityElement> {

}