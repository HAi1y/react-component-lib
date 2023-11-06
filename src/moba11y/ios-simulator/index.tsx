import * as React from 'react';
import { CTAButton } from '../components/Button';
import { Speaker, RotatingArrows, UpArrow, LeftArrow, RightArrow, DownArrow } from '../components/Icons';
import { UIWindow } from './UIWindow';
import { UIAccessibilityTrait } from './UIAccessibilityTrait';

enum RotorSettings {
	Headings = "Headings",
	Adjustable = "Adjustable",
	Words = "Words",
	Characters = "Characters"
}
export class Rotor {
	defaultRotor = [RotorSettings.Headings, RotorSettings.Words, RotorSettings.Characters]
}

export interface IOSSimulatorProps {
	instructions?: React.ReactElement | undefined
}

export function IOSSimulator({ children, instructions }: React.PropsWithChildren<IOSSimulatorProps>) {

	var [accessibilityFocus, setAccessibilityFocus] = React.useState(UIWindow.accessibilityFocus())
	var [accessibilityAnnouncement, setAccessibilityAnnouncement] = React.useState("")
	var [rotorSettings] = React.useState(["Headings", "Words", "Characters"])

	if (UIWindow.element === undefined) setTimeout(() => swipeRight(), 2000)

	var timeout: NodeJS.Timeout

	var speech: SpeechSynthesis

	if (window !== undefined) {
		speech = window.speechSynthesis
	}

	function activate() {
		console.log("Activate")
		UIWindow.accessibilityFocus().actions[0].action()
	}

	function swipeRight() {
		console.log("Swipe Right")
		setAccessibilityFocus(UIWindow.focusNext())
		setAccessibilityAnnouncement(UIWindow.accessibilityFocus().toAnnouncement())
	}

	function swipeLeft() {
		console.log("Swipe Left")
		setAccessibilityFocus(UIWindow.focusPrevious())
		setAccessibilityAnnouncement(UIWindow.accessibilityFocus().toAnnouncement())
	}

	function rotor() {
		console.log("Rotor")
		rotorSettings.push(rotorSettings.splice(0, 1)[0])
		setAccessibilityAnnouncement("Rotor: " + rotorSettings[0])
	}

	function swipeDown() {
		console.log("Swipe Down")
		const element = UIWindow.accessibilityFocus()

		if (element.traits.includes(UIAccessibilityTrait.adjustable)) {
			if (element.decrement) {
				element.decrement()
				setAccessibilityAnnouncement("" + element.value)
			} else {
				setAccessibilityAnnouncement("Doesn't support the increment action.")
			}
		}
	}

	function swipeUp() {
		console.log("Swipe Up")
		const element = UIWindow.accessibilityFocus()

		if (element.traits.includes(UIAccessibilityTrait.adjustable)) {
			if (element.increment) {
				element.increment()
				setAccessibilityAnnouncement("" + element.value)
			} else {
				setAccessibilityAnnouncement("Doesn't support the increment action.")
			}
		}
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

			if (speech.pending) {
				speech.cancel()

				if (timeout) {
					clearTimeout(timeout)
				}

				timeout = setTimeout(() => speech && speech.speak(msg), 250);
			} else {
				speech.speak(msg)
			}
		}

		return (<div className="voiceover-announcement">
			<div aria-label="VoiceOver Announcement">
				<Speaker />
			</div>
			<div><span>{announcement}</span></div>
		</div>)
	}

	return (<div className="moba11y-ios-simulator">
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
						<div className="voiceover-controls">
							<div className="controls">
								<CTAButton onClick={home}>Home</CTAButton>
								<CTAButton onClick={swipeUp}><UpArrow /></CTAButton>
								<CTAButton onClick={reset}>Reset</CTAButton>
								<CTAButton onClick={swipeLeft}><LeftArrow /></CTAButton>
								<CTAButton onClick={rotor}>
									<RotatingArrows />
								</CTAButton>
								<CTAButton onClick={swipeRight}><RightArrow /></CTAButton>
								<CTAButton onClick={debug}>Debug</CTAButton>
								<CTAButton onClick={swipeDown}><DownArrow /></CTAButton>
								<CTAButton onClick={activate}>Activate</CTAButton>
							</div>
						</div>
						<VoiceOverAnnouncement announcement={accessibilityAnnouncement} />
					</div>
				</div>
				<div className="inspector">
					<h2>Accessibility Inspector</h2>
					{accessibilityFocus.toJsx()}
				</div>
			</div>
		</section>
		<section>
			{instructions}
		</section>
	</div>)
}