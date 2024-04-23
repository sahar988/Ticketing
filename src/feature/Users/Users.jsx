import { Button, Select, Spinner, Box } from "@chakra-ui/react";
import useUsers from "../Users/useUsers";
import Empty from "../../UI/Empty";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAssign from "./useAssign";
import { TICKET_STATUS } from "../../utils/constants";

function Users({ ticket }) {
  const { userItems, isLoading } = useUsers();
  const [assignee, setAssignee] = useState();
  const { assign, isLoading: isAssigning } = useAssign();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (!userItems.length) return <Empty />;

  function handleAssigneeChange(e) {
    setAssignee(
      userItems.filter((item) => item.id === Number(e.target.value))?.[0]
    );
  }

  async function handleAssign() {
    console.log(assignee);
    await assign({ ...ticket, user: assignee, status: TICKET_STATUS.assign });
    navigate("/");
  }

  return (
    <Box>
      <Select placeholder="Select User" onChange={handleAssigneeChange}>
        {userItems.map((user) => (
          <option value={user.id} key={user.id}>
            {user.firstName}
          </option>
        ))}
      </Select>
      <Button isLoading={isAssigning} onClick={handleAssign}>
        assign
      </Button>
    </Box>
  );
}

export default Users;
