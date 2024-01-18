import celeste from "..";

celeste.events.on("change", () => {
	console.log("CHANGE!");
});

celeste.events.trigger("change");
