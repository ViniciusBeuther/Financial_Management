import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../utils/supabase";

const TransactionDetails = () => {
    let { transaction_id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchData(){
            
            try {
                const { dataFromDB, error } = await supabase
                  .from("gerenciador_financeiro")
                  .select("*")
                  .eq("id", `${transaction_id}`)
                  setData(dataFromDB);
                if (error) {
                  console.error("Error inserting data:", error);
                } else {
                  console.log("Data inserted successfully:", data);
                }
              } catch (error) {
                console.error("Error inserting data:", error.message);
              }
        }

        fetchData();
        
    }, [transaction_id])


    return(
        <>
            
            <div>Transaction</div>
        </>
    )
}


export default TransactionDetails;