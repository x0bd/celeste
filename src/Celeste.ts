// Model Stuff

// Testing Purposes
interface BitProps {
	name?: string;
	age?: number;
}

type Callback = () => void;

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
	on(eventName: string, callback: Callback): void {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}

	trigger(eventName: string): void {
		const handlers = this.events[eventName];

		if (!handlers || handlers.length === 0) {
			return;
		}

		handlers.forEach((callback) => {
			callback();
		});
	}
}
