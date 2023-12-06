import { useMutation, useQueryClient } from "@tanstack/react-query";
import { assignUser } from "../../Services/apiUser";
import { Toast } from "@chakra-ui/react";

function useAssign() {
  const queryClient = useQueryClient();

  const { mutate: assign, isLoaing } = useMutation({
    mutationFn: assignUser,
    onSuccess: (data) => {
      console.log("after assignee", data);
      Toast.success("ticket assiened successfully...");
      queryClient.invalidateQueries(["tickets"]);
    },
    onError: (error) => {
      Toast.error(error.message);
    },
  });

  return { assign, isLoaing };
}

export default useAssign;
