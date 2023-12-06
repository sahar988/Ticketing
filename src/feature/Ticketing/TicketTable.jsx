import {
  Table,
  Thead,
  Tbody,
  Box,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import useTickets from "./useTickets";
import Spinner from "../../UI/Spinner";
import Empty from "../../UI/Empty";
import TicketRow from "./TicketRow";

function TicketTable() {
  const { tickets, isLoading, refetch } = useTickets();

  if (isLoading) return <Spinner />;
  if (!tickets?.length) return <Empty />;
  const sortedTickets = tickets.sort((a, b) => b.id - a.id);

  return (
    <TableContainer>
      <Table variant="simple" size="lg" overflowX="hidden" overflowY={"scroll"}>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Status</Th>
            <Th>CreatedBY</Th>
            <Th>Create Date</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedTickets.map((ticket) => (
            <TicketRow ticket={ticket} key={ticket.id} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TicketTable;
