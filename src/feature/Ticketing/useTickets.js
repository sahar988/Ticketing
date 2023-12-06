import { useQuery } from "@tanstack/react-query";
import { getTickets, getTicketByStatus } from "../../Services/apiTicket";
import { useSearchParams } from "react-router-dom";

function useTickets() {
  const [searchParams] = useSearchParams();
  let filterValue = searchParams.get("status");
  let queryFn = filterValue ? getTicketByStatus : getTickets;

  const {
    isLoading,
    error,
    data: tickets,
    refetch,
  } = useQuery({
    queryKey: ["tickets", filterValue],
    queryFn: () => queryFn(filterValue),
  });

  return { isLoading, tickets, error, refetch };
}

export default useTickets;
