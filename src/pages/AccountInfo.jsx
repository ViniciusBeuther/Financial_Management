import { TextField, Typography } from "@mui/material";
import TransactionList from "../Components/TransactionList";
import { useState } from "react";

const AccountInfo = () => {
  const [balance, setBalance] = useState(100);

  return (
    <>
      <div className="text-center flex items-center justify-center mt-5">
        <Typography
          variant="h3"
          className="accountInfo__container_balance bg-terciary text-primary rounded-full py-3 px-5"
        >
          $ {balance.toLocaleString()}
        </Typography>
      </div>

      <div className="mt-5 flex-col text-center  text-primary">
        <Typography variant="h6">
          Fatura do Mês: ${balance.toLocaleString()}
          <br />
          Gastos no PIX/Débito: ${balance.toLocaleString()}
        </Typography>
      </div>
      <TransactionList />
    </>
  );
};

export default AccountInfo;
