import { baseUrl } from "../../app/constant";

export function fetchMelaById({ id }) {
    return new Promise(async (resolve, reject) => {
        const response = await fetch(`${baseUrl}/api/meal/id/` + id);
        if (!response.ok) return reject(response);
        const data = await response.json();
        return resolve(data);
    });
}