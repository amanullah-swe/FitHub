// A mock function to mimic making an async request for data

export function authLogin({ email, password }) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`http://localhost:8080/api/auth/login`, {
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
      console.log(data)
      return reject(data);
    }
    const data = await response.json();
    console.log(data)
    return resolve(data);
  }
  );
}

export function authRegister({ name, email, phone, gender, profession, password, age }) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`http://localhost:8080/api/auth/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, phone, gender, profession, password, age })
    });
    if (!response.ok) {
      const data = await response.json();
      console.log(data);
      return reject(data);
    }
    const data = await response.json();
    console.log(data);
    return resolve(data);
  }
  );
}


export function fetchUserData({ userId }) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`http://localhost:8080/api/user/id`, {
      method: "GET",
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
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
