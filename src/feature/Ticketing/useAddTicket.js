import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTicket as createTicketApi } from "../../Services/apiTicket";
import { useNavigate } from "react-router-dom";

export function useAddTicket() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: createTicket, isLoading } = useMutation({
    mutationFn: createTicketApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["tickets"]);
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
  return { createTicketApi, isLoading };
}
