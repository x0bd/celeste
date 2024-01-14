import { Bit } from "./Celeste";

// Dummy User Functionality, sort of like a component in React Frameworks
const bit = new Bit({ name: "myname", age: 45 });

bit.set({ name: "bro" });

console.log(bit.get("name"));
