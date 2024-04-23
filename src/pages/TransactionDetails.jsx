import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import { Typography } from "@mui/material";
import methods from "../classes/Util";
import BackButton from "../Components/BackButton";
import { IoIosArrowBack } from "react-icons/io";

const TransactionDetails = () => {
  const method = new methods();
  let { transaction_id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        let { data: gerenciador_financeiro, error } = await supabase
          .from("gerenciador_financeiro")
          .select("*")
          .eq("id", `${transaction_id}`);
        setData(gerenciador_financeiro);

        if (error) {
          console.error("Error reading data:", error);
        } else {
          console.log("Data read successfully:", data);
          console.log(data);
        }
      } catch (error) {
        console.error("Error reading data:", error.message);
      }
    }

    fetchData();
  }, []);

  // Verification to wait the BD's response
  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <article>
        <div className="bg-primary p-3">
        <Link to={"/"} >
            <IoIosArrowBack className="bg-secundary text-primary w-12 h-12 rounded-full" />
        </Link>
        </div>
      <section className="bg-terciary flex items-start justify-center flex-col">
        <Typography variant="h3" className="text-center w-full text-primary"> Detalhes </Typography>
        <Typography variant="h5"> <strong>Id:</strong> {data[0].id} </Typography>
        <Typography variant="h5"><strong>Data:</strong> {method.formatDate(data[0].date)}</Typography>
        <Typography variant="h5"><strong>Categoria:</strong> {data[0].category}</Typography>
        <Typography variant="h5"><strong>Descrição:</strong> {data[0].description}</Typography>
        <Typography variant="h5">
          <strong>Método de Pagamento:</strong> {data[0].payment_method.toUpperCase()}
        </Typography>
        <Typography variant="h5"><strong>Valor:</strong> R$ {data[0].amount.toFixed(2)}</Typography>
      </section>
    </article>
  );
};

export default TransactionDetails;
