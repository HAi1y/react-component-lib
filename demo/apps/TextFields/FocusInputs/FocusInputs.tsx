import React = require("react");
import { IOSSimulator, UITextView, UITitle, UIButtonNav, UIWindow, UITextFieldProps, UIAccessibilityCustomAction, Classes, UIView } from "../../../../dist";
import { html } from "./FocusInputs.md"
import { UIAccessibilityElement } from "../../../../dist/moba11y/ios-simulator/UIAccessibilityElement";
import { RotorSettings, Rotor } from "../../../../dist";

export function UITextField({ label, value, classes = new Classes, a11yElement, errors }: UITextFieldProps) {

	if (a11yElement === undefined) {
		a11yElement = UIWindow.newElement()
		a11yElement.label = label
		a11yElement.value = value + (errors ? ", Error: " + errors.join(' Error: ') : "")
		a11yElement.hint = "Activate to edit."

		a11yElement.actions.push(new UIAccessibilityCustomAction(
			"Default",
			() => {
				if (window) window.document.getElementById(label)?.focus()
			}
		))
	}

	function logSelection(event: React.SyntheticEvent<HTMLInputElement, Event>) {

		const currentTarget = event.currentTarget

		a11yElement.index = event.currentTarget.selectionStart
		a11yElement.rotor = new Rotor
		a11yElement.rotor.push(RotorSettings.Characters)
		a11yElement.rotor.setTo(RotorSettings.Characters)
		UIWindow.setRotor(a11yElement.rotor)
		a11yElement.requestAccessibilityFocus()
		a11yElement.character = (up: boolean, element: UIAccessibilityElement) => {

			var value = currentTarget.value

			if (up && a11yElement.index < value.length) {
				a11yElement.index++
			} else if (!up && a11yElement.index > 0) {
				a11yElement.index--
			} else {
				return ""
			}

			currentTarget.select()
			currentTarget.setSelectionRange(a11yElement.index, a11yElement.index)

			return value.charAt(a11yElement.index)
		}

		currentTarget.setSelectionRange(a11yElement.index, a11yElement.index)
		return event
	}

	var errorElements: Array<React.ReactNode> = []

	errors?.forEach(error => {
		errorElements.push(<div style={{ margin: "0 2em" }} >
			<UITextView text={"Error: " + error} a11yElement={null} />
		</div>)
	})

	return (<>
		<div className="ios text-field">
			<label htmlFor={label}>{label}</label>
			<UIView classes={classes} a11yElement={a11yElement}>
				<input type="text" defaultValue={value} id={label} name={label}
					onSelect={(event) => logSelection(event)}
					onFocus={() => {
						UIWindow.announce("Insertion point at end.")
					}} />
			</UIView>
		</div>
		{errorElements}
	</>
	)
}

export default function FocusInputs() {

	return (<IOSSimulator instructions={<div dangerouslySetInnerHTML={{ __html: html }} />}>
		<UITitle text="Focus Inputs" />
		<UITextField label="Username" value="GnarlyDawg84" />
		<UITextField label="Password" value="IceCream" errors={["That is a terrible password.", "Not long enough."]} />
		<UITextField label="Birthday" value="yesterday" errors={["Expected format: MM/DD/YY"]} />
		<div style={{ margin: "1em auto" }} >
			<UIButtonNav text="Back" href="/app/text-fields/focus-everything" />
			<UIButtonNav text="Next" href="/app/text-fields/focus-inputs" />
		</div>
	</IOSSimulator>)
}