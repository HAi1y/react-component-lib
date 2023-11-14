import * as React from "react";
import { Helmet } from "react-helmet";
import { NavigationSection } from "../navigation/Navigation";
import { HamburgerMenu } from "../navigation";

export interface HamburgerAppProps {
	title: string;
	icon: string;
	location: string;
	navigation: Array<NavigationSection>;
	footer?: React.ReactNode
}

export const HamburgerApp = ({ title, navigation, icon, footer, children }: React.PropsWithChildren<HamburgerAppProps>) => {
	return (<>
		<Helmet>
			<html lang="en" />
			<link rel="icon" href={icon} type="png" />
		</Helmet>
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