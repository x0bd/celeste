import { Eventing } from "./core/event";

interface BitProps {
	id?: number;
	name?: string;
	age?: number;
}

export class Celeste {
	public events: Eventing = new Eventing();

	constructor(private data: BitProps) {}

	get(propName: string): number | string {
		return this.data[propName];
	}

	set(update: BitProps): void {
		Object.assign(this.data, update);
	}
}
