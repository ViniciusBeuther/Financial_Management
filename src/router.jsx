import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AddFormScreen from "./pages/AddFormScreen";
import ReportScreen from "./pages/ReportScreen";

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
        path: "/report",
        element: <ReportScreen />
    },
])

export default router