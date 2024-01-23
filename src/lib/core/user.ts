import { Celeste } from "./Celeste";
import { Attributes } from "./Attribrutes";
import { Sync } from "./Sync";
import { Eventing } from "./Event";

export interface CelesteProps {
	id?: number;
	name?: string;
	age?: number;
}

const rootUrl = "http://localhost:4000/bits";

export class User extends Celeste<CelesteProps> {
	static Build(attrs: CelesteProps): User {
		return new User(
			new Attributes<CelesteProps>(attrs),
			new Eventing(),
			new Sync<CelesteProps>(rootUrl)
		);
	}
}
