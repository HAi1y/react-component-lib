import React = require("react");
import { IOSSimulator, UITitle, UIButtonNav, UITextField } from "../../../../dist";
import { meta, html } from "../GroupInformation/GroupInformation.md"
import MarkdownContainer from "../../../components/MardownContainer";

export default function GroupInformation({ }) {

	return (<IOSSimulator instructions={<MarkdownContainer title={meta.title} html={html} />}>
		<UITitle text="Information Grouping" />
		<UITextField label="Username" value="GnarlyDawg84" />
		<UITextField label="Password" value="IceCream" errors={["That is a terrible password.", "Not long enough."]} />
		<UITextField label="Birthday" value="yesterday" errors={["Expected format: MM/DD/YY"]} />
		<div style={{ margin: "1em auto" }} >
			<UIButtonNav text="Next" href="/app/text-fields/group-information-strengths" />
		</div>
	</IOSSimulator >)
}