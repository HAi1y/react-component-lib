import React = require("react")
import { IOSSimulator, UITitle, UIGridLayout, Classes, UIButtonNav } from "../../../../dist"
import Icons from "../../../components/Icons"
import MarkdownContainer from "../../../components/MardownContainer"
import { html, meta } from "./FocusEverythingWeaknesses.md"

export function FocusEverythingWeaknesses() {

	var style = {
		width: "72px",
		height: "72px"
	}

	return (<IOSSimulator instructions={<MarkdownContainer title={meta.title} html={html} />}>
		<UITitle text="Home" />
		<UIGridLayout >
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="Apple"
					href="/app/tutorial/intro"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					annoying={true}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="chose"
					href="/app/tutorial/intro"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					annoying={true}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="not"
					href="/app/tutorial/intro"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					annoying={true}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="to"
					href="/app/tutorial/intro"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					annoying={true}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="do"
					href="/app/tutorial/intro"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					annoying={true}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="this"
					href="/app/tutorial/intro"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					annoying={true}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="on"
					href="/app/tutorial/intro"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					annoying={true}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="the"
					href="/app/tutorial/intro"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					annoying={true}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="home"
					href="/app/tutorial/intro"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					annoying={true}
				/>
			</div>
			<div className="ios launcher-icon">
				< Icons.Tutorial
					text="screen"
					href="/app/tutorial/intro"
					width={style.width}
					height={style.height}
					classes={new Classes([])}
					annoying={true}
				/>
			</div>
		</UIGridLayout>
		<div style={{ margin: "1em auto" }} >
			<UIButtonNav text="Next" href="/app/text-fields/focus-inputs" />
		</div>
	</IOSSimulator>)
}