import React = require("react")
import { Classes, IOSSimulator, UIGridLayout, UITitle } from "../../dist"
import { html } from "./Home.md"
import Tutorial from "./Tutorial"
import TextFields from "./TextFields"
import Icons from "../components/Icons"

export const Home = () => {

	var style = {
		width: "86px"
	}

	return (<IOSSimulator instructions={<div>"Instructions"</div>}>
		<UITitle text="Home" />
		<UIGridLayout >
			< Icons.Tutorial
				text="Start Here"
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
			<div style={{ width: "72px", height: "64px" }} />
			<div style={{ width: "72px", height: "64px" }} />
		</UIGridLayout>
	</IOSSimulator>)
}

export default Home
