import { IoInformationCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import expanseIcon from "../../assets/icons/expanse arrow.svg"
import incomeIcon from "../../assets/icons/income arrow.svg"
import detailsIcon from "../../assets/icons/details arrow icon.svg"

const TransactionList = (props) => {
  const [data, setData] = useState();
  let navigate = useNavigate();

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

  async function handleView(ev, transaction) {
    return navigate(`/details/${transaction.id}`, { replace: true })
  }
  function verifyIcon( type ) {
    if( type == 'S' ){
      return expanseIcon;
    } else { return incomeIcon }
  } 

  return (
    <div className="bg-white mt-5">
      {data ? (
        <div className="flex flex-col">
            <Typography variant="h5" className="text-terciary bg-primary p-2 font-bold">
                Transações Recentes
            </Typography>
          {data.map((transaction) => (
            
            <div
              className="flex items-center justify-between border-b-2 pb-2 border-primary text-sm"
              key={transaction.id}
            >
              <span className="flex items-center m-2">
                <img src={verifyIcon( transaction.type )} alt="icon" width={24} height={24} className="mr-2" />

                <article className="flex flex-col items-start ">
                  <p className={'text-black'}>
                    {transaction.category}
                  </p>
                  <p className={transaction.amount >= 0.00 ? 'text-green-500' : 'text-red-400'}>
                    R$ {transaction.amount.toFixed(2)}
                  </p>
                </article>

              </span>
                <span className="flex gap-2">
                    <button
                        className="bg-green-400 text-terciary px-2 py-1 rounded-full hover:bg-green-500 mr-2"
                        onClick={(ev) => handleView(ev, transaction)}
                    >
                        <img src={detailsIcon} alt="right_arrow" width={24} height={24} />
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
