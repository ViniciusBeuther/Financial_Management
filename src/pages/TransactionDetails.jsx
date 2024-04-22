import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import { Typography } from "@mui/material";

const TransactionDetails = () => {
    let { transaction_id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchData(){
            
            try {
                  let { data: gerenciador_financeiro, error } = await supabase
                  .from('gerenciador_financeiro')
                  .select('*')      
                  .eq("id", `${transaction_id}`);
                  setData(gerenciador_financeiro);
        
                if (error) {
                  console.error("Error reading data:", error);
                } else {
                  console.log("Data read successfully:", data);
                  console.log(data)
                }
              } catch (error) {
                console.error("Error reading data:", error.message);
              }
        }

        fetchData();
        
    }, [])

    // Verification to wait the BD's response
    if ( !data ) {
      return(<p>Carregando...</p>)
    }

    return (
      (
        <>
          <div className="bg-white py-10 px-5 rounded-lg">
            <Typography>{data[0].id}</Typography>
            <Typography>{data[0].date}</Typography>
            <Typography>{data[0].category}</Typography>
            <Typography>{data[0].description}</Typography>
            <Typography>{data[0].payment_method}</Typography>
            <Typography>{data[0].amount.toFixed(2)}</Typography>
          </div>
          {console.log(data)}
        </>
      )
    )
}


export default TransactionDetails;