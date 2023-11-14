import React = require("react");
import { IOSSimulator, UITextView, UITitle, FontStyle, UIButton, UIWindow } from "../../../dist";
import { meta, html } from "./Intro/Intro.md"
import MarkdownContainer from "../../components/MardownContainer";

export default function Home() {

	return (<IOSSimulator instructions={<MarkdownContainer html={html} title={meta.title} />} >
		<UITitle text="Home" />
		<UITextView fontStyle={FontStyle.body} text="Click the Home gesture at any time to return to the launcher." />
	</IOSSimulator>)
}