import { View } from "./View";
import { User, CelesteProps } from "../core/User";

export class Edit extends View<User, CelesteProps> {
	template(): string {
		return `
               <div>
                    <div class"user-show"></div>
                    <div class"user-form"></div>
               </div>
          `;
	}
}
