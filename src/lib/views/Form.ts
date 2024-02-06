import { User } from "../core/User";

export class Form {
	constructor(public parent: Element, public model: User) {}

	eventsMap(): { [key: string]: () => void } {
		return {
			"click:button": this.onButtonClick,
			"mouseenter:h1": this.onMouseEnter,
		};
	}

	onButtonClick(): void {
		console.log("Clicked!");
	}

	onMouseEnter(): void {
		console.log("Hover!");
	}

	template(): string {
		return `
               <div>
                    <h1>Hello Celeste!</h1>
                    <div>User name: ${this.model.get("name")}</div>
                    <div>User age: ${this.model.get("age")}</div>
                    <button>Click Me</button>
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
		const templateElement = document.createElement("template");
		templateElement.innerHTML = this.template();

		this.bindEvents(templateElement.content);
		this.parent.append(templateElement.content);
	}
}
