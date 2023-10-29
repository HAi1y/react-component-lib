import * as React from "react";

export interface LogoProps {
	title: string;
	icon: string;
	alt: string;
}

export const Logo = ({ title, icon, alt }: LogoProps) => {
	return (<>
		<img src={icon} alt={alt} />
		<span>{title}</span>
	</>);
}

export default Logo;