import { Collection } from "./lib/core/Collection";
import { CelesteProps, User } from "./lib/core/User";

const collection = new Collection<User, CelesteProps>(
	"http://localhost:4000/bits",
	(json: CelesteProps) => User.Build(json)
);

collection.on("change", () => {
	console.log(collection);
});

collection.fetch();
