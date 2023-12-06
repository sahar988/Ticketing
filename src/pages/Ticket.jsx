import TicketTable from "../feature/Ticketing/TicketTable";
import CreateTicketForm from "../feature/Ticketing/CreateTicketForm";
import Filter from "../UI/Filter";

function Ticket() {
  return (
    <>
      <Filter />
      <CreateTicketForm />
      <TicketTable />
    </>
  );
}

export default Ticket;
