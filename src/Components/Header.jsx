import { Typography } from "@mui/material";
import savingsIcon from "../../assets/icons/savings icon.svg";

const Header = () => {
  return (
    <h4 className="titleGradient text-3xl pb-2 mx-5 mb-5 mt-2 border-b-2 flex items-center stroke-solidPurple-1000">
      <img
        src={savingsIcon}
        alt="savings-icon"
        width={48}
        height={48}
        className="drop-shadow-sm"
      />
      BFinance
    </h4>
  );
};

export default Header;
