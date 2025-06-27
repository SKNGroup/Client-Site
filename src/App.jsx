import "./assets/styles/App.scss";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./Routes/Route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Suspense } from "react";
// import { Loading } from "./pages/loadingPage/Loading";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;


  