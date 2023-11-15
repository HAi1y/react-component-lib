import React = require("react");
import Icons from "../../components/Icons";
import Intro from "./Intro/Intro";
import FocusEverything from "./FocusEverything/FocusEverything";
import FocusInputs from "./FocusInputs/FocusInputs";
import { useParams } from "react-router-dom";
import GroupInformation from "./GroupInformation/GroupInformation";
import { FocusEverythingWeaknesses } from "./FocusEverythingWeaknesses/FocusEverythingWeaknesses";

export default function TextFields() {

	const { screen } = useParams()

	var content = {
		"intro": <Intro />,
		"focus-everything": <FocusEverything />,
		"focus-inputs": <FocusInputs />,
		"focus-everything-weaknesses": <FocusEverythingWeaknesses />,
		"group-information": <GroupInformation />
	}


	return (content[screen])
}