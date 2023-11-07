import React = require("react");
import Icons from "../../components/Icons";
import Application from "../Application";
import Intro from "./Intro";
import Linear from "./Linear";

export default class Tutorial extends Application {

	public icon = Icons.Tutorial({ text: "Start Here", href: "/app/getting-started/intro" })

	public content = {
		"intro": <Intro />,
		"linear": <Linear />
	}

	public name: "getting-started"

	constructor() {
		super()
	}
}