export class Form {
	constructor(public parent: Element) {}

	template(): string {
		return `
               <div>
                    <h1>Hello Celeste!</h1>
               <div>
          `;
	}

	render(): void {
		const templateElement = document.createElement("template");
		templateElement.innerHTML = this.template();

		this.parent.append(templateElement.content);
	}
}
