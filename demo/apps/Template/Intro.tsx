import React = require("react");
import { IOSSimulator, UITextView, UITitle, FontStyle, UIButton } from "../../../dist";
import { html } from "./Intro.md"

export default function Intro() {

	return (<IOSSimulator instructions={<div dangerouslySetInnerHTML={{ __html: html }} />}>
		<UITitle text="Text Fields" />
		<UITextView fontStyle={FontStyle.body} text="The other day I joined a LinkedIn thread with Paul J Adam and Jaan Jap Degroot. Both Mobile Accessibility experts I hold in high regard." />
		<UITextView fontStyle={FontStyle.body} text="Simple swipe gestures allow expressive navigation of well structured information." />
		<UITextView fontStyle={FontStyle.body} text="Activate next to practice using different VoiceOver simulator controls." />
		<div style={{ margin: "0 auto" }}>
			<UIButton text="Next" onClick={() => { if (window) window.location.href = "/app/getting-started/linear" }} />
		</div>
		<UITextView fontStyle={FontStyle.body} text="Note: You can also use your keyboard!" />
	</IOSSimulator>)
}