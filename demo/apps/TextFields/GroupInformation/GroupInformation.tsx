import React = require("react");
import { IOSSimulator, UITitle, UIButtonNav, UITextField } from "../../../../dist";
import { meta, html } from "../FocusEverything/FocusEverything.md"
import MarkdownContainer from "../../../components/MardownContainer";

export default function GroupInformation({ }) {

	return (<IOSSimulator instructions={<MarkdownContainer title={meta.title} html={html} />}>
		<UITitle text="Group Information" />
		<UITextField label="Username" value="GnarlyDawg84" />
		<UITextField label="Password" value="IceCream" errors={["That is a terrible password.", "Not long enough."]} />
		<UITextField label="Birthday" value="yesterday" errors={["Expected format: MM/DD/YY"]} />
		<div style={{ margin: "1em auto" }} >
			<UIButtonNav text="Back" href="/app/text-fields/focus-everything" />
			<UIButtonNav text="Next" href="/app/text-fields/focus-inputs" />
		</div>
	</IOSSimulator >)
}