import React = require("react");
import { IOSSimulator, UITextView, UITitle, FontStyle, UIButton, UIWindow } from "../../../../dist";
import { meta, html } from "./Intro.md"
import MarkdownContainer from "../../../components/MardownContainer";

export default function Intro() {

	UIWindow.hiddenControls.home = true
	UIWindow.hiddenControls.swipeUp = true
	UIWindow.hiddenControls.swipeDown = true
	UIWindow.hiddenControls.twist = true
	UIWindow.hiddenControls.swipeLeft = true

	return (<IOSSimulator instructions={<MarkdownContainer html={html} title={meta.title} />} >
		<UITitle text="Tutorial" />
		<UITextView fontStyle={FontStyle.body} text="Swiping Right moves Accessibility Focus forward. " />
		<UITextView fontStyle={FontStyle.body} text="Swiping Left moves Accessibility Focus backward." />
		<UITextView fontStyle={FontStyle.body} text="Click the Right and Left Arrows to simulate these gestures. The corresponding keyboard keys also work!" />
		<div style={{ margin: "0 auto" }}>
			<UIButton text="Next" onClick={() => { if (window) window.location.href = "/app/tutorial/headings" }} />
		</div>
	</IOSSimulator>)
}