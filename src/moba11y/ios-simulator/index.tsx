import * as React from 'react';
import { CTAButton } from '../components/Button';
import { TagList } from '../components/Tag';
import { Speaker, RotatingArrows, UpArrow, LeftArrow, RightArrow, DownArrow } from '../components/Icons';
import { UIAccessibilityElement } from './components/UIAccessibilityElement';
import { UIAccessibilityTrait, UIAccessibilityTraits } from './components/UIAccessibilityTrait';
import { UIAccessibilityCustomAction, UIAccessibilityCustomActions } from './components/UIAccessibilityCustomAction';

export interface IOSSimulatorProps {
	instructions?: React.ReactElement | undefined
}

export function IOSSimulator({ children, instructions }: React.PropsWithChildren<IOSSimulatorProps>) {

	const [accessibilityFocus, setAccessibilityFocus] = React.useState(new UIAccessibilityElement(
		"{AccessibilityLabel}",
		"{AccessibilityValue}",
		"{AccessibilityHint}",
		new UIAccessibilityTraits([UIAccessibilityTrait.staticText]),
		new UIAccessibilityCustomActions(
			[
				new UIAccessibilityCustomAction("A Custom Action", () => { alert("You called a custom action.") })
			]
		)
	))

	function activate() {
		alert("Activate")
	}

	function swipeRight() {
		document.getElementById("i")?.getAttribute("")
	}

	function swipeLeft() {
		alert("Swipe Left")
	}

	function rotor() {
		alert("Rotor")
	}

	function swipeDown() {
		alert("Swipe Down")
	}

	function swipeUp() {
		alert("Swipe Up")
	}

	function home() {
		alert("Home")
	}

	interface VoiceOverAnnouncementPropts {
		announcement: string
	}

	function VoiceOverAnnouncement({ announcement }: VoiceOverAnnouncementPropts) {
		return (<div className="voiceover-announcement">
			<div aria-label="VoiceOver Announcement">
				<Speaker />
			</div>
			<div><span>{announcement}</span></div>
		</div>)
	}

	function AccessibilityElement({ label, traits, value, hint, actions }: UIAccessibilityElement) {
		return (<div className="accessibility-element">
			<ul>
				<li><span><strong>Label:</strong></span><span>{label}</span></li>
				<li><span><strong>Traits:</strong></span><TagList tags={traits.tags()} /></li>
				<li><span><strong>Value:</strong></span>{value}</li>
				<li><span><strong>Hint:</strong></span>{hint}</li>
				<li><span><strong>Actions:</strong></span><TagList tags={actions.tags()}></TagList></li>
			</ul>
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
								<div></div>
								<CTAButton onClick={swipeLeft}><LeftArrow /></CTAButton>
								<CTAButton onClick={rotor}>
									<RotatingArrows />
									<div>Hello</div>

								</CTAButton>
								<CTAButton onClick={swipeRight}><RightArrow /></CTAButton>
								<div></div>
								<CTAButton onClick={swipeDown}><DownArrow /></CTAButton>
								<CTAButton onClick={activate}>Activate</CTAButton>
							</div>
						</div>
						<VoiceOverAnnouncement announcement="Click the right arrow below to begin." />
					</div>
				</div>
				<div className="inspector">
					<h2>Accessibility Inspector</h2>
					<AccessibilityElement {...accessibilityFocus} />
				</div>
			</div>
		</section>
		<section>
			{instructions}
		</section>
	</div>)
}