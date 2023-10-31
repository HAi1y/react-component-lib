import * as React from 'react';

export interface TagProps {
	title: string;
}

export const Tag = ({ title }: TagProps) => {
	return (
		<span className="moba11y-tag">{title}</span>
	)
}

export interface TagListProps {
	tags: Array<TagProps>
}

export const TagList = ({ tags }: TagListProps) => {
	return (<ul className={"moba11y-tag-list"}>
		{tags.map(({ title }, index) => {
			return (<li key={index}><Tag title={title} /></li>)
		})}
	</ul>)
}