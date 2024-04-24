import React, { useState } from "react";
import { Button, Dialog, DialogContent, Typography } from "@mui/material";

const DialogDefault = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} variant="contained" color="success" >
        Editar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div>
            <Typography variant="h3" textAlign={"center"}>Editar Dados</Typography>
            <p>
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty-five years to get these plants, twenty-five
              years of blood sweat and tears, and I'm never giving up, I'm just
              getting started. I'm up to something. Fan luv.
            </p>
          </div>
          <div className="flex items-center justify-end gap-3">
            <Button onClick={handleClose} color="error" variant="contained">
              Cancelar
            </Button>
            <Button onClick={handleClose} color="success" variant="contained">
              Salvar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogDefault;
