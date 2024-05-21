import { IoInformationCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import expanseIcon from "../../assets/icons/expanse arrow.svg";
import incomeIcon from "../../assets/icons/income arrow.svg";
import detailsIcon from "../../assets/icons/details arrow icon.svg";
import DateMethods from "../classes/Date";
import Spinner from "./Spinner";

const TransactionList = (props) => {
  const [data, setData] = useState();
  let navigate = useNavigate();
  const dateMethods = new DateMethods();

  // get data from database
  useEffect(() => {
    async function fetchData() {
      try {
        let { data: allTransactions, error } = await supabase
          .from("gerenciador_financeiro")
          .select("*");

        // Filter transactions for the current month
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
        const currentYear = currentDate.getFullYear();
        const currentMonthTransactions = allTransactions.filter(
          (transaction) => {
            const transactionDate = new Date(transaction.date);
            console.log("TransList", transactionDate.getMonth()+1)
            console.log("Transaction", transaction)
            return (
              transactionDate.getMonth() + 1 == currentMonth &&
              transactionDate.getFullYear() == currentYear
            );
          }
        );

        // Sort transactions by date in descending order
        currentMonthTransactions.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });

        setData(currentMonthTransactions);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  async function handleView(ev, transaction) {
    return navigate(`/details/${transaction.id}`, { replace: true });
  }

  return (
    <div className="mt-5 h-full rounded-t-2xl darkPurpleGradient overflow-y-auto">
      {data ? (
        <div className="flex flex-col">
          <Typography
            variant="h5"
            className="text-solidPurple-100 text-center px-2 pt-2 font-bold rounded-t-2xl"
          >
            Transações Recentes
          </Typography>
          <Typography variant="h6" className="text-center text-solidPurple-200 pt-[-5px]">
            {dateMethods.getMonthFrom(dateMethods.getToday().month)},{" "}
            {dateMethods.getToday().year}
          </Typography>
          {console.log(data)}
          {data == '' ? (<p>Sem transações esse mês</p>) : (
            data.map((transaction) => (
              <div
                className="flex items-center justify-between transactionCard py-2 my-1 mx-2 rounded-md text-sm shadow-lg hover:cursor-pointer "
                key={transaction.id}
                onClick={(ev) => handleView( ev, transaction )}
              > 
                <span className="flex items-center m-2">
                  <p className="text-2xl mr-2">
                    { transaction.emoji }
                  </p>
  
                  <article className="flex flex-col items-start ">
                    <p className={"text-black"}>{transaction.category}</p>
                    <p
                      className={
                        transaction.amount >= 0.0
                          ? "text-green-600 font-bold"
                          : "text-red-600 font-bold"
                      }
                    >
                      R$ {transaction.amount.toFixed(2)}
                    </p>
                  </article>
                </span>
                <span className="flex gap-2">
                  
                </span>
              </div>
            ))
          ) }
          
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TransactionList;
