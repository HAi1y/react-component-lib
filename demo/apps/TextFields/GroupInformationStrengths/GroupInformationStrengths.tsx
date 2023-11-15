import React = require("react")
import { IOSSimulator, UITitle, UIGridLayout, Classes, UIButtonNav, UIIconStyle } from "../../../../dist"
import Icons from "../../../components/Icons"
import MarkdownContainer from "../../../components/MardownContainer"
import { html, meta } from "./GroupInformationStrengths.md"

export function GroupInformationStrengths() {

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
					iconStyle={UIIconStyle.grouped}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="is"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					iconStyle={UIIconStyle.grouped}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="how"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					iconStyle={UIIconStyle.grouped}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="we"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					iconStyle={UIIconStyle.grouped}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="build"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					iconStyle={UIIconStyle.grouped}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="our"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					iconStyle={UIIconStyle.grouped}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="controls"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					iconStyle={UIIconStyle.grouped}
				/>
			</div>
		</UIGridLayout>
		<div style={{ margin: "1em auto" }} >
			<UIButtonNav text="Done" href="/" />
		</div>
	</IOSSimulator>)
}