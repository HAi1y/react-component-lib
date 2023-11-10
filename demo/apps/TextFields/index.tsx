import React = require("react");
import Icons from "../../components/Icons";
import Application from "../Application";
import Intro from "./Intro/Intro";
import FocusEverything from "./FocusEverything/FocusEverything";
import FocusInputs from "./FocusInputs/FocusInputs";

export default class TextFields extends Application {

	public icon = Icons.TextFields({ text: "Text Fields", href: "/app/text-fields/intro" })

	public content = {
		"intro": <Intro />,
		"focus-everything": <FocusEverything />,
		"focus-inputs": <FocusInputs />
	}

	public name: "getting-started"

	constructor() {
		super()
	}
}