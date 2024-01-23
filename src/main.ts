import { User } from "./lib/core/User";

const user = User.Build({ id: 1 });

user.on("change", () => {
	console.log(user);
});

user.fetch();
