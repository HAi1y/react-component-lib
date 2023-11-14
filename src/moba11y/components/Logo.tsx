import * as React from "react";

export interface LogoProps {
	title: string;
	icon: string;
	alt: string;
	style?: React.CSSProperties
}

export const Logo = ({ title, icon, alt }: LogoProps) => {

	return (<div className="moba11y-logo">
		<img src={icon} alt={alt} />
		<span>{title}</span>
	</div>);
}

export const MobA11yLogo = () => {

	var title = "MobA11y"
	var icon = "https://moba11y.ghost.io/content/images/2023/10/Screen-Shot-2023-05-09-at-3.33.40-PM-2.png"
	var alt = "MobA11y Logo"

	return <div className="moba11y-logo">
		<img src={icon} alt={alt} />
		<span>By <a href="https://moba11y.com">{title}</a></span>
	</div>
}

export default Logo;