"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUser(id) {
    const res = await fetch(`https://api.example.com/users/${id}`);
    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
    }
    return res.json();
}
async function getEmailDomain(id) {
    const user = await fetchUser(id);
    if (!user.email) {
        return null;
    }
    return user.email.split("@")[1];
}
//# sourceMappingURL=getEmail.js.map