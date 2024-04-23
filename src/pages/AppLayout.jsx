import { Outlet } from "react-router-dom";
import PageNav from "../UI/PageNav";
import { Box } from "@chakra-ui/react";
function AppLayout() {
  return (
    <div>
      <PageNav></PageNav>
      <Box w="80%" mx="auto">
        <Outlet />
      </Box>
    </div>
  );
}

export default AppLayout;
