import React = require("react")
import { Classes, IOSSimulator, UIGridLayout, UITitle, UIWindow } from "../../dist"
import { meta, html } from "./Home.md"
import Icons from "../components/Icons"
import MarkdownContainer from "../components/MardownContainer"

export const Home = () => {

	var style = {
		width: "72px"
	}

	UIWindow.hiddenControls.home = true;
	UIWindow.hiddenControls.twist = true;
	UIWindow.hiddenControls.swipeUp = true;
	UIWindow.hiddenControls.swipeDown = true;

	return (<IOSSimulator instructions={<MarkdownContainer title={meta.title} html={html} />}>
		<UITitle text="Home" />
		<UIGridLayout >
			< Icons.Tutorial
				text="Short Tutorial"
				href="/app/tutorial/intro"
				width="64px"
				height="64px"
				classes={new Classes(["launcher-icon"])}
			/>
			< Icons.TextFields
				text="Text Fields"
				href="/app/text-fields/intro"
				width="64px"
				height="64px"
				classes={new Classes(["launcher-icon"])}
			/>
			<div style={style} />
			<div style={style} />
		</UIGridLayout>
	</IOSSimulator>)
}

export default Home
