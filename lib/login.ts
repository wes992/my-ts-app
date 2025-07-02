export async function login(
  username: string,
  password: string
): Promise<boolean> {
  if (username === "admin" && password === "admin123") {
    return true;
  }
  return false;
}
