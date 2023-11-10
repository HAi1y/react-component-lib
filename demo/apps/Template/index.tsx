import React = require("react");
import Icons from "../../components/Icons";
import Application from "../Application";
import Intro from "./Intro";

export default class TextFields extends Application {

	public icon = Icons.Tutorial({ text: "Text Fields", href: "/app/text-fields/intro" })

	public content = {
		"intro": <Intro />
	}

	public name: "getting-started"

	constructor() {
		super()
	}
}