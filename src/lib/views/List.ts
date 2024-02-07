import { CollectionView } from "./CollectionView";
import { User, CelesteProps } from "../core/User";
import { Show } from "./Show";

export class List extends CollectionView<User, CelesteProps> {
	renderItem(model: User, itemParent: Element): void {
		new Show(itemParent, model).render();
	}
}
