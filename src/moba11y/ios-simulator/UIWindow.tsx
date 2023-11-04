import { UIAccessibilityCustomAction, UIAccessibilityCustomActions } from "./UIAccessibilityCustomAction";
import { UIAccessibilityElements, UIAccessibilityElement } from "./UIAccessibilityElement";
import { UIAccessibilityTrait, UIAccessibilityTraits } from "./UIAccessibilityTrait";

export class UIWindow extends UIAccessibilityElements {

	private static elements = new UIWindow

	static accessibilityFocusIndex = -1

	static accessibilityFocus(): UIAccessibilityElement {

		if (this.accessibilityFocusIndex === -1) {
			return this.defaultElement()
		}

		return this.elements[this.accessibilityFocusIndex]
	}

	static defaultElement() {
		return new UIAccessibilityElement(
			"{AccessibilityLabel}",
			"{AccessibilityValue}",
			"{AccessibilityHint}",
			new UIAccessibilityTraits([UIAccessibilityTrait.staticText]),
			new UIAccessibilityCustomActions(
				[
					new UIAccessibilityCustomAction("A Custom Action", () => { alert("You called a custom action.") })
				]
			)
		)
	}


	private constructor(elements?: [UIAccessibilityElement]) {
		super()
		elements?.forEach(element => this.push(element))
	}

	static focusPrevious(): UIAccessibilityElement {

		if (this.accessibilityFocusIndex > 0) {
			this.accessibilityFocusIndex--
		}

		var element: UIAccessibilityElement = UIWindow.elements[this.accessibilityFocusIndex]
		UIWindow.elements.forEach(element => element.removeAccessibilityFocus())
		element.requestAccessibilityFocus()
		return element
	}

	static focusNext(): UIAccessibilityElement {

		if (this.accessibilityFocusIndex <= (UIWindow.elements.length - 2)) {
			this.accessibilityFocusIndex++
		}

		console.log(UIWindow.elements)

		var element: UIAccessibilityElement = UIWindow.elements[this.accessibilityFocusIndex]
		UIWindow.elements.forEach(element => element.removeAccessibilityFocus())
		element.requestAccessibilityFocus()
		return element
	}

	static newElement() {
		this.elements.push(new UIAccessibilityElement)
		return this.elements[this.elements.length - 1]
	}
}