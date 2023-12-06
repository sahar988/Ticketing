import { Wrap, WrapItem, Avatar } from "@chakra-ui/react";
function AssigneeUser({ user }) {
  return (
    <Wrap>
      <WrapItem>
        <span>{user.firstName}</span>
        <Avatar name={user.firstName} src={user.image} />
      </WrapItem>
    </Wrap>
  );
}

export default AssigneeUser;
