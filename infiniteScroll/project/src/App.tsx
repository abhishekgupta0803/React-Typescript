import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Listings } from "./components/Listings";

const App = () => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <Listings/>
  </QueryClientProvider>;
};

export default App;
