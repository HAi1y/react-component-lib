import React = require("react");
import { IOSSimulator, UITextView, UITitle, FontStyle, UIButton } from "../../../dist";
import { html } from "./Intro.md"

export default function Intro() {

	return (<IOSSimulator instructions={<div dangerouslySetInnerHTML={{ __html: html }} />}>
		<UITitle text="Introduction" />
		<UITextView fontStyle={FontStyle.body} text="Screen readers allow users who are blind and low vision to hear structured announcements of on screen elements." />
		<UITextView fontStyle={FontStyle.body} text="Simple swipe gestures allow expressive navigation of well structured information." />
		<UITextView fontStyle={FontStyle.body} text="Activate next to practice using different VoiceOver simulator controls." />
		<div style={{ margin: "0 auto" }}>
			<UIButton text="Next" onClick={() => { if (window) window.location.href = "/app/getting-started/linear" }} />
		</div>
		<UITextView fontStyle={FontStyle.body} text="Note: You can also use your keyboard!" />
	</IOSSimulator>)
}