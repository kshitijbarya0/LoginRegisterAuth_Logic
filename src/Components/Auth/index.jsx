export function Register(userData) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.username === userData.username)) {
        return { error: "User already exists" };
    }
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: "User registered successfully" };
}

// login.js
export function login({ username, password }) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Stored users:", users);

    if (users.length === 0) {
        return { error: "No users found. Please register first." };
    }

    const validUser = users.find(user => user.username === username && user.password === password);
    console.log("Valid user found:", validUser);

    if (validUser) {
        localStorage.setItem("currentuser", JSON.stringify(validUser));
        return { success: "Login successful" };
    } else {
        return { error: "Invalid username or password" };
    }
}


export function logout(){
    localStorage.removeItem("currentuser")
}

export function getcurrentuser(){
    return JSON.parse(localStorage.getItem("currentuser"));
}
