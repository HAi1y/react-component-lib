"use client"
import * as React from "react";
import { NavigationSection } from "../navigation/Navigation";
import { HamburgerMenu } from "../navigation";

export interface HamburgerAppProps {
	title: string;
	icon: string;
	location: string;
	navigation: Array<NavigationSection>;
	footer?: React.ReactNode
}

export const HamburgerApp = ({ title, navigation, footer, children }: React.PropsWithChildren<HamburgerAppProps>) => {
	return (<>
		<div className="viewport">
			<header>
				<HamburgerMenu title={title} navigation={navigation} />
			</header>
			<main>
				{children}
			</main>
			{footer ? footer : <footer />}
		</div>
	</>);
}

export default HamburgerApp;