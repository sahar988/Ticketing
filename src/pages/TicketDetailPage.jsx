import { Box, Button, Container, Spinner } from "@chakra-ui/react";
import { useTicket } from "../feature/Ticketing/useTicket";
import AssigneeUser from "../feature/Users/AssigneeUser";
import Users from "../feature/Users/Users";
import Empty from "../UI/Empty";
import { TICKET_STATUS } from "../utils/constants";
import { useCompleteTicket } from "../feature/Ticketing/useCompleteTicket";

function TicketDetailPage() {
  const { ticket, isLoading } = useTicket();
  const { completeTicket, isLoading: isCompleting } = useCompleteTicket();
  if (isLoading) return <Spinner />;
  if (!ticket) return <Empty />;

  function handleCompleteTicket() {
    completeTicket({ ...ticket, status: TICKET_STATUS.completed });
  }
  return (
    <Container
      borderWidth={"1px"}
      borderRadius={"10PX"}
      alignSelf={"center"}
      justifySelf={"center"}
    >
      <Box>
        Ticket Number : {ticket?.number}
        {ticket.user && (
          <>
            <span>assign to :</span>
            <AssigneeUser user={ticket.user} />
          </>
        )}
      </Box>
      {ticket.user && ticket.status !== "completed" && (
        <>
          <Box>Assigned Ticket</Box>
          <Button
            onClick={handleCompleteTicket}
            border="2px"
            borderColor="green.500"
            bgColor="green"
          >
            Complete
          </Button>
        </>
      )}
      {!ticket.user && (
        <Box>
          <span> Assign to :</span>
          <Users ticket={ticket} />
        </Box>
      )}
    </Container>
  );
}

export default TicketDetailPage;
