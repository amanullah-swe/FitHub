// A mock function to mimic making an async request for data

export function AuthLogin({ email, password }) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`http://localhost:8080/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    if (!response.ok) {
      const data = await response.json();
      return reject(data);
    }
    const data = await response.json();
    return resolve(data);
  }
  );
}