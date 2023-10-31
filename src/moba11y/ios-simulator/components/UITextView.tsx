import * as React from 'react';


export enum FontStyle {
	title = "title-1",
	body = "body"
}

export interface UITextViewProps {
	text: string
	fontStyle?: FontStyle
	className?: string
}

export function UITextView({ text, fontStyle = FontStyle.body, className }: UITextViewProps) {

	const classes = ["ios", fontStyle];
	classes.concat(className ? className : []);

	return (
		<span className={classes.join(' ')}>
			{text}
		</span>
	)
}

export function UITitle({ text, fontStyle = FontStyle.title, className }: UITextViewProps) {

	const classes = ["ios", fontStyle];

	classes.concat(className ? className : []);

	return (
		<h2 className={classes.join(' ')}>
			{text}
		</h2>
	)
}