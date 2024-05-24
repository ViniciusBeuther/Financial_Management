import { Link } from "react-router-dom";
import AnalysisForm from "../../Components/AnalysisForm";
import Button from "../../Components/Button";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import BarChart from "../../Components/Charts/BarChart";

const AnalysisScreen = () => {
    const [isShowingChart, setIsShowingChart] = useState( false );

    function handleClick(ev){
        ev.preventDefault();
        setIsShowingChart( !isShowingChart );
    }

  return (
    <div>
      <Link to={"/"}>
        <IoIosArrowBack className="text-solidPurple-100 w-10 h-10 rounded-full mr-2 mt-2" />
      </Link>

      <div className="bg-white rounded-lg shadow-lg m-5 py-5 flex flex-col gap-5">
        { isShowingChart ? <BarChart /> : <AnalysisForm /> } 
        <Button
          bgColor={"solidPurple-300"}
          text={"Gerar Relatório"}
          textColor={"white"}
          hoverColor={"solidPurple-700"}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default AnalysisScreen;
