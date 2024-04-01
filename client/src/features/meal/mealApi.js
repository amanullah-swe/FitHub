export function fetchMelaById({ id }) {
    return new Promise(async (resolve, reject) => {
        const response = await fetch('http://localhost:8080/api/meal/id/' + id);
        if (!response.ok) return reject(response);
        const data = await response.json();
        return resolve(data);
    });
}