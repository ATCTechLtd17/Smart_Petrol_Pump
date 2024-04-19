import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import SideNavbar from "../components/SideNav/SideNavbar";
import AdminDashboardPage from "../page/AdminDashboard/AdminDashboardPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboardLayout />,
    children: [
      {
        path: '/',
        element: <AdminDashboardPage />
      },

    ]
  },

]);

export default router;