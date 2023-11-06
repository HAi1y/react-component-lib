import * as React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HamburgerMenu, NavigationSection, TagList, PostCard, PostList, HamburgerApp, CTAButton, UITextView, UIGridLayout, UIIcon, UIPager, UIWindow, UICarousel } from "../dist"
import "../src/moba11y/styles.css"
import { IOSSimulator, UITitle } from '../dist';
import { Classes } from '../dist';

function UIIconTutorial({ text, href }) {

	return (<UIIcon label={text} classes={new Classes(["launcher-icon"])} href={href}>
		<svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<g>
				<g>
					<path d="M434.301,325.094c-7.45-0.746-14.898,1.37-20.791,5.844c-4.695-7.878-12.702-13.468-21.964-14.395
		c-7.456-0.746-14.899,1.37-20.791,5.844c-4.695-7.878-12.702-13.468-21.965-14.395c-5.691-0.57-11.373,0.528-16.365,3.069v-39.498
		c27.594-29.971,42.756-68.767,42.756-109.626C375.182,72.645,302.537,0,213.244,0S51.307,72.645,51.307,161.937
		s72.644,161.937,161.937,161.937c20.993,0,41.251-3.92,60.393-11.645v106.242c0,51.572,41.956,93.528,93.528,93.528
		s93.528-41.956,93.528-93.528v-62.915C460.693,339.956,449.101,326.575,434.301,325.094z M273.637,217.519v77.27
		c-18.979,8.659-39.27,13.052-60.393,13.052c-80.451,0-145.904-65.452-145.904-145.904c0-80.451,65.453-145.904,145.904-145.904
		s145.904,65.453,145.904,145.904c0,30.493-9.375,59.712-26.722,84.192v-27.391c0-15.601-11.592-28.982-26.391-30.464
		c-8.294-0.828-16.575,1.883-22.721,7.444C277.164,201.283,273.637,209.229,273.637,217.519z M444.66,418.472
		c0,42.731-34.764,77.495-77.495,77.495s-77.495-34.764-77.495-77.495V217.52c0-3.768,1.603-7.381,4.401-9.911
		c2.486-2.25,5.626-3.45,8.958-3.45c0.466,0,0.935,0.023,1.408,0.07c6.704,0.67,11.956,7.044,11.956,14.509v118.497
		c0,4.427,3.589,8.017,8.017,8.017s8.017-3.589,8.017-8.017c0-3.768,1.603-7.381,4.401-9.912c2.834-2.563,6.517-3.764,10.366-3.379
		c6.704,0.67,11.956,7.044,11.956,14.508v7.333c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017
		c0-3.768,1.603-7.381,4.401-9.912c2.834-2.563,6.515-3.764,10.366-3.379c6.704,0.67,11.956,7.044,11.956,14.508v7.333
		c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017c0-3.768,1.603-7.381,4.401-9.912
		c2.834-2.564,6.517-3.764,10.366-3.379c6.704,0.671,11.956,7.044,11.956,14.509V418.472z"/>
				</g>
			</g>
			<g>
				<g>
					<path d="M261.02,88.509c-12.713-12.713-29.338-19.848-46.811-20.092c-18.359-0.26-35.587,6.684-48.622,19.538
		c-13.037,12.857-20.217,30.02-20.217,48.329c0,4.427,3.589,8.017,8.017,8.017s8.017-3.589,8.017-8.017
		c0-13.984,5.483-27.093,15.441-36.913c9.955-9.818,23.139-15.109,37.141-14.923c27.317,0.381,50.716,23.779,51.095,51.095
		c0.37,26.541-19.177,48.98-45.468,52.196c-8.201,1.003-14.385,8.039-14.385,16.368v9.137c0,4.427,3.589,8.017,8.017,8.017
		s8.017-3.589,8.017-8.017v-9.137c0-0.246,0.157-0.436,0.299-0.454c34.434-4.211,60.037-33.589,59.552-68.333
		C280.869,117.847,273.733,101.222,261.02,88.509z"/>
				</g>
			</g>
			<g>
				<g>
					<path d="M213.244,235.157c-6.778,0-12.292,5.514-12.292,12.292s5.514,12.292,12.292,12.292s12.292-5.514,12.292-12.292
		S220.022,235.157,213.244,235.157z"/>
				</g>
			</g>
		</svg>
	</UIIcon>)
}

function Example() {
	return (<>
		<IOSSimulator instructions={<div>"Instructions"</div>}>
			<UITitle text="Home" />
			<UIGridLayout >
				<UIIconTutorial text="Pager" href="/simulator/pager" />
				<UIIconTutorial text="Carousel" href="/simulator/carousel" />
				<UIIconTutorial text="Help" href="/simulator/pager" />
				<UIIconTutorial text="Annotations" href="/simulator/pager" />
			</UIGridLayout>
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

	const createPage = (index: number) => {
		if (index === 1) return (<UIIconTutorial text="Demo 1" href="/simulator/pager" />)
		else if (index === 2) return (<UIIconTutorial text="Multiple Lines" href="/simulator/pager" />)
		else if (index === 3) return (<UIIconTutorial text="Help" href="/simulator/pager" />)
	}

	return (
		<HamburgerApp title={"iOS Accessibility Simulator"} navigation={navigation} icon="https://moba11y.ghost.io/content/images/2023/10/Screen-Shot-2023-05-09-at-3.33.40-PM-2.png" location={""}>

			<BrowserRouter>
				<Routes>
					<Route path="/" element={Example()} />
					<Route path="/simulator/pager" element={<IOSSimulator >
						<UIPager initial={2} max={3} />
					</IOSSimulator>} />
					<Route path="/simulator/carousel" element={<IOSSimulator >
						<UICarousel label="Pager 1" views={[createPage(3), createPage(2), createPage(3)]} />
						<UICarousel label="Pager 2" views={[createPage(2), createPage(2), createPage(3)]} />
					</IOSSimulator>} />
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
