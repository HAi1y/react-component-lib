import { UIAccessibilityCustomAction, UIAccessibilityCustomActions } from "./UIAccessibilityCustomAction";
import { UIAccessibilityElement } from "./UIAccessibilityElement";
import { UIAccessibilityTrait, UIAccessibilityTraits } from "./UIAccessibilityTrait";

export class UIWindow {

	private static firstElement?: UIAccessibilityElement
	private static lastElement?: UIAccessibilityElement
	private static insertionPoint?: UIAccessibilityElement
	static element?: UIAccessibilityElement

	static accessibilityFocus(): UIAccessibilityElement {

		if (UIWindow.element === undefined) {
			return this.defaultElement()
		}

		return UIWindow.element
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

		var e = this.firstElement

		var i = 0

		var result = " - "

		while (e && i++ < 10) {
			result += e.label + " - "
			e = e.nextElement
		}

		e = this.lastElement
		result = " - "
		i = 0;

		while (e && i++ < 10) {
			result += e.label + " - "
			e = e.previousElement
		}

		console.log(result)
	}

	static focusPrevious(): UIAccessibilityElement {

		if (UIWindow.element === undefined) return this.defaultElement()

		if (UIWindow.element.previousElement) {
			UIWindow.element.removeAccessibilityFocus()
			UIWindow.element = UIWindow.element.previousElement
			UIWindow.element.requestAccessibilityFocus()
		}

		return UIWindow.element
	}

	static focusNext(): UIAccessibilityElement {

		if (UIWindow.element === undefined) {
			UIWindow.element = this.firstElement ? this.firstElement : this.defaultElement()
			UIWindow.element.requestAccessibilityFocus()
		} else if (UIWindow.element.nextElement) {
			UIWindow.element.removeAccessibilityFocus()
			UIWindow.element = UIWindow.element.nextElement
			UIWindow.element.requestAccessibilityFocus()
		}

		return UIWindow.element
	}

	static newElement() {
		return new UIAccessibilityElement
	}

	static add(a11yElement: UIAccessibilityElement): UIAccessibilityElement {

		console.log("Add: " + a11yElement.label + " To: " + (this.insertionPoint ? this.insertionPoint?.label : "Start") + " First: " + (this.firstElement ? this.firstElement?.label : "undefined"))

		if (this.firstElement === undefined) {
			this.firstElement = a11yElement
			this.insertionPoint = a11yElement
		} else {
			if (this.insertionPoint) {
				if (this.insertionPoint.nextElement) this.insertionPoint.nextElement.previous(a11yElement)
				this.insertionPoint.next(a11yElement)
			} else {
				this.firstElement.previous(a11yElement)
				this.firstElement = a11yElement
			}

			a11yElement.previous(this.insertionPoint)

			this.insertionPoint = a11yElement

			if (!this.insertionPoint.nextElement) {
				this.lastElement = this.insertionPoint
			}
		}

		if (this.element?.label === a11yElement.label) {
			this.element = a11yElement
		}

		this.log()

		return a11yElement
	}

	static remove(element: UIAccessibilityElement) {

		console.log("Remove: " + element.label)

		if (this.firstElement === element) this.firstElement = this.firstElement.nextElement
		if (this.lastElement === element) this.lastElement = this.lastElement.previousElement

		if (element.nextElement) {
			element.nextElement.previous(element.previousElement)
		}

		if (element.previousElement) {
			element.previousElement.next(element.nextElement)
		}

		this.insertionPoint = element.previousElement
		element.nextElement = undefined
		element.previousElement = undefined

		this.log()
	}

}