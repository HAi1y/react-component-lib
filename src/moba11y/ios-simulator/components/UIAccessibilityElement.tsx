import { UIAccessibilityTraits } from "./UIAccessibilityTrait"
import { UIAccessibilityCustomActions } from "./UIAccessibilityCustomAction"

export class UIAccessibilityElement {
	label?: string
	value?: string
	hint?: string
	traits: UIAccessibilityTraits = new UIAccessibilityTraits
	actions: UIAccessibilityCustomActions = new UIAccessibilityCustomActions

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
		this.traits.concat(traits ? traits : [])
		this.actions.concat(actions ? actions : [])
	}
}
