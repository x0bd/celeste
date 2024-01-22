import { Celeste } from "./Celeste";

export interface CelesteProps {
	id?: number;
	name?: string;
	age?: number;
}

const rootUrl = "http://localhost:4000/bits";

export class User extends Celeste<CelesteProps> {}
