import { Celeste } from "../core/Celeste";

export abstract class View<T extends Celeste<K>, K> {
	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}

	abstract eventsMap(): { [key: string]: () => void };
	abstract template(): string;

	bindModel(): void {
		this.model.on("change", () => {
			// Wow!
			this.render();
		});
	}

	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();

		for (let eventKey in eventsMap) {
			const [eventName, selector] = eventKey.split(":");

			fragment.querySelectorAll(selector).forEach((element) => {
				element.addEventListener(eventName, eventsMap[eventKey]);
			});
		}
	}

	render(): void {
		this.parent.innerHTML = "";
		const templateElement = document.createElement("template");
		templateElement.innerHTML = this.template();

		this.bindEvents(templateElement.content);
		this.parent.append(templateElement.content);
	}
}
