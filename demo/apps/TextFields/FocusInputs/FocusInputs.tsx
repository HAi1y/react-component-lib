import React = require("react");
import { IOSSimulator, UITextView, UITitle, UIButtonNav, UIWindow, UITextFieldProps, UIAccessibilityCustomAction, Classes, UIView, UIInput } from "../../../../dist";
import { html, meta } from "./FocusInputs.md"
import { RotorSettings, Rotor } from "../../../../dist";
import MarkdownContainer from "../../../components/MardownContainer";

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
		var hiddenElement = UIWindow.newElement()
		hiddenElement.hidden = true;

		errorElements.push(<div style={{ margin: "0 2em" }} >
			<UITextView text={"Error: " + error} a11yElement={hiddenElement} />
		</div>)
	})

	return (<>
		<div className="ios text-field">
			<label htmlFor={label}>{label}</label>
			<UIView classes={classes} a11yElement={a11yElement}>
				<UIInput label={label} a11yElement={a11yElement} value={value} />
			</UIView>
		</div>
		{errorElements}
	</>
	)
}

export default function FocusInputs({ }) {

	return (<IOSSimulator instructions={<MarkdownContainer html={html} title={meta.title} />}>
		<UITitle text="Focus Inputs" />
		<UITextField label="Username" value="GnarlyDawg84" />
		<UITextField label="Password" value="IceCream" errors={["That is a terrible password.", "Not long enough."]} />
		<UITextField label="Birthday" value="yesterday" errors={["Expected format: MM/DD/YY"]} />
		<div style={{ margin: "1em auto" }} >
			<UIButtonNav text="Next" href="/app/text-fields/focus-inputs-strengths" />
		</div>
	</IOSSimulator>)
}