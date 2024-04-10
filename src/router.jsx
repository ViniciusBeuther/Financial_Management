import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AddFormScreen from "./pages/AddFormScreen";
import ReportScreen from "./pages/ReportScreen";
import ExpenseFormScreen from "./pages/ExpenseFormScreen";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />
    },
    {
        path: "/add",
        element: <AddFormScreen />
    },
    {
        path: "/expanse",
        element: <ExpenseFormScreen />
    },
    {
        path: "/report",
        element: <ReportScreen />
    },
])

export default router