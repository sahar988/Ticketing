import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  getTicketById,
  completeTicket as completeTicketApi,
} from "../../Services/apiTicket";

export function useTicket() {
  const { ticketId } = useParams();

  const {
    data: ticket,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tickets", ticketId],
    queryFn: () => getTicketById(ticketId),
    retry: false,
  });
  return { ticket, isLoading, error };
}
