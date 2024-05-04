import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import SideNavbar from "../components/SideNav/SideNavbar";
import AdminDashboardPage from "../page/AdminDashboard/AdminDashboardPage";
import AddNewBranches from "../page/Branches/AddNewBranches";
import BranchesEmployeesStatus from "../page/Branches/BranchesEmployeesStatus";
import BranchesList from "../page/Branches/BranchesList";
import Report from "../page/Branches/Report";
import DailyIncomingFuel from "../page/Reserve Fuel/DailyIncomingFuel";
import DailyOutgoingFuel from "../page/Reserve Fuel/DailyOutgoingFuel";
import TotalReserveFuel from "../page/Reserve Fuel/TotalReserveFuel";
import AbsentEmployee from "../page/Employee's/AbsentEmployee";
import ActiveEmployee from "../page/Employee's/ActiveEmployee";
import TotalEmployee from "../page/Employee's/TotalEmployee";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboardLayout />,
    children: [

      //Admin Dashboard route:
      {
        path: '/',
        element: <AdminDashboardPage />
      },

      //Branches Route:

      {
        path: "add_new_branch",
        element: <AddNewBranches />,
      },
      {
        path: "branches_employees_status",
        element: <BranchesEmployeesStatus />,
      },
      {
        path: "branch_list",
        element: <BranchesList />,
      },
      {
        path: "report",
        element: <Report />,
      },

      //Reserve Fuel Route:

      {
        path: "daily_incoming_fuel",
        element: <DailyIncomingFuel />
      },
      {
        path: "daily_outgoing_fuel",
        element: <DailyOutgoingFuel />
      },
      {
        path: "total_reserve_fuel",
        element: <TotalReserveFuel />
      },

      //Employees Route:

      {
        path: "absent_employee",
        element: <AbsentEmployee />
      },
      {
        path: "active_employee",
        element: <ActiveEmployee />
      },
      {
        path: "total_employee",
        element: <TotalEmployee />
      },




    ]
  },

]);

export default router;