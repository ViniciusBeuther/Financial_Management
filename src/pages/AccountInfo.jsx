import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TransactionList from "../Components/TransactionList";
import ActionButtons from "../Components/ActionButtons";
import moneyIcon from "../../assets/icons/money icon.svg"
import creditCardIcon from "../../assets/icons/credit card icon.svg"

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
      <article className="flex items-center justify-between">
          <div className="text-center flex items-center justify-start gap-2 w-full bg-white m-2 p-2 rounded-lg">
            <div className="bg-green-300 flex items-center justify-center p-3 rounded-lg">
              <img src={moneyIcon} alt="money-icon" width={32} height={32} className="" />
            </div>
            <div className="flex items-start flex-col">
              <Typography><strong>Saldo:</strong></Typography>
              <Typography
                variant="h5" 
                className="accountInfo__container_balance text-primary tracking-tight"
              >
                ${balance.toLocaleString()}
              </Typography>
            </div>
          </div>

          <div className="text-center flex items-center justify-start w-full bg-white m-2 p-2 rounded-lg">
            <div className="bg-yellow-300 flex items-center justify-center p-3 rounded-lg">
              <img src={creditCardIcon} alt="credit-card-icon" width={32} height={32} />
            </div>

            <div className="flex items-start flex-col ml-2">
              <Typography><strong>Fatura:</strong></Typography>
              <Typography
                variant="h5"
                className="accountInfo__container_balance text-primary tracking-tight"
              >
                ${balance.toLocaleString()}
              </Typography>
            </div>
          </div>

      </article>

      
      {/* Action buttons */}
      <ActionButtons />

      <TransactionList setBalance={setBalance} balance={balance} />
    </>
  );
};

export default AccountInfo;
