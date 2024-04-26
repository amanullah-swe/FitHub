import { baseUrl } from "../../app/constant";

export function fetchMealById({ id }) {
    return new Promise(async (resolve, reject) => {
        const response = await fetch(`${baseUrl}/api/meal/id/` + id);
        if (!response.ok) {
            const data = await response.json();
            throw new Error(`API request failed: ${data.message || 'Unknown error'}`);
        }
        const data = await response.json();
        return resolve(data);
    });
}