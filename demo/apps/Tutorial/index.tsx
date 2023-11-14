import React = require("react");
import Intro from "./Intro/Intro";
import Headings from "./Headings";
import { useParams } from "react-router-dom";
import Rotor from "./Rotor";
import Home from "./Home";

export default function Tutorial() {

	const { screen } = useParams()

	return ({
		"intro": <Intro />,
		"headings": <Headings />,
		"rotor": <Rotor />,
		"home": <Home />
	}[screen])
}