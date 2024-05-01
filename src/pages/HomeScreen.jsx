import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import ActionButtons from "../Components/ActionButtons";
import Header from "../Components/Header";
import TransactionList from "../Components/TransactionList";
import AccountInfo from "./AccountInfo";

const HomeScreen = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        let { data: information, error } = await supabase
          .from("gerenciador_financeiro")
          .select("*");
        setData(information);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="h-[100vh] flex items-between justify-center flex-col">
      <section className="overflow-hidden flex flex-col flex-1">
        <Header />
        <AccountInfo database={data} />
      </section>
    </div>
  );
};

export default HomeScreen;
