import { createContext } from "react";

const TicketContext = createContext();
function ContextProvider({ children }) {
  return <TicketContext.Provider value={{}}>{children}</TicketContext.Provider>;
}
