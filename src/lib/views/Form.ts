import { User } from "../core/User";

export class Form {
	constructor(public parent: Element, public model: User) {
		this.bindModel();
	}

	bindModel(): void {
		this.model.on("change", () => {
			// Wow!
			this.render();
		});
	}

	eventsMap(): { [key: string]: () => void } {
		return {
			"click:.set-age": this.onSetAgeClick,
		};
	}

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	template(): string {
		return `
               <div>
                    <h1>Hello Celeste!</h1>
                    <div>User name: ${this.model.get("name")}</div>
                    <div>User age: ${this.model.get("age")}</div>
                    <button>Click Me</button>
                    <button class="set-age">Set Random Age</button>
               <div>
          `;
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
