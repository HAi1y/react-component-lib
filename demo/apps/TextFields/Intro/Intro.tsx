import React = require("react");
import { IOSSimulator, UITextView, UITitle, FontStyle, UIButtonNav, UITextField, UIWindow, UITextFieldProps, Classes, UIAccessibilityCustomAction, UIView } from "../../../../dist";
import { meta, html } from "./Intro.md"
import MarkdownContainer from "../../../components/MardownContainer";

export function UITextField2({ label, value, classes = new Classes }: UITextFieldProps) {

	var labelElement = UIWindow.newElement()
	labelElement.label = label

	var inputElement = UIWindow.newElement()
	inputElement.value = value

	inputElement.actions.push(new UIAccessibilityCustomAction(
		"Default",
		() => {
			if (window) window.document.getElementById(label)?.focus()
		}
	))

	return (
		<div className="ios text-field">
			<UIView classes={classes} a11yElement={labelElement}>
				<label htmlFor={label}>{label}</label>
			</UIView>
			<UIView classes={classes} a11yElement={inputElement}>
				<input type="text" value={value} id={label} name={label} onFocus={() => UIWindow.announce("insertion point at end")} />
			</UIView>
		</div>
	)
}

export default function Intro() {

	return (<IOSSimulator instructions={<MarkdownContainer title={meta.title} html={html} />}>
		<UITitle text="Input Fields" />
		<UITextView text="Consider this inaccessible example." />
		<UITextField2 label="Username" value="GnarlyDawg84" />
		<UITextField2 label="Password" value="IceCream" />
		<UITextField2 label="Birthday" value="yesterday" />
		<UITextView text="This is not WCAG Compliant." />
		<UITextView text="A minimum expectation should be that the Label and Value are announced together." />
		<div style={{ margin: "1em auto" }} >
			<UIButtonNav text="Next" href="/app/text-fields/focus-everything" />
		</div>
	</IOSSimulator>)
}