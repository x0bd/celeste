import { Eventing } from "./core/event";
import { Sync } from "./core/sync";
import { Attributes } from "./core/attributes";
import { AxiosResponse } from "axios";

// Demo
export interface CelesteProps {
	id?: number;
	name?: string;
	age?: number;
}

const rootUrl = "http://localhost:4000/bits";

export class Celeste {
	public events: Eventing = new Eventing();
	public sync: Sync<CelesteProps> = new Sync<CelesteProps>(rootUrl);
	public attributes: Attributes<CelesteProps>;

	constructor(attrs: CelesteProps) {
		this.attributes = new Attributes<CelesteProps>(attrs);
	}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	get get() {
		return this.attributes.get;
	}

	set(update: CelesteProps): void {
		this.attributes.set(update);
		this.events.trigger("change");
	}

	fetch(): void {
		const id = this.attributes.get("id");

		if (typeof id !== "number") {
			throw new Error("Cannot fetch without an id.");
		}

		this.sync.fetch(id).then((response: AxiosResponse): void => {
			this.set(response.data);
		});
	}

	save(): void {
		this.sync
			.save(this.attributes.getAll())
			.then((response: AxiosResponse): void => {
				this.trigger("save");
			})
			.catch(() => {
				this.trigger("error");
			});
	}
}
