import { Celeste } from "./lib/celeste";

const celeste = new Celeste({ name: "new record", age: 0 });

console.log(celeste.get("name"));
celeste.on("change", () => {
	console.log("on change");
});
celeste.trigger("change");
