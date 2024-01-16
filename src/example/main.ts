import { Celeste } from "../lib/celeste";

const celeste = new Celeste({ name: "NEW Record", age: 0 });

celeste.events.on("change", () => {
	console.log("CHANGE!");
});

celeste.events.trigger("change");
