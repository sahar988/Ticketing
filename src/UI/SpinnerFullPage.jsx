import { Spinner } from "@chakra-ui/react";

function SpinnerFullPage() {
  return (
    <div>
      <Spinner thickness="6px" speed="0.8s" emptyColor="gray.200" color="blue.200" size="xl" />
    </div>
  );
}

export default SpinnerFullPage;
