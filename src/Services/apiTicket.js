export async function getTickets() {
  const res = await fetch("http://localhost:3004/tickets");
  const data = await res.json();
  if (!data) throw new Error("tickets can not be fetched");

  return data;
}

export async function getTicketByStatus(statusValue) {
  const res = await fetch(
    `http://localhost:3004/tickets?status=${statusValue}`
  );
  const data = await res.json();
  if (!data) throw new Error("tickets can not be fetched by this status");
  return data;
}

export async function getTicketById(ticketId) {
  const res = await fetch(`http://localhost:3004/tickets/${ticketId}`);
  const data = await res.json();
  if (!data) throw new Error("ticket can not be fetched by this id");
  return data;
}

export async function completeTicket(ticket) {
  const res = await fetch(`http://localhost:3004/tickets/${ticket.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });
  const data = await res.json();
  return data;
}

export async function createTicket(newTiket) {
  const res = await fetch("http://localhost:3004/tickets", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTiket),
  });
  const data = await res.json();
  return data;
}
