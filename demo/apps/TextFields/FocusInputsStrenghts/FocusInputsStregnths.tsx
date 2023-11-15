import React = require("react")
import { IOSSimulator, UITitle, UIGridLayout, Classes, UIButtonNav, UIIconStyle } from "../../../../dist"
import Icons from "../../../components/Icons"
import MarkdownContainer from "../../../components/MardownContainer"
import { html, meta } from "./FocusInputsStrengths.md"

export function FocusInputsStrengths() {

	var style = {
		width: "72px",
		height: "72px"
	}

	return (<IOSSimulator instructions={<MarkdownContainer title={meta.title} html={html} />}>
		<UITitle text="Home" />
		<UIGridLayout >
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="This"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					iconStyle={UIIconStyle.input}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="is"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					iconStyle={UIIconStyle.input}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="how"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					iconStyle={UIIconStyle.input}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="the"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					iconStyle={UIIconStyle.input}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="iOS"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					iconStyle={UIIconStyle.input}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="launcher"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					iconStyle={UIIconStyle.input}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="behaves"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					iconStyle={UIIconStyle.input}
				/>
			</div>
		</UIGridLayout>
		<div style={{ margin: "1em auto" }} >
			<UIButtonNav text="Next" href="/app/text-fields/group-information" />
		</div>
	</IOSSimulator>)
}