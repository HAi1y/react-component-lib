import React = require("react");
import { IOSSimulator, UITextView, UITitle, FontStyle, UIButton, UIWindow } from "../../../dist";
import { meta, html } from "./Intro/Intro.md"
import MarkdownContainer from "../../components/MardownContainer";

export default function Rotor() {

	UIWindow.hiddenControls.home = true
	return (<IOSSimulator instructions={<MarkdownContainer html={html} title={meta.title} />} >
		<UITitle text="Rotor" />
		<UITextView fontStyle={FontStyle.body} text="The Rotor setting changes what Swipe Up and Down Gestures do." />
		<UITextView fontStyle={FontStyle.body} text="Click the Rotor." />
		<UITextView fontStyle={FontStyle.body} text="Then click Up or Down to navigate by character." />
		<UITextView fontStyle={FontStyle.body} text="123456789" />
		<div style={{ margin: "0 auto" }}>
			<UIButton text="Next" onClick={() => { if (window) window.location.href = "/app/tutorial/home" }} />
		</div>
	</IOSSimulator>)
}