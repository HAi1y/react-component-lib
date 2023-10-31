import { TagProps } from "../../components/Tag"

export enum UIAccessibilityTrait {
	button = 'button',
	link = 'link',
	staticText = 'static-text'
}

export class UIAccessibilityTraits extends Array<UIAccessibilityTrait> {

	constructor(traits?: Array<UIAccessibilityTrait>) {
		super()
		this.concat(traits ? traits : [])
	}

	tags() {
		var result: Array<TagProps> = []
		this.map((trait) => result.push({ title: "" + trait }))
		return result
	}
}