import { IoInformationCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import expanseIcon from "../../assets/icons/expanse arrow.svg";
import incomeIcon from "../../assets/icons/income arrow.svg";
import detailsIcon from "../../assets/icons/details arrow icon.svg";
import DateMethods from "../classes/Date";

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
            return (
              transactionDate.getMonth() + 1 === currentMonth &&
              transactionDate.getFullYear() === currentYear
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

  function verifyIcon(type) {
    return type === "S" ? expanseIcon : incomeIcon;
  }

  return (
    <div className="mt-5 h-full rounded-t-2xl grayGradient">
      {data ? (
        <div className="flex flex-col">
          <Typography
            variant="h5"
            className="text-solidGray-1000 text-center px-2 pt-2 font-bold rounded-t-2xl"
          >
            Transações Recentes
          </Typography>
          <Typography variant="h6" className="text-center text-solidGray-800 pt-[-5px]">
            {dateMethods.getMonthFrom(dateMethods.getToday().month)},{" "}
            {dateMethods.getToday().year}
          </Typography>
          {data.map((transaction) => (
            <div
              className="flex items-center justify-between transactionCard py-2 my-1 mx-2 rounded-md text-sm"
              key={transaction.id}
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
                        ? "text-green-500"
                        : "text-red-400"
                    }
                  >
                    R$ {transaction.amount.toFixed(2)}
                  </p>
                </article>
              </span>
              <span className="flex gap-2">
                <button
                  className="bg-green-400 text-terciary px-2 py-1 rounded-full hover:bg-green-500 mr-2"
                  onClick={(ev) => handleView(ev, transaction)}
                >
                  <img
                    src={detailsIcon}
                    alt="right_arrow"
                    width={24}
                    height={24}
                  />
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
