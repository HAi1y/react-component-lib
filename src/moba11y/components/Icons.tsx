import * as React from 'react';

export interface IconProps {
	width: string
	height: string
}
export default class Icons {
	static Information = (props: IconProps) => <Information {...props} />
}

export function Speaker() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 75 75" fill="currentColor">
			<path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" style={{ stroke: "currentColor", strokeWidth: "3", strokeLinejoin: "round", fill: "currentColor" }} />
			<path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style={{ fill: "currentColor", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" }} />
		</svg>
	)
}

export interface ArrowProps {
	rotation: number
}

export function Arrow({ rotation }: ArrowProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet" style={{ fill: "currentColor", transform: "rotate(" + rotation + "deg)" }}>
			<metadata>
				Created by potrace 1.15, written by Peter Selinger 2001-2017
			</metadata>
			<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" stroke="none">
				<path d="M7556 10480 c-384 -61 -686 -316 -799 -676 -88 -278 -46 -583 115 -832 40 -62 200 -228 806 -834 l756 -758 -3289 -3 -3290 -2 -83 -23 c-412 -110 -696 -437 -742 -850 -50 -453 224 -878 662 -1028 166 -57 -15 -54 3503 -54 l3240 0 -756 -757 c-470 -471 -772 -781 -796 -818 -266 -399 -218 -911 117 -1245 186 -187 417 -282 685 -283 169 -1 295 28 445 103 168 85 66 -15 2024 1955 l1441 1450 52 95 c196 364 159 787 -98 1104 -32 39 -772 785 -1646 1657 -1369 1367 -1600 1594 -1674 1643 -157 102 -315 153 -504 160 -60 3 -137 1 -169 -4z" />
			</g>
		</svg>
	)
}

export function RightArrow() {
	return (<Arrow rotation={0} />)
}

export function LeftArrow() {
	return (<Arrow rotation={180} />)
}

export function UpArrow() {
	return (<Arrow rotation={270} />)
}

export function DownArrow() {
	return (<Arrow rotation={90} />)
}

export function RotatingArrows() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" viewBox="0 0 612.006 612.006" style={{ fill: "currentColor", transform: "rotate(90deg)" }}>
			<g>
				<g>
					<path d="M67.079,299.982c1.255,0.245,2.526,0.342,3.78,0.342c4.367,0,8.636-1.434,12.139-4.122l81.826-62.942    c8.717-6.729,10.346-19.243,3.666-27.943c-6.746-8.815-19.259-10.379-27.943-3.666l-40.343,31.055    c30.664-85.834,113.044-146.495,207.09-146.495c102.535,0,190.635,69.557,214.243,169.143    c2.526,10.705,13.149,17.401,23.968,14.794c10.688-2.525,17.304-13.263,14.778-23.967    C532.422,128.542,428.388,46.374,307.294,46.374c-112.897,0-211.815,73.875-246.553,177.909L37.05,184.348    c-5.605-9.483-17.841-12.53-27.275-6.974c-9.466,5.621-12.611,17.841-6.974,27.292l50.934,85.899    C56.619,295.469,61.491,298.891,67.079,299.982z" />
					<path d="M609.196,407.356l-50.934-85.899c-2.867-4.904-7.739-8.325-13.344-9.417c-5.605-1.092-11.405,0.325-15.919,3.779    l-81.826,62.942c-8.717,6.713-10.347,19.21-3.666,27.943c6.696,8.749,19.227,10.33,27.943,3.649l40.425-31.104    c-30.648,85.851-113.077,146.544-207.172,146.544c-102.519,0-190.618-69.557-214.243-169.143    c-2.525-10.705-13.165-17.353-23.968-14.795c-10.688,2.525-17.32,13.264-14.794,23.968    C79.56,483.464,183.61,565.632,304.704,565.632c112.849,0,211.816-73.842,246.602-177.812l23.642,39.854    c3.715,6.289,10.363,9.776,17.125,9.776c3.471,0,6.974-0.896,10.167-2.786C611.689,429.043,614.851,416.807,609.196,407.356z" />
				</g>
			</g>
			<g>
			</g>
			<g>
			</g>
			<g>
			</g>
			<g>
			</g>
			<g>
			</g>
			<g>
			</g>
			<g>
			</g>
			<g>
			</g>
			<g>
			</g>
			<g>
			</g>
			<g>
			</g>
			<g>
			</g>
			<g>
			</g>
			<g>
			</g>
			<g>
			</g>
		</svg>
	)
}

export function Information({ width, height }: IconProps) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
		<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" /><title>Information</title>
	</svg>)
}