export async function getUsers() {
  const res = await fetch("http://localhost:3004/users");
  const data = await res.json();
  if (!data) throw new Error("users cannot be fetched");
  return data;
}

export async function getUser(userId) {
  const res = await fetch(`http://localhost:3004/users/${userId}`);
  const data = await res.json();
  return data;
}

export async function assignUser(ticket) {
  const res = await fetch(`http://localhost:3004/tickets/${ticket.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...ticket, status: "assigned" }),
  });
  const data = await res.json();
  return data;
}
