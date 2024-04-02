import { RouterProvider } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./index.css";
import AccountInfo from "./pages/AccountInfo";
import router from "./router";


const App = () => {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
