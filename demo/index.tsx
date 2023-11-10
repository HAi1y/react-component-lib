import * as React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { NavigationSection, TagList, PostList, HamburgerApp, CTAButton, UIPager, UICarousel } from "../dist"
import "../src/moba11y/styles.css"
import Tutorial from './apps/Tutorial';
import Home from './apps/Home';
import TextFields from './apps/TextFields';

const navigation: Array<NavigationSection> = [{
	heading: "Site",
	children: [
		{ label: "Home", "url": "/" },
		{ label: "MobA11y", "url": "www.moba11y.com" }
	]
}, {
	heading: "Related Blog Posts",
	children: [
		{ label: "Tags", url: "/components/tags" },
		{ label: "Buttons", url: "/components/buttons" },
		{ label: "PostList", url: "/post-list" }
	]
}];

function Applications({ apps }) {

	const { application, screen } = useParams()

	console.log("Loading Application: " + application + " Screen: " + screen)

	return apps[application].content[screen]
}

const App = () => {

	var apps = {
		["getting-started"]: new Tutorial(),
		["text-fields"]: new TextFields()
	}

	return (
		<HamburgerApp title={"iOS Accessibility Simulator"} navigation={navigation} icon="https://moba11y.ghost.io/content/images/2023/10/Screen-Shot-2023-05-09-at-3.33.40-PM-2.png" location={""}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home apps={apps} />} />
					<Route path="/app/:application/:screen" element={<Applications apps={apps} />} />
				</Routes>
			</BrowserRouter>
		</HamburgerApp>
	);
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />)
