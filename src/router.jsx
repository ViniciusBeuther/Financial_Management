import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />
    },
    
])

export default router