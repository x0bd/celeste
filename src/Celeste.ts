import axios, { AxiosResponse } from "axios";

interface BitProps {
	id?: number;
	name?: string;
	age?: number;
}

type Callback = () => void;

// Eventing
export class Eventing {
	events: { [key: string]: Callback[] } = {};
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

// Sort of Components in your Favorite Frameworks
export class Bit {
	public events: Eventing = new Eventing();

	constructor(private data: BitProps) {}

	get(propName: string): number | string {
		return this.data[propName];
	}

	set(update: BitProps): void {
		Object.assign(this.data, update);
	}
}

// SYNC - data fetching and saving
export class Sync {
	fetch(): void {
		axios
			.get(`http://localhost:4000/bits/${this.get("id")}`)
			.then((response: AxiosResponse): void => {
				this.set(response.data);
			});
	}

	save(): void {
		const id = this.get("id");
		if (id) {
			axios.put(
				`http://localhost:4000/bits/${this.get("id")}`,
				this.data
			);
		} else {
			axios.post("http://localhost:4000/bits/", this.data);
		}
	}
}
