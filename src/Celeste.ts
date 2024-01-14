// Model Stuff

interface BitProps {
	name?: string;
	age?: number;
}

type Callback = () => {};

// Sort of Components in your Favorite Frameworks
export class Bit {
	events: { [key: string]: Callback[] } = {};

	constructor(private data: BitProps) {}

	get(propName: string): number | string {
		return this.data[propName];
	}

	set(update: BitProps): void {
		Object.assign(this.data, update);
	}

	// EventHandler
	on(eventName: string, callback: Callback) {}
}
