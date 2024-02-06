import { View } from "./View";
import { User, CelesteProps } from "../core/User";

export class Show extends View<User, CelesteProps> {
	template(): string {
		return `
          <div>
               <h1>User Details</h1>
               <div>User Name: ${this.model.get("name")}</div>
               <div>User Name: ${this.model.get("age")}</div>
          </div>
     `;
	}
}
