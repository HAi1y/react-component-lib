import * as React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HamburgerMenu, NavigationSection, TagList, PostCard, PostList, HamburgerApp, CTAButton } from "../dist"
import "../src/moba11y/styles.css"
import { IOSSimulator, UITitle } from '../dist';

function Example() {
	return (<>
		<IOSSimulator instructions={<div>"Instructions"</div>}>
			{<UITitle text="Home" />}
		</IOSSimulator>
	</>)
}

const navigation: Array<NavigationSection> = [{
	heading: "Site",
	children: [{ label: "Home", "url": "/" }]
}, {
	heading: "Components",
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
					<Route path="/" element={Example()} />
					<Route path="/components/tags" element={<TagList tags={[{ "title": "iOS" }, { title: "iOS Accessibility Guide" }]} />} />
					<Route path="/components/buttons" element={<ButtonList />} />
					<Route path="/post-list" element={ExmaplePostList()} />
				</Routes>
			</BrowserRouter>
		</HamburgerApp>
	);
};

function ButtonList() {
	return (<ul>
		<li><CTAButton onClick={() => { alert("hi") }} >Say Hi</CTAButton></li>
		<li><CTAButton onClick={() => { alert("hi") }} >Say Hi</CTAButton></li>
	</ul>)
}
function ExmaplePostList() {
	return (
		<PostList posts={[
			{
				title: "iOS Accessibility Testing with Voice Control",
				image: "https://moba11y.ghost.io/content/images/2023/10/Show-Names-3-1.png",
				url: "https://google.com",
				author: "Chris McMeeking",
				tags: [{ title: "iOS" }, { title: "iOS Accessibility Guide" }],
				caption: "Voice Control: Show Names"
			},
			{
				title: "iOS Accessibility Testing with Voice Control",
				image: "https://moba11y.ghost.io/content/images/2023/10/Show-Names-3-1.png",
				url: "https://google.com",
				author: "Chris McMeeking",
				tags: [{ title: "iOS" }, { title: "iOS Accessibility Guide" }],
				caption: "Voice Control: Show Names"
			},
			{
				title: "iOS Accessibility Testing with Voice Control",
				image: "https://moba11y.ghost.io/content/images/2023/10/Show-Names-3-1.png",
				url: "https://google.com",
				author: "Chris McMeeking",
				tags: [{ title: "iOS" }, { title: "iOS Accessibility Guide" }],
				caption: "Voice Control: Show Names"
			}
		]} />
	)
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />)
