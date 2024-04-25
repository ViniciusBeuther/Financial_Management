import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogContent, Input, Typography } from "@mui/material";
import { supabase } from "../../utils/supabase";
import { useParams } from "react-router-dom";

const DialogDefault = (props) => {
  const [ open, setOpen ] = useState(false);
  const { transaction_id } = useParams();
  const [ updatedAmount, setUpdatedAmount ] = useState(props.data[0].amount);
  const [ updatedDescription, setUpdatedDescription ] = useState(props.data[0].description);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = (ev) => {
    ev.preventDefault();

    async function updateData() {
      if( updatedAmount < 0.00 ) {
        setUpdatedAmount( updatedAmount * -1 )
      }

      try {
        const { data, error } = await supabase
          .from('gerenciador_financeiro')
          .update({ amount: `${updatedAmount * -1}`, description: updatedDescription })
          .eq('id', `${transaction_id}`)
          .select();
          handleClose();
          
      } catch ( error ) {
        alert( "Algo deu errado!" );
      }
    }
  
    updateData();
  };
  
  return (
    <>
      <Button onClick={handleOpen} variant="contained" color="success" >
        Editar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div>
            <Typography variant="h3" textAlign={"center"}>Editar Dados</Typography>
              <form action="submit">

                <article className="py-3 px-2 mb-5 mt-5 bg-terciary rounded-lg flex items-end justify-end">
                  <label htmlFor="value" className="w-[60%]">
                    Novo Valor: 
                  </label>
                  <Input id="updateForm__amount" type="number" variant="static" placeholder="R$" className="px-2 w-full" value={updatedAmount} onChange={(ev) => setUpdatedAmount(ev.target.value)} />
                </article>

                <article className="py-3 px-2 mb-5 bg-terciary rounded-lg flex items-end justify-end">
                  <label htmlFor="value" className="w-[60%]">
                    Nova descrição: 
                  </label>
                  <Input id="updateForm__description" variant="static" value={updatedDescription} onChange={(ev) => setUpdatedDescription(ev.target.value)} className="px-2 w-full" />
                </article>

                <div className="flex items-center justify-end gap-3">

                  <Button onClick={handleClose} color="error" variant="contained">
                    Cancelar
                  </Button>

                  <Button onClick={(ev) => handleSave(ev)} color="success" variant="contained">
                    Salvar
                  </Button>
                
                </div>
              </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogDefault;
