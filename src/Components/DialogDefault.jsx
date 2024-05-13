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
      <button onClick={handleOpen} className="bg-green-400 px-4 py-2 rounded-lg text-solidPurple-1000 font-bold hover:bg-green-600 shadow-md" >
        Editar
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div className="">
            <Typography variant="h3" className="text-solidPurple-1000" textAlign={"center"}>Editar Dados</Typography>
              <form action="submit">

                <article className="py-3 px-2 mb-5 mt-5 bg-solidPurple-100 rounded-lg flex items-center justify-end">
                  <label htmlFor="value" className="w-[60%] text-solidPurple-1000 font-bold">
                    Novo R$: 
                  </label>
                  <Input id="updateForm__amount" type="number" variant="static" placeholder="R$" className="px-2 w-full text-center" value={updatedAmount} onChange={(ev) => setUpdatedAmount(ev.target.value)} />
                </article>

                <article className="py-3 px-2 mb-5 bg-solidPurple-100 rounded-lg flex items-center justify-end">
                  <label htmlFor="value" className="w-[60%] text-solidPurple-1000 font-bold">
                    Descrição: 
                  </label>
                  <Input id="updateForm__description" variant="static" value={updatedDescription} onChange={(ev) => setUpdatedDescription(ev.target.value)} className="px-2 w-full" />
                </article>

                <div className="flex items-center justify-end gap-3">

                  <button onClick={handleClose} className="bg-red-400 px-4 py-2 rounded-lg text-solidPurple-950 font-bold hover:bg-red-500 shadow-md">
                    Cancelar
                  </button>

                  <button onClick={(event) => handleSave(event)} className="bg-green-400 px-4 py-2 rounded-lg text-solidPurple-1000 font-bold hover:bg-green-600 shadow-md" >
                    Salvar
                  </button>
                
                </div>
              </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogDefault;
