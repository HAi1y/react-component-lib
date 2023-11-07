import React = require("react")
import { IOSSimulator, UIGridLayout, UITitle } from "../../dist"

export const Home = ({ apps }) => {

	var style = {
		width: "86px"
	}

	var appIcons = []

	for (var key in apps) {
		console.log(apps[key])
		appIcons.push(apps[key].icon)
	}

	while (appIcons.length % 4 != 0) {
		appIcons.push(<div style={style}></div>)
	}

	return (<IOSSimulator instructions={<div>"Instructions"</div>}>
		<UITitle text="Home" />
		<UIGridLayout >
			{appIcons}
		</UIGridLayout>
	</IOSSimulator>)
}

export default Home