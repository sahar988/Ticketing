const { faker } = require("@faker-js/faker");
const userSize = 30;
const ticketSize = 40;
const ticketStatus = ["assigned", "completed", "unassigned"];

function generateUsers(size = userSize) {
  const users = [];
  for (let i = 0; i < size; i++) {
    users.push({
      id: i + 1,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      dob: faker.date.birthdate(),
      address: `${faker.address.street()},${faker.address.cityName()}, ${faker.address.country()}`,
      image: faker.image.avatar(),
    });
  }
  return users;
}

function generateTickets(size = ticketSize) {
  const tickets = [];
  for (let i = 0; i < size / 2; i++) {
    const userId = faker.datatype.number({ min: 1, max: userSize });
    tickets.push({
      id: i + 1,
      user: generateUsers()[userId],
      number: faker.random.alphaNumeric(8).toUpperCase(),
      status: ticketStatus[faker.datatype.number({ min: 0, max: 1 })],
    });
  }
  for (let i = size / 2; i < size; i++) {
    tickets.push({
      id: i + 1,
      user: null,
      number: faker.random.alphaNumeric(8).toUpperCase(),
      status: "unassigned",
    });
  }
  return tickets;
}

const generate = () => ({ tickets: generateTickets(), users: generateUsers() });

module.exports = generate;
