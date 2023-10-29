import * as React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HamburgerMenu, NavigationSection, TagList, PostCard, PostList, HamburgerApp } from "../dist"
import "../src/moba11y/styles.css"

function ExampleList() {
	return (
		<ul>
			<li><a href="/hamburger-menu">HamburgerMenu</a></li>
			<li><a href="/tags">Tags</a></li>
			<li><a href="/post-card">PostCard</a></li>
			<li><a href="/post-list">PostCard</a></li>
		</ul>
	)
}

const navigation: Array<NavigationSection> = [{
	heading: "Components",
	children: [{
		label: "Home",
		url: "/",
		active: true
	}, {
		label: "About",
		url: "https://google.com"
	}]
}, {
	heading: "Components",
	children: [{
		label: "Home",
		url: "/",
		active: true
	}, {
		label: "About",
		url: "https://google.com"
	}]
}];

const App = () => {
	return (
		<HamburgerApp title={"Playground"} navigation={navigation} icon="https://moba11y.ghost.io/content/images/2023/10/Screen-Shot-2023-05-09-at-3.33.40-PM-2.png" location={""}>

			<BrowserRouter>
				<Routes>
					<Route path="/" element={ExampleList()} />
					<Route path="/hamburger-menu" element={ExampleHamburgerMenu()} />
					<Route path="/hamburger-menu/android" element={ExampleHamburgerMenuAndroid()} />
					<Route path="/hamburger-menu/blog" element={ExampleHamburgerMenu()} />
					<Route path="/tags" element={<TagList tags={[{ "title": "iOS" }, { title: "iOS Accessibility Guide" }]} />} />
					<Route path="/hamburger-app" element={ExampleHamburgerApp()} />
					<Route path="/post-list" element={ExmaplePostList()} />
				</Routes>
			</BrowserRouter>
		</HamburgerApp>
	);
};


function ExampleHamburgerApp() {
	return (<HamburgerApp title="Title" navigation={navigation} location={""} icon="https://moba11y.ghost.io/content/images/2023/10/Screen-Shot-2023-05-09-at-3.33.40-PM-2.png" />)
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


function ExampleHamburgerMenu() {
	return (
		<>
			<HamburgerMenu navigation={navigation} title={"MobA11y"} />
		</>
	)
}

function ExampleHamburgerMenuAndroid() {

	const navigation: Array<NavigationSection> = [{
		heading: "",
		children: [{
			label: "MobA11y",
			url: "/hamburger-menu/"
		}
		]
	}];

	return (
		<>
			<HamburgerMenu navigation={navigation} title={"MobA11y - VoiceOver"} />
		</>
	)
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />)
