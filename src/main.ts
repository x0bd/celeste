import { User } from "./lib/core/User";
import { Form } from "./lib/views/Form";

const user = User.Build({ name: "Cassandra", age: 0 });

const root = document.getElementById("root");

if (root) {
	const form = new Form(root, user);
	form.render();
} else {
	throw new Error("Root Not Found.");
}
