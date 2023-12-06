import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeTicket as completeTicketApi } from "../../Services/apiTicket";
import { useNavigate } from "react-router-dom";

export function useCompleteTicket() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: completeTicket, isLoading } = useMutation({
    mutationFn: completeTicketApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["tickets"]);
      navigate("/");
    },
  });
  return { completeTicket, isLoading };
}
