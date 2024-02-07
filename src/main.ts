import { Collection } from "./lib/core/Collection";
import { List } from "./lib/views/List";
import { CelesteProps, User } from "./lib/core/User";

const fragments = new Collection(
	"http://localhost:4000/bits",
	(json: CelesteProps) => {
		return User.Build(json);
	}
);

fragments.on("change", () => {
	const root = document.getElementById("root");

	if (root) {
		new List(root, fragments).render();
	}
});

fragments.fetch();
