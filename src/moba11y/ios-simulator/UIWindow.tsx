import { UIAccessibilityCustomAction, UIAccessibilityCustomActions } from "./UIAccessibilityCustomAction";
import { UIAccessibilityElements, UIAccessibilityElement } from "./UIAccessibilityElement";
import { UIAccessibilityTrait, UIAccessibilityTraits } from "./UIAccessibilityTrait";

export class UIWindow extends UIAccessibilityElements {
	static clear() {
		while (UIWindow.elements.length > 0) UIWindow.elements.pop()
	}

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

	static log(): any {
		console.log(UIWindow.elements)
	}

	private constructor() {
		super()
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

		var element: UIAccessibilityElement = UIWindow.elements[this.accessibilityFocusIndex]
		UIWindow.elements.forEach(element => element.removeAccessibilityFocus())
		element.requestAccessibilityFocus()
		return element
	}

	static newElement() {
		return this.addElement(new UIAccessibilityElement)
	}

	static removeElement(a11yElement: UIAccessibilityElement) {
		this.elements.splice(this.elements.indexOf(a11yElement), 1)
	}

	static addElement(a11yElement: UIAccessibilityElement): UIAccessibilityElement {
		this.elements.push(a11yElement)
		return (a11yElement)
	}
}