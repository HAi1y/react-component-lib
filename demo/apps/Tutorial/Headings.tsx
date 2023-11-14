import React = require("react");
import { IOSSimulator, UITextView, UITitle, FontStyle, UIButton, UIWindow } from "../../../dist";
import { meta, html } from "./Intro/Intro.md"
import MarkdownContainer from "../../components/MardownContainer";

export default function Headings() {

	UIWindow.hiddenControls.home = true;
	UIWindow.hiddenControls.swipeLeft = true;
	UIWindow.hiddenControls.swipeRight = true;
	UIWindow.hiddenControls.twist = true;

	return (<IOSSimulator instructions={<MarkdownContainer html={html} title={meta.title} />}>
		<UITitle text="Your Account" />
		<UITextView fontStyle={FontStyle.body} text="Swiping down while the rotor is in headings mode allows you to skip past annoying inaccessible tables." />
		<div style={{ display: "flex", margin: ".2em .2em" }}>
			<div style={{ flexGrow: "1" }}>
				<UITextView fontStyle={FontStyle.body} text="Taco Bell: " />
				<UITextView fontStyle={FontStyle.body} text="$9" />
			</div>

			<UITextView fontStyle={FontStyle.body} text="Balance:" />
			<UITextView fontStyle={FontStyle.body} text="$900" />
		</div>
		<div style={{ display: "flex", margin: ".2em .2em" }}>
			<div style={{ flexGrow: "1" }}>
				<UITextView fontStyle={FontStyle.body} text="Wendy's: " />
				<UITextView fontStyle={FontStyle.body} text="$90" />
			</div>

			<UITextView fontStyle={FontStyle.body} text="Balance:" />
			<UITextView fontStyle={FontStyle.body} text="$810" />
		</div>
		<div style={{ display: "flex", margin: ".2em .2em" }}>
			<div style={{ flexGrow: "1" }}>
				<UITextView fontStyle={FontStyle.body} text="Gas Station: " />
				<UITextView fontStyle={FontStyle.body} text="$2" />
			</div>

			<UITextView fontStyle={FontStyle.body} text="Balance:" />
			<UITextView fontStyle={FontStyle.body} text="$808" />
		</div>
		<div style={{ display: "flex", margin: ".2em .2em" }}>
			<div style={{ flexGrow: "1" }}>
				<UITextView fontStyle={FontStyle.body} text="Disney: " />
				<UITextView fontStyle={FontStyle.body} text="$100" />
			</div>

			<UITextView fontStyle={FontStyle.body} text="Balance:" />
			<UITextView fontStyle={FontStyle.body} text="$708" />
		</div>
		<UITitle text="Navigation Landmark"></UITitle>
		<UITextView fontStyle={FontStyle.body} text="We'll cover a more accessible version of that table in another lesson!" />
		<div style={{ margin: "0 auto" }}>
			<UIButton text="Next" onClick={() => { if (window) window.location.href = "/app/tutorial/rotor" }} />
		</div>
	</IOSSimulator>)
}