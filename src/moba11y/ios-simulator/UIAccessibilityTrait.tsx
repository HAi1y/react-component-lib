import { TagProps } from "../components/Tag"

export enum UIAccessibilityTrait {
	button = "Button",
	link = "Link",
	staticText = "StaticText",
	notEnabled = "NotEnabled",
	none = "none",
	adjustable = "adjustable"
}

export class UIAccessibilityTraits extends Array<UIAccessibilityTrait> {

	constructor(traits?: Array<UIAccessibilityTrait>) {
		super()
		traits?.forEach((trait: UIAccessibilityTrait) => this.push(trait))
	}

	tags() {
		var result: Array<TagProps> = []
		this.forEach((trait) => result.push({ title: "" + trait }))
		return result
	}
}