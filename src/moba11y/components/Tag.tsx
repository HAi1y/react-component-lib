import * as React from 'react';

export interface TagProps {
	title: string;
	active?: boolean
}

export const Tag = ({ title, active = false }: TagProps) => {
	return (
		<span className={"moba11y-tag" + (active ? " active" : "")}>{title}</span>
	)
}

export interface TagListProps {
	tags: Array<TagProps>
}

export const TagList = ({ tags }: TagListProps) => {
	return (<ul className={"moba11y-tag-list"}>
		{tags ? tags.map(({ title, active }, index) => {
			return (<li key={index} className={active ? "active" : ""}><Tag title={title} active={active} /></li>)
		}) : <></>}
	</ul>)
}