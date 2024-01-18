import { Eventing } from "./core/event";
import { Sync } from "./core/sync";

export interface CelesteProps {
	id?: number;
	name?: string;
	age?: number;
}

const rootUrl = "http://localhost:4000/bits";

export class Celeste {
	public events: Eventing = new Eventing();
	public sync: Sync<CelesteProps> = new Sync<CelesteProps>(rootUrl);

	constructor(private data: CelesteProps) {}

	get(propName: string): number | string {
		return this.data[propName];
	}

	set(update: CelesteProps): void {
		Object.assign(this.data, update);
	}
}
