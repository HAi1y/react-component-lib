
export class Classes extends Array<string> {

	constructor(classes?: Array<string>) {
		super()

		if (classes) {
			Array.prototype.forEach.call(classes, item => this.push(item))
		}
	}

	toClassName = (): string | undefined => {
		if (this.length == 0) {
			return undefined
		} else {
			return this.join(' ')
		}
	}

	removeClass = (name: string) => {
		if (this.includes(name)) {
			this.splice(this.indexOf(name), 1)
		}
	}

	addClass = (name: string) => {
		if (!this.includes(name)) {
			this.push(name)
		}
	}
}