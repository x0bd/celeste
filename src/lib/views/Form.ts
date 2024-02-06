import { View } from "./View";
import { User, CelesteProps } from "../core/User";

export class Form extends View<User, CelesteProps> {
	eventsMap(): { [key: string]: () => void } {
		return {
			"click:.set-age": this.onSetAgeClick,
			"click:.set-name": this.onSetNameClick,
			"click:.save-model": this.onSaveClick,
		};
	}

	onSaveClick = (): void => {
		this.model.save();
	};

	onSetNameClick = (): void => {
		const input = this.parent.querySelector("input");

		if (input) {
			const name = input.value;
			this.model.set({ name });
		}
	};

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	template(): string {
		return `
               <div>
                    <input placeholder="${this.model.get("name")}"/>
                    <button class="set-name">Change Name</button>
                    <button class="set-age">Set Random Age</button>
                    <button class="save-model">Save</button>
               <div>
          `;
	}
}
