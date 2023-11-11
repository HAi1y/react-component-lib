import * as React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { NavigationSection, TagList, PostList, HamburgerApp, CTAButton, UIPager, UICarousel, UIWindow } from "../dist"
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

const App = () => {

	return (
		<HamburgerApp title={"iOS Accessibility Simulator"} navigation={navigation} icon="https://moba11y.ghost.io/content/images/2023/10/Screen-Shot-2023-05-09-at-3.33.40-PM-2.png" location={""}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/app/tutorial/:screen" element={<Tutorial />} />
					<Route path="/app/text-fields/:screen" element={<TextFields />} />
				</Routes>
			</BrowserRouter>
		</HamburgerApp>
	);
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />)
