import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicketPage from "./pages/Ticket";
import TicketDetailPage from "./pages/TicketDetailPage";
import PageNotFound from "./pages/PageNotFound";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 60 * 1000,
  },
});

const App = () => {
  return (
    <>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TicketPage />} />
              <Route path="/tickets/:ticketId" element={<TicketDetailPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
