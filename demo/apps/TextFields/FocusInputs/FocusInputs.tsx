import React = require("react");
import { IOSSimulator, UITextView, UITitle, UIButtonNav, UIWindow, UITextFieldProps, UIAccessibilityCustomAction, Classes, UIView } from "../../../../dist";
import { html } from "./FocusInputs.md"

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
				<input type="text" defaultValue={value} id={label} name={label} onFocus={() => {
					UIWindow.announce("insertion point at end. Sorry editing not fully supported.")
				}} />
			</UIView>
		</div>
		{errorElements}
	</>
	)
}

export default function FocusInputs() {

	var errors = ["That is a terrible password."]

	return (<IOSSimulator instructions={<div dangerouslySetInnerHTML={{ __html: html }} />}>
		<UITitle text="Focus Inputs" />
		<UITextField label="Username" value="GnarlyDawg84" />
		<UITextField label="Password" value="password" errors={["That is a terrible password.", "Not long enough."]} />
		<UITextField label="Birthday" value="yesterday" errors={["Expected format: MM/DD/YY"]} />
		<div style={{ margin: "1em auto" }} >
			<UIButtonNav text="Back" href="/app/text-fields/intro" />
			<UIButtonNav text="Next" href="/app/text-fields/focus-inputs" />
		</div>
	</IOSSimulator>)
}