import { Bit } from "./Celeste";

const bit = new Bit({ name: "NEW Record", age: 0 });

bit.events.on("change", () => {
	console.log("CHANGE!");
});

bit.events.trigger("change");
