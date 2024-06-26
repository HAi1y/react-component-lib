import * as React from 'react';

export interface NavigationElement {
	label: string;
	url: string;
	active?: boolean;
}

export interface NavigationSection {
	heading: string;
	children: Array<NavigationElement>
}

export interface NavigationProps {
	navigation: Array<NavigationSection>;
	isHidden: boolean;
}

export const Navigation = ({ navigation = [], isHidden }: NavigationProps) => {
	return (<>
		<nav className={isHidden ? "hidden" : "not-hidden"}>
			{navigation && navigation.map((section: NavigationSection, index1: number) => {
				return (
					<ul key={"ul-" + index1} >
						{section.heading && <li>
							<h2>{section.heading}</h2>
						</li>}

						{section.children && section.children.map((element: NavigationElement, index: number) => {

							const key = "" + index1 + "-" + index;

							return (
								<li key={"li-" + key} className={element.active ? "active" : "inactive"}>
									<a href={element.url}
										className={element.active ? "active" : ""}
										aria-current={element.active ? "page" : undefined}>
										{element.label}
									</a>
								</li>)
						})}
					</ul>)
			})}
		</nav>
	</>)
}
