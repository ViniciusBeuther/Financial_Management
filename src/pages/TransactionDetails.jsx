import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import { Button, Typography } from "@mui/material";
import methods from "../classes/Util";
import BackButton from "../Components/BackButton";
import { IoIosArrowBack } from "react-icons/io";
import DialogDefault from "../Components/DialogDefault";

const TransactionDetails = () => {
  const method = new methods();
  let { transaction_id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();

// remove row from database and recalculate the account balance
async function handleDelete(ev) {
  ev.preventDefault();
  try {
    let { error } = await supabase
      .from("gerenciador_financeiro")
      .delete()
      .eq("id", transaction_id);
    if (error) {
      throw error;
    }
    return navigate(`/`, { replace: true })

  } catch (error) {
    console.error("Erro ao excluir transação:", error.message);
  }
}

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
    <article className="">
      <div className="bg-primary p-3 flex items-center flex-start w-full">
        <Link to={"/"}>
          <IoIosArrowBack className="bg-secundary text-primary w-8 h-8 rounded-full mr-5" />
        </Link>
          <Typography variant="h4" className="text-center text-secundary">
          Detalhes
        </Typography>
      </div>
      <section className="bg-terciary flex items-start justify-center flex-col px-2 py-5">
    {console.log( data )}
        <Typography variant="h6">
          {" "}
          <strong>Id:</strong> {data[0].id}{" "}
        </Typography>

        <Typography variant="h6">
          <strong>Data:</strong> {method.formatDate(data[0].date)}
        </Typography>

        <Typography variant="h6">
          <strong>Categoria:</strong> {data[0].category}
        </Typography>

        <Typography variant="h6">
          <strong>Descrição:</strong> {data[0].description}
        </Typography>

        <Typography variant="h6">
          <strong> Método de Pagamento: </strong>{" "}
          { method.translatePaymentMethod( data[0].payment_method ) }
        </Typography>

        <Typography variant="h6">
          <strong>Valor:</strong> R$ {data[0].amount.toFixed(2)}
        </Typography>

        <article className="flex items-center justify-center w-full gap-5">
          <Button color="error" variant="contained" onClick={(ev) => handleDelete(ev)}>Remover</Button>
        
        
        <DialogDefault data={ data } />
        </article>

      </section>
        

    </article>
  );
};

export default TransactionDetails;
