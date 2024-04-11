import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TransactionList from "../Components/TransactionList";
import ActionButtons from "../Components/ActionButtons";

const AccountInfo = (props) => {
  const [balance, setBalance] = useState(0.0);

  // Function to calculate the actual balance
  function calculateCurrentBalance() {
    let totalBalance = 0.0;
    props.database.forEach((record) => {
      totalBalance += record.amount;
    });
    return totalBalance;
  }

  // Update balance when props.database changes
  useEffect(() => {
    if (props.database != null) {
      setBalance(calculateCurrentBalance().toFixed(2));
    }
  }, [props.database]);

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
      
      {/* Action buttons */}
      <ActionButtons />

      <TransactionList setBalance={setBalance} balance={balance} />
    </>
  );
};

export default AccountInfo;
