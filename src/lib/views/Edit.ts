import { View } from "./View";
import { User, CelesteProps } from "../core/User";
import { Form } from "./Form";
import { Show } from "./Show";

export class Edit extends View<User, CelesteProps> {
	regionsMap(): { [key: string]: string } {
		return {
			show: ".user-show",
			form: ".user-form",
		};
	}

	onRender(): void {
		new Show(this.regions.show, this.model).render();
		new Form(this.regions.form, this.model).render();
	}

	template(): string {
		return `
               <div>
                    <div class="user-show"></div>
                    <div class="user-form"></div>
               </div>
          `;
	}
}
