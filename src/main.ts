import { User } from "./lib/core/User";
import { Edit } from "./lib/views/Edit";

const user = User.Build({ name: "Cassandra", age: 0 });

const root = document.getElementById("root");

if (root) {
	const edit = new Edit(root, user);
	edit.render();
	console.log(edit);
} else {
	throw new Error("Root Not Found.");
}
