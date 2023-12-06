import {
  ChakraProvider,
  Container,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <ChakraProvider>
        <Container>
          <Box>
            <Heading as="h1">Something went wrong</Heading>
            <p>{error.message}</p>
            <Button onClick={resetErrorBoundary}>Try again</Button>
          </Box>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default ErrorFallback;
