interface User {
  id: number;
  name: string;
  email?: string;
}

async function fetchUser(id: number): Promise<User> {
  const res = await fetch(`https://api.example.com/users/${id}`);
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
    }
    return res.json() as Promise<User>;
}

async function getEmailDomain(id: number): Promise<string | undefined | null> {
  const user = await fetchUser(id);

  if (!user.email) {
    return null;
  }
  return user.email.split("@")[1];
}