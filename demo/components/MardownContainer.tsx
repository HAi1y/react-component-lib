import * as React from "react"

export interface MarkdownContainerProps {
	title: string
	html: string
}
export default function MarkdownContainer({ title, html }: MarkdownContainerProps) {
	return (<>
		<h2>{title}</h2>
		<div dangerouslySetInnerHTML={{ __html: html }} />
	</>
	)
}