import React = require("react");
import { IOSSimulator, UITextView, UITitle, FontStyle, UIButtonNav, UITextField2, UITextField, UIWindow } from "../../../../dist";
import { html } from "./Intro.md"

export default function Intro() {

	return (<IOSSimulator instructions={<div dangerouslySetInnerHTML={{ __html: html }} />}>
		<UITitle text="Text Fields" />
		<UITextField2 label="Username" value="GnarlyDawg84" />
		<UITextField2 label="Password" value="IceCream" />
		<UITextField2 label="Birthday" value="yesterday" />
		<UITextView text="This is not WCAG Compliant." />
		<UITextView text="A minimum expectation should be that the Label and Value are announced together." />
		<UITextView text="Let's explore solutions that are." />
		<div style={{ margin: "1em auto" }} >
			<UIButtonNav text="Next" href="/app/text-fields/focus-everything" />
		</div>
	</IOSSimulator>)
}