import { Rotor } from "../IOSSimulator";
import { UIAccessibilityCustomAction, UIAccessibilityCustomActions } from "./UIAccessibilityCustomAction";
import { UIAccessibilityElement } from "./UIAccessibilityElement";
import { UIAccessibilityTrait, UIAccessibilityTraits } from "./UIAccessibilityTrait";

export class UIWindow {

	private static firstElement?: UIAccessibilityElement
	private static lastElement?: UIAccessibilityElement
	private static insertionPoint?: UIAccessibilityElement
	static element?: UIAccessibilityElement

	static onFocus?: (element: UIAccessibilityElement) => any

	static onAnnouncement?: (message: string) => any

	static rotor?: Rotor

	static updateRotor?: (rotor: Rotor) => any

	static setRotor = (rotor: Rotor) => {
		if (UIWindow.updateRotor) UIWindow.updateRotor(rotor)
		UIWindow.rotor = rotor
	}

	static hiddenControls = {
		home: false,
		swipeUp: false,
		reset: true,
		swipeLeft: false,
		twist: false,
		swipeRight: false,
		debug: true,
		swipeDown: false,
		activate: false
	}

	static accessibilityFocus(): UIAccessibilityElement {

		if (UIWindow.element === undefined) {
			return this.defaultElement()
		}

		return UIWindow.element
	}

	static defaultElement() {
		return new UIAccessibilityElement(false,
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

	static log(reverse?: boolean): any {

		var result = " - "
		var i = 0

		if (reverse) {
			var e = this.lastElement

			while (e && i++ < 1000) {
				result += e.label + " - "
				e = e.previousElement
			}
		} else {
			var e = this.firstElement

			while (e && i++ < 1000) {
				result += e.label + " - "
				e = e.nextElement
			}
		}

		console.log(result)
	}

	static announce(message: string) {
		if (UIWindow.onAnnouncement) UIWindow.onAnnouncement(message)
	}

	static focus(element: UIAccessibilityElement) {

		if (UIWindow.element) UIWindow.element.removeAccessibilityFocus()

		UIWindow.element = element

		if (UIWindow.element) UIWindow.element.requestAccessibilityFocus()

		if (element && UIWindow.onFocus) UIWindow.onFocus(element)
	}

	static focusPrevious() {

		if (UIWindow.element === undefined) return this.defaultElement()

		if (UIWindow.element.previousElement) {
			this.focus(UIWindow.element.previousElement)
		} else if (this.lastElement) {
			if (this.lastElement.previousElement) {
				this.focus(this.lastElement.previousElement)
			} else {
				this.focus(this.lastElement)
			}
		}

		return UIWindow.element
	}

	static focusNext() {

		if (UIWindow.element === undefined) {
			UIWindow.focus(this.firstElement ? this.firstElement : this.defaultElement())
		} else if (UIWindow.element.nextElement) {
			UIWindow.focus(UIWindow.element.nextElement)
		}
	}

	static newElement() {
		return new UIAccessibilityElement
	}

	static add(a11yElement: UIAccessibilityElement): UIAccessibilityElement {

		console.log("Adding: " + a11yElement.label + " To: " + this.insertionPoint?.label)

		if (this.firstElement === undefined) {
			this.firstElement = a11yElement
			this.insertionPoint = a11yElement
			this.lastElement = a11yElement
			return a11yElement
		}

		var nextElement = a11yElement.nextElement
		var previousElement = a11yElement.previousElement

		if (nextElement || previousElement) {
			nextElement?.previous(a11yElement)
			previousElement?.next(a11yElement)
		} else {
			a11yElement.previous(this.lastElement)
			this.lastElement?.next(a11yElement)
			this.lastElement = a11yElement
		}

		this.log()

		return a11yElement
	}

	static remove(element: UIAccessibilityElement) {

		console.log("Removing: " + element.label)

		if (element.nextElement) {
			element.nextElement.previous(element.previousElement)
		}

		if (element.previousElement) {
			element.previousElement.next(element.nextElement)
		}

		this.insertionPoint = element.previousElement

		this.log()
	}
}