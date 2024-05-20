import { Typography } from "@mui/material";
import savingsIcon from "../../assets/icons/savings icon.svg";

const Header = () => {
  return (
    <h4 className="titleGradient text-3xl pb-2 mx-5 mb-5 mt-2 border-b-2 flex items-center">
      BFinance
      <img
        src={savingsIcon}
        alt="savings-icon"
        width={48}
        height={48}
        className="drop-shadow-sm"
      />
    </h4>
  );
};

export default Header;
