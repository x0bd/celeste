import { User } from "./lib/core/User";

const collection = User.buildUserCollection();

collection.on("change", () => {
	console.log(collection);
});

collection.fetch();
