import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

const TicketPage = lazy(() => import("./pages/Ticket"));
const HomePage = lazy(() => import("./pages/HomePage"));
const TicketDetailPage = lazy(() => import("./pages/TicketDetailPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
import SpinnerFullPage from "./UI/SpinnerFullPage";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
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
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route path="/" element={<AppLayout />}>
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="login" element={<LoginPage />} />
                  {/* <Route index to="/" element={<HomePage />}></Route> */}
                  <Route path="app" element={<HomePage />} />
                  <Route index element={<Navigate replace to="tickets" />} />
                  <Route path="tickets" element={<TicketPage />} />
                  <Route path="tickets/:ticketId" element={<TicketDetailPage />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
