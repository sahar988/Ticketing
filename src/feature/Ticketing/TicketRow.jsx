import { Badge, Tr, Td, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Empty from "../../UI/Empty";

function TicketRow({ ticket }) {
  const navigate = useNavigate();
  if (!ticket) return <Empty />;
  return (
    <Tr>
      <Td>{ticket.id}</Td>
      <Td>
        {ticket.status === "unassigned" && (
          <Badge colorScheme="red">Unassigned</Badge>
        )}
        {ticket.status === "completed" && (
          <Badge colorScheme="green">Completed</Badge>
        )}
        {ticket.status === "assigned" && (
          <Badge colorScheme="purple">Assigned</Badge>
        )}
      </Td>
      {ticket.user && (
        <Td>{`${ticket.user.firstName} ${ticket.user.lastName}`}</Td>
      )}
      {!ticket.user && <Td>---</Td>}
      <Td>{ticket.number}</Td>
      <Td>
        <Button onClick={() => navigate(`/tickets/${ticket.id}`)}>
          detail
        </Button>
      </Td>
    </Tr>
  );
}

export default TicketRow;
