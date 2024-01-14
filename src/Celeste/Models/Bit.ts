interface BitProps {
	name?: string;
	age?: number;
}

export class Bit {
	constructor(private data: BitProps) {}

	get(propName: string): number | string {
		return this.data[propName];
	}

	set(update: BitProps): void {
		Object.assign(this.data, update);
	}
}
