import { Eventing } from "./core/event";
import { Sync } from "./core/sync";
import { Attributes } from "./core/attributes";

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
}
