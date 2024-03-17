import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import "./app.scss";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddMenu from "./components/AddMenu";
import MenuItems from "./components/MenuItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <MenuItems></MenuItems>,
      },
      {
        path: 'addmenu',
        element: <AddMenu></AddMenu>,
      },
    ]
  },
]);
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
