import { Bit } from "./Celeste";

const bit = new Bit({ id: 1 });

bit.fetch();

setTimeout(() => {
	console.log(bit);
}, 4000);
