import { User } from "./lib/core/User";
import { Form } from "./lib/views/Form";

const user = User.Build({ name: "Cassandra", age: 0 });

const form = new Form(document.getElementById("root"), user);

form.render();
