import * as React from "react";
import { Helmet } from "react-helmet";
import { NavigationSection } from "../navigation/Navigation";
import { HamburgerMenu } from "../navigation";

export interface HamburgerAppProps {
	title: string;
	icon: string;
	location: string;
	navigation: Array<NavigationSection>;
}

export const HamburgerApp = ({ title, navigation, icon, children }: React.PropsWithChildren<HamburgerAppProps>) => {
	return (<>
		<Helmet>
			<html lang="en" />
			<link rel="icon" href={icon} type="png" />
		</Helmet>
		<body id="root" className="viewport">
			<header>
				<HamburgerMenu title={title} navigation={navigation} />
			</header>
			<main>
				{children}
			</main>
			<footer />
		</body>
	</>);
}

export default HamburgerApp;