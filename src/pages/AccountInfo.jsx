import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TransactionList from "../Components/TransactionList";
import ActionButtons from "../Components/ActionButtons";
import moneyIcon from "../../assets/icons/money icon.svg";
import creditCardIcon from "../../assets/icons/credit card icon.svg";
import DateMethods from "../classes/Date";

const AccountInfo = (props) => {
  const [balance, setBalance] = useState(0.0);
  const [creditCard, setCreditCard] = useState(0.0);
  const dateMethods = new DateMethods();

  // Function to calculate the current balance
  function calculateCurrentBalance() {
    let totalBalance = 0.0;
    props.database.forEach((record) => {
      if (
        record.payment_method == "pix" &&
        record.type == "E" &&
        dateMethods.getMonthToNumericRepresentation(record.date).month == dateMethods.getToday().month ) {
          
          totalBalance += record.amount;
          
      } else if ( 
        record.payment_method != "credit" &&
        record.type == "S" &&
        dateMethods.getMonthToNumericRepresentation(record.date).month == dateMethods.getToday().month ){
          totalBalance -= record.amount * -1;
        }
    });
    return totalBalance;
  }

  // Function to calculate the credit card balance
  function calculateCurrentCreditCard() {
    let creditCardAmount = 0.0;
    props.database.forEach((record) => {
      if (record.payment_method == "credit" && record.type == "S") {
        creditCardAmount += record.amount;
      }
    });
    return creditCardAmount;
  }

  // Update balance when props.database changes
  useEffect(() => {
    if (props.database != null) {
      setBalance(calculateCurrentBalance().toFixed(2));
      setCreditCard(calculateCurrentCreditCard().toFixed(2));
    }
  }, [props.database]);

  return (
    <>
      <article className="flex items-center justify-between text-solidGray-100">
        <div className="text-center flex items-center justify-start gap-2 w-full darkPurpleGradient shadow-lg border-solidPurple-300 border-[1px] m-2 p-2 rounded-lg">
          <div className="bg-solidPurple-500 flex items-center justify-center p-3 rounded-lg">
            <img
              src={moneyIcon}
              alt="money-icon"
              width={32}
              height={32}
              className=""
            />
          </div>
          <div className="flex items-start flex-col">
            <Typography>
              <strong>Saldo:</strong>
            </Typography>
            <Typography
              variant="h5"
              className="accountInfo__container_balance text-solidGray-100 tracking-tight"
            >
              ${balance.toLocaleString()}
            </Typography>
          </div>
        </div>

        <div className="text-center flex items-center justify-start w-full darkPurpleGradient shadow-lg border-solidPurple-300 border-[1px] m-2 p-2 rounded-lg">
          <div className="bg-solidPurple-500 flex items-center justify-center p-3 rounded-lg">
            <img
              src={creditCardIcon}
              alt="credit-card-icon"
              width={32}
              height={32}
            />
          </div>

          <div className="flex items-start flex-col ml-2">
            <Typography>
              <strong>Fatura:</strong>
            </Typography>
            <Typography
              variant="h5"
              className="accountInfo__container_balance text-red-400 tracking-tight"
            >
              ${creditCard.toLocaleString()}
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
