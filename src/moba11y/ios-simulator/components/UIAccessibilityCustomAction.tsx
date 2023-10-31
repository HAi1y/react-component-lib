import { TagProps } from "../../components/Tag"

export class UIAccessibilityCustomAction {
	label: string
	action: () => any

	constructor(label: string, action: () => any) {
		this.label = label
		this.action = action
	}
}

export class UIAccessibilityCustomActions extends Array<UIAccessibilityCustomAction> {

	constructor(actions?: Array<UIAccessibilityCustomAction>) {
		super()
		this.concat(actions ? actions : [])
	}

	tags() {
		const result: Array<TagProps> = []
		this.map(({ label }) => result.push({ title: label }))
		return result
	}
}