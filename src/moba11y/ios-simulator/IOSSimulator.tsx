import * as React from 'react';
import { CTAButton } from '../components/Button';
import { Speaker, RotatingArrows, UpArrow, LeftArrow, RightArrow, DownArrow } from '../components/Icons';
import { UIWindow } from './UIWindow';
import { UIAccessibilityTrait } from './UIAccessibilityTrait';
import { UIAccessibilityElement } from './UIAccessibilityElement';
import { TagProps } from '../components/Tag';

export enum RotorSettings {
	Headings = "Headings",
	Adjustable = "Adjustable",
	Words = "Words",
	Characters = "Characters",
	Actions = "Actions"
}

export class Rotor extends Array<RotorSettings> {

	index = 0;

	tags(): Array<TagProps> {
		const result: Array<TagProps> = []
		this.forEach((label, index) => {
			result.push({ title: label, active: (index === this.index) })
		})

		return result
	}

	nextRotor() {
		if (++this.index === this.length) {
			this.index = 0;
		}
	}

	previousRotor() {
		if (--this.index < 0) {
			this.index = this.length - 1;
		}
	}

	setTo(setting: RotorSettings) {
		if (this.includes(setting)) {
			this.index = this.indexOf(setting)
		}
	}

	current() {
		return this[this.index]
	}

	execute(up: boolean, element: UIAccessibilityElement): string | undefined {
		switch (this.current()) {
			case RotorSettings.Adjustable: return this.adjustable(up, element); break;
			case RotorSettings.Headings: return this.heading(up, element); break;
			case RotorSettings.Characters: return this.character(up, element); break;
			default: return "Rotor setting not supported yet"
		}
	}

	character(up: boolean, element: UIAccessibilityElement): string | undefined {
		return element.character(up, element)
	}

	adjustable(up: boolean, element: UIAccessibilityElement): string | undefined {

		if (element === undefined) return undefined

		if (element.traits.includes(UIAccessibilityTrait.adjustable)) {
			if (up && element.increment) {
				element.increment()
				return "" + element.value
			} else if (!up && element.decrement) {
				element.decrement()
				return "" + element.value
			}
		}

		return "Adjustable control not properly supported... oops. This is a content bug. Sorry."
	}

	heading(up: boolean, element: UIAccessibilityElement): string | undefined {

		var heading: UIAccessibilityElement | undefined = element
		var limit = 1000

		while (heading) {

			if (heading.traits.includes(UIAccessibilityTrait.heading)) {
				UIWindow.focus(heading)
				return undefined
			}

			heading = (up ? heading.previousElement : heading.nextElement)
			if (limit-- < 0) break;
		}

		return (up ? "No Previous Heading Found" : "No Next Heading Found")
	}

	constructor(index: number = 0) {
		super()
		this.index = index
		this.push(RotorSettings.Headings)
	}

	add(setting: RotorSettings) {
		if (!this.includes(setting)) this.push(setting)
		return this
	}
}

export interface IOSSimulatorProps {
	instructions?: React.ReactElement | undefined
}

export function IOSSimulator({ children, instructions }: React.PropsWithChildren<IOSSimulatorProps>) {

	var [accessibilityFocus, setAccessibilityFocus] = React.useState(UIWindow.accessibilityFocus())
	var [accessibilityAnnouncement, setAccessibilityAnnouncement] = React.useState("")
	var [rotor, setRotor] = React.useState(new Rotor)

	var timeout: NodeJS.Timeout
	var firstSwipeTimeout: NodeJS.Timeout

	if (UIWindow.element === undefined)
		firstSwipeTimeout = setTimeout(() => swipeRight(), 2000)

	var speech: SpeechSynthesis

	if (window !== undefined) {
		speech = window.speechSynthesis
	}

	var updateRotor = (r: Rotor) => {
		rotor = r
		setRotor(rotor)
	}

	UIWindow.updateRotor = updateRotor

	UIWindow.onFocus = (element: UIAccessibilityElement) => {

		if (element.actions.length === 0) {
			UIWindow.hiddenControls.activate = true
		} else {
			UIWindow.hiddenControls.activate = false
		}

		setAccessibilityFocus(element)
		setAccessibilityAnnouncement(element.toAnnouncement())
		if (element.rotor) setRotor(element.rotor)
	}

	UIWindow.onAnnouncement = (message: string) => {
		setAccessibilityAnnouncement(message)
	}

	function activate() {
		console.log("Activate")
		UIWindow.accessibilityFocus().actions[0].action()
	}

	function swipeRight() {
		clearTimeout(firstSwipeTimeout)
		console.log("Swipe Right")
		UIWindow.focusNext()
	}

	function swipeLeft() {
		console.log("Swipe Left")
		setAccessibilityFocus(UIWindow.focusPrevious())
		setAccessibilityAnnouncement(UIWindow.accessibilityFocus().toAnnouncement())
	}

	function twist() {
		console.log("Rotor")
		rotor.nextRotor()
		setRotor(rotor)
		setAccessibilityAnnouncement(rotor.current())
	}

	function swipeDown() {
		console.log("Swipe Down")
		var rotorResult = rotor.execute(false, UIWindow.accessibilityFocus())
		if (rotorResult) setAccessibilityAnnouncement(rotorResult)
	}

	function swipeUp() {
		console.log("Swipe Up")
		var rotorResult = rotor.execute(true, UIWindow.accessibilityFocus())
		if (rotorResult) setAccessibilityAnnouncement(rotorResult)
	}

	function home() {
		console.log("Home")
		if (window !== undefined) window.location.href = "/"
	}

	function debug() {
		console.log("Debug")
		UIWindow.log()
	}

	function reset() {
		console.log("Reset")
	}

	interface VoiceOverAnnouncementPropts {
		announcement: string
	}

	function VoiceOverAnnouncement({ announcement }: VoiceOverAnnouncementPropts) {

		if (speech) {

			var msg = new SpeechSynthesisUtterance();
			msg.text = announcement

			speech.cancel()

			if (timeout) {
				clearTimeout(timeout)
			}

			timeout = setTimeout(() => speech && speech.speak(msg), 250);
		}

		return (<div className="voiceover-announcement">
			<div aria-label="VoiceOver Announcement">
				<Speaker />
			</div>
			<div><span>{announcement}</span></div>
		</div>)
	}

	function VoiceOverControls() {
		return (<div className="voiceover-controls">
			<div className="controls">
				{UIWindow.hiddenControls.home ? <div /> : <CTAButton onClick={home}>Home</CTAButton>}
				{UIWindow.hiddenControls.swipeUp ? <div /> : <CTAButton onClick={swipeUp}><UpArrow /></CTAButton>}
				{UIWindow.hiddenControls.reset ? <div /> : <CTAButton onClick={reset}>Reset</CTAButton>}
				{UIWindow.hiddenControls.swipeLeft ? <div /> : <CTAButton onClick={swipeLeft}><LeftArrow /></CTAButton>}
				{UIWindow.hiddenControls.twist ? <div /> : <CTAButton onClick={twist}><RotatingArrows /></CTAButton>}
				{UIWindow.hiddenControls.swipeRight ? <div /> : <CTAButton onClick={swipeRight}><RightArrow /></CTAButton>}
				{UIWindow.hiddenControls.debug ? <div /> : <CTAButton onClick={debug}>Debug</CTAButton>}
				{UIWindow.hiddenControls.swipeDown ? <div /> : <CTAButton onClick={swipeDown}><DownArrow /></CTAButton>}
				{UIWindow.hiddenControls.activate ? <div /> : <CTAButton onClick={activate}>Activate</CTAButton>}
			</div>
		</div>)
	}

	function onKeyDown(event: KeyboardEvent) {

		var captured = true;

		switch (event.key) {
			case "ArrowRight": swipeRight(); break;
			case "ArrowLeft": swipeLeft(); break;
			case "ArrowDown": swipeDown(); break;
			case "ArrowUp": swipeUp(); break;
			case "R": twist(); break;
			case "H": home(); break;
			default:
				captured = false;
		}


		if (captured) {
			event.preventDefault()
			event.stopPropagation()
		}
	}

	React.useEffect(() => {
		window.addEventListener("keydown", onKeyDown)

		return () => {
			window.removeEventListener("keydown", onKeyDown)
		}
	})

	return (<div className="moba11y-ios-simulator" role="application">
		<section className="device">
			<div>
				<div className="screen">
					{children}
				</div>
			</div>
			<div>
				<div className="simulator">
					<h2>VoiceOver</h2>
					<div>
						<VoiceOverControls />
						<VoiceOverAnnouncement announcement={accessibilityAnnouncement} />
					</div>
				</div>
				<div className="inspector">
					<h2>Accessibility Inspector</h2>
					{accessibilityFocus.toJsx()}
				</div>
			</div>
		</section>
		<section className="instructions">
			{instructions}
		</section>
	</div>)
}