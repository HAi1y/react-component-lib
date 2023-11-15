import React from "react"
import { TagList } from "../../components/Tag"
import { UIAccessibilityTraits } from "./UIAccessibilityTrait"
import { UIAccessibilityCustomActions } from "./UIAccessibilityCustomAction"
import { Rotor } from "../IOSSimulator"
import { UIWindow } from "./UIWindow"
import Icons from "../../components/Icons"

export class UIAccessibilityElement {

	setIsAccessibilityFocused?: (state: boolean) => any
	label?: string
	value?: string
	hint?: string
	isEditing?: boolean
	index: number
	increment?: () => any
	decrement?: () => any
	traits: UIAccessibilityTraits = new UIAccessibilityTraits
	actions: UIAccessibilityCustomActions = new UIAccessibilityCustomActions
	hidden = false
	nextElement?: UIAccessibilityElement
	previousElement?: UIAccessibilityElement
	rotor: Rotor = new Rotor

	next(element?: UIAccessibilityElement) {
		this.nextElement = element
		if (element) element.previousElement = this
	}

	previous(element?: UIAccessibilityElement) {
		this.previousElement = element
		if (element) element.nextElement = this
	}

	character(up: boolean, element: UIAccessibilityElement): string | undefined {

		var text = element.label ? element.label : "";
		text += element.value ? element.value : ""

		if (text === undefined) return

		if (!up && this.index < text.length) {
			this.index++
		} else if (up && this.index > 0) {
			this.index--
		}

		return text.charAt(this.index)
	}

	constructor(
		hidden: boolean = false,
		label?: string,
		value?: string,
		hint?: string,
		traits?: UIAccessibilityTraits,
		actions?: UIAccessibilityCustomActions,
		rotor?: Rotor,
		index: number = 0
	) {
		this.label = label
		this.value = value
		this.hint = hint
		this.hidden = hidden
		traits?.forEach(trait => this.traits.push(trait))
		actions?.forEach(action => this.actions.push(action))
		rotor?.forEach(setting => this.rotor.push(setting))
		this.index = index
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

	toJsx(): React.ReactNode {

		interface ApiInfoProps {
			label: string
			href: string
		}

		function ApiInfo({ label, href, children }: React.PropsWithChildren<ApiInfoProps>) {
			return (children ? <li>
				<a href={href}>
					<Icons.Information width="24px" height="24px" />
					<span><strong>{label}</strong></span>
				</a>
				{children}
			</li> : <></>)
		}

		return (<div className="accessibility-element">
			<ul>
				<ApiInfo label="Label:" href="https://appt.org/en/docs/ios/samples/accessibility-label">
					{this.label}
				</ApiInfo>
				<ApiInfo label="Traits:" href="https://appt.org/en/docs/ios/samples/accessibility-role">
					{this.traits.tags().length > 0 ? <TagList tags={this.traits.tags()} /> : undefined}
				</ApiInfo>
				<ApiInfo label="Value:" href="https://appt.org/en/docs/ios/samples/accessibility-value">
					{this.value}
				</ApiInfo>
				<ApiInfo label="Hint:" href="https://appt.org/en/docs/ios/samples/accessibility-hint">
					{this.hint}
				</ApiInfo>
				<ApiInfo label="Actions:" href="https://appt.org/en/docs/ios/samples/accessibility-action">
					{this.actions.tags().length > 0 ? <TagList tags={this.actions.tags()} /> : undefined}
				</ApiInfo>
				<ApiInfo label="Rotor:" href="https://support.apple.com/en-us/HT204783">
					{this.rotor.tags().length > 0 ? <TagList tags={this.rotor.tags()} /> : undefined}
				</ApiInfo>
			</ul>
		</div>)
	}

	toAnnouncement() {
		var announcement = this.label ? this.label : "";
		if (this.traits && this.traits.length > 0) announcement.concat(", " + this.traits.join(' '))
		announcement += this.value ? (this.label ? ", " : "") + this.value : ""
		announcement += this.hint ? (this.value || this.label ? ", " : "") + this.hint : ""
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

		UIWindow.hiddenControls.swipeRight = this.nextElement === undefined
		UIWindow.hiddenControls.swipeLeft = this.previousElement === undefined

		UIWindow.rotor = this.rotor
	}

	log() {
		console.log(this.previousElement?.label + " - " + this.label + " - " + this.nextElement?.label)
	}
}

export class UIAccessibilityElements extends Array<UIAccessibilityElement> {

}