import { Celeste } from "./lib/celeste";

const celeste = new Celeste({ id: 2, name: "violet", age: 23 });

celeste.on("save", () => {
	console.log("SAVED!!!", celeste);
});

celeste.save();
