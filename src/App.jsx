import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { AuthProvider } from "./context/AuthContext";
import ProtactedRoutes from "./components/ProtactedRoutes";
import Registration from "./pages/Registration";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={
                <ProtactedRoutes>
                  <Chat />
                </ProtactedRoutes>
              }
            ></Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Registration />} />
          </Routes>
          <Toaster
            position="bottom-right"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            className="bg-white text-['#374151'] dark:text-['#e5e7eb'] dark:bg-['#18212f']"
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "18px",
                maxWidth: "500px",
                padding: "16px 24px",
                // backgroundColor: "var(--color-grey-0)",
                // color: "var(--color-grey-700)",
              },
            }}
          />
        </BrowserRouter>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
