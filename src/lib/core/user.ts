import { Celeste } from "./Celeste";
import { Attributes } from "./Attribrutes";
import { Sync } from "./Sync";
import { Eventing } from "./Event";
import { Collection } from "./Collection";

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

	static buildUserCollection(): Collection<User, CelesteProps> {
		return new Collection<User, CelesteProps>(
			rootUrl,
			(json: CelesteProps) => User.Build(json)
		);
	}

	setRandomAge(): void {
		const age = Math.round(Math.random() * 100);
		this.set({ age });
	}
}
