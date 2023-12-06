import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../Services/apiUser";

function useUsers() {
  const { data: userItems, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  return { userItems, isLoading };
}

export default useUsers;
