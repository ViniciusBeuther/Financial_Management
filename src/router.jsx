import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AddFormScreen from "./pages/AddFormScreen";
import ExpenseFormScreen from "./pages/ExpenseFormScreen";
import TransactionDetails from "./pages/TransactionDetails";
import AnalysisScreen from "./pages/AnalysisScreen/AnalysisScreen";

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
        path: "/analysis",
        element: <AnalysisScreen />
    },
    {
        path: "/details/:transaction_id",
        element: <TransactionDetails />
    }
])

export default router