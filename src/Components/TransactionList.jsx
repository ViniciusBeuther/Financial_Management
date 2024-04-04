import { IoInformationCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { supabase } from "../API/Initialization";
import { Typography } from "@mui/material";

const TransactionList = () => {
  const [data, setData] = useState();

  // get data from database
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

  // remove row from database
  async function handleDelete(ev, transaction) {
    ev.preventDefault();
    try {
      let { error } = await supabase
        .from("gerenciador_financeiro")
        .delete()
        .eq("id", transaction.id);
      if (error) {
        throw error;
      }
      setData(data.filter((item) => item.id !== transaction.id));
    } catch (error) {
      console.error("Erro ao excluir transação:", error.message);
    }
  }

  return (
    <div>
      {data ? (
        <div className="flex flex-col mt-5">
            <Typography variant="h5" className="text-terciary bg-primary p-2 font-bold">
                Transações Recentes
            </Typography>
          {data.map((transaction) => (
            <div
              className="flex items-center justify-between m-2 border-b-2 pb-2 border-primary"
              key={transaction.id}
            >
              <p>
                {transaction.category} - R${" "}
                {transaction.amount.toFixed(2)}
              </p>
                <span className="flex gap-2">
                    <button
                        className="bg-red-500 px-3 py-1 rounded-full hover:bg-red-600"
                        onClick={(ev) => handleDelete(ev, transaction)}
                    >
                        X
                    </button>

                    <button
                        className="bg-green-500 text-terciary px-3 py-1 rounded-full hover:bg-green-600"
                        onClick={(ev) => handleDelete(ev, transaction)}
                    >
                        >
                    </button>
                </span>

            </div>
          ))}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default TransactionList;
