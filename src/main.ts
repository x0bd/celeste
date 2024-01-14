import { Bit } from "./Celeste/Models/Bit";

const bit = new Bit({ name: "myname", age: 45 });

bit.set({ name: "bro" });

console.log(bit.get("name"));
console.log(bit.get("age"));
