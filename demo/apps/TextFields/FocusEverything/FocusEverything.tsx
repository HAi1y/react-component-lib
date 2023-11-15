import React = require("react");
import { IOSSimulator, UITextView, UITitle, UIButtonNav, UIWindow, UITextFieldProps, UIAccessibilityCustomAction, Classes, UIView, UIPager, UICarousel, UIGridLayout } from "../../../../dist";
import { meta, html } from "./FocusEverything.md"
import Icons from "../../../components/Icons";
import MarkdownContainer from "../../../components/MardownContainer";

export function UITextField({ classes = new Classes, label, value, errors }: UITextFieldProps) {

	var labelElement = UIWindow.newElement()
	labelElement.label = label

	var inputElement = UIWindow.newElement()
	inputElement.label = label
	inputElement.value = value

	inputElement.actions.push(new UIAccessibilityCustomAction(
		"Default",
		() => {
			if (window) window.document.getElementById(label)?.focus()
		}
	))

	var errorElements: Array<React.ReactNode> = []

	errors?.forEach(error => errorElements.push(<div style={{ margin: "0 2em" }} >
		<UITextView text={error} />
	</div>))

	return (<>
		<div className="ios text-field">
			<UIView classes={classes} a11yElement={labelElement}>
				<label htmlFor={label}>{label}</label>
			</UIView>
			<UIView classes={classes} a11yElement={inputElement}>
				<input type="text" readOnly={true} value={value} id={label} name={label} />
			</UIView>
		</div>
		{errorElements}
	</>
	)
}

export default function FocusEverything() {

	var style = {
		width: "72px",
		height: "72px"
	}

	return (<IOSSimulator instructions={<MarkdownContainer title={meta.title} html={html} />}>
		<UITitle text="Focus Everything" />
		<UITextField label="Username" value="GnarlyDawg84" />
		<UITextField label="Password" value="IceCream" errors={["That is a terrible password.", "Not long enough."]} />
		<UITextField label="Birthday" value="yesterday" errors={["Expected format: MM/DD/YY"]} />
		<div style={{ margin: "1em auto" }} >
			<UIButtonNav text="Next" href="/app/text-fields/focus-everything-weaknesses" />
		</div>
	</IOSSimulator>)
}