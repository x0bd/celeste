import { Bit } from "./Celeste";

// Dummy User Functionality, sort of like a component in React Frameworks
const bit = new Bit({ name: "myname", age: 45 });

bit.on("change", () => {
	console.log("change event");
});
bit.on("hover", () => {
	console.log("hover event");
});
bit.on("click", () => {
	console.log("click event");
});

// Testing
bit.trigger("change");
bit.trigger("click");
bit.trigger("hover");
bit.trigger("dfdf");
