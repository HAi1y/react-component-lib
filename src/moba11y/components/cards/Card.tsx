import * as React from 'react';
import { TagList, TagProps } from '../tags/Tag';

export interface PostCardProps {
	title: string;
	image: string;
	url: string;
	author: string | undefined;
	tags: Array<TagProps> | undefined;
	caption: string | undefined;
}

export const PostCard = ({ title, image, url, author, tags, caption }: PostCardProps) => {
	return (
		<div className="moba11y-post-card">
			<a href={url}>
				<figure>
					<img src={image} />
					{caption && <figcaption>{caption}</figcaption>}
				</figure>
				{tags && <TagList tags={tags} />}
				<div className="title">{title}</div>
				<div className="author">{"By " + author}</div>
			</a>
		</div>
	)
}

export interface PostListProps {
	posts: Array<PostCardProps>;
}

export const PostList = ({ posts }: PostListProps) => {
	return (
		<div className="moba11y-post-list">
			<ol>
				{posts.map((props, index) => { return (<li key={index}><PostCard {...props} /></li>) })}
			</ol>
		</div>
	)
} 