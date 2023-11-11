import React = require("react");
import { IOSSimulator, UITextView, UITitle, FontStyle, UIButton, UIWindow } from "../../../../dist";
import { html } from "./Linear.md"

export default function Linear() {

	UIWindow.hiddenControls.debug = true
	UIWindow.hiddenControls.reset = true


	return (<IOSSimulator instructions={<div dangerouslySetInnerHTML={{ __html: html }} />}>
		<UITitle text="Your Account" />
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
		<UITitle text="Skip To Here"></UITitle>
		<div style={{ margin: "0 auto" }}>
			<UIButton text="Next" onClick={() => { if (window) window.location.href = "/app/getting-started/linear" }} />
		</div>
	</IOSSimulator>)
}