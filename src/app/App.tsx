import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { Toaster } from "~/shared/ui";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
