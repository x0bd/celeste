import axios, { AxiosResponse } from "axios";

export class Sync {
	fetch(): void {
		axios
			.get(`http://localhost:4000/bits/${this.get("id")}`)
			.then((response: AxiosResponse): void => {
				this.set(response.data);
			});
	}

	save(): void {
		const id = this.get("id");
		if (id) {
			axios.put(
				`http://localhost:4000/bits/${this.get("id")}`,
				this.data
			);
		} else {
			axios.post("http://localhost:4000/bits/", this.data);
		}
	}
}
