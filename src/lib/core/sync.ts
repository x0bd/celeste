import axios, { AxiosPromise } from "axios";
import { CelesteProps } from "../celeste";

export class Sync {
	constructor(public rootUrl: string) {}

	fetch(id: number): AxiosPromise {
		return axios.get(`${this.rootUrl}/${id}`);
	}

	// 404
	save(data: CelesteProps): AxiosPromise {
		const { id } = data;

		if (id) {
			return axios.put(`${this.rootUrl}/${id}`, data);
		} else {
			return axios.post(this.rootUrl, data);
		}
	}
}
