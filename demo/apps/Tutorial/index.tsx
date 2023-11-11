import React = require("react");
import Intro from "./Intro/Intro";
import Linear from "./Linear/Linear";
import { useParams } from "react-router-dom";

export default function Tutorial() {

	const { screen } = useParams()

	return ({
		"intro": <Intro />,
		"linear": <Linear />
	}[screen])
}