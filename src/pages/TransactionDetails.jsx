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
                  .eq("id", `${transaction_id}`)
                  setData(Object.assign({}, gerenciador_financeiro))
        
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


    return (
      data !== undefined || data !== null ? (
        <>
          <Typography>Text</Typography>
          {console.log(data)}
        </>
      ) : <p>loading</p>
    )
}


export default TransactionDetails;