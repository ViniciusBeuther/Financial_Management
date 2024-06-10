import { Link } from "react-router-dom";
import AnalysisForm from "../../Components/AnalysisForm";
import Button from "../../Components/Button";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import BarChart from "../../Components/Charts/BarChart";
import SelectInput from "../../Components/SelectInput";

const AnalysisScreen = () => {
  const [isShowingChart, setIsShowingChart] = useState(false);
  const months = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];

  function handleClick(ev) {
    ev.preventDefault();
    setIsShowingChart(!isShowingChart);
  }

  return (
    <div>
      <Link to={"/"}>
        <IoIosArrowBack className="text-solidPurple-100 w-10 h-10 rounded-full mr-2 mt-2" />
      </Link>
      <div className="flex items-center justify-center">
        <div className="bg-white max-w-[520px] w-full rounded-lg shadow-lg m-5 py-5 flex flex-col gap-5">

              <SelectInput
                label={"Selecionar Mês: "}
                id={"analysis__select_month"}
                list={months}
              />
              <SelectInput
                label={"Selecionar Ano: "}
                id={"analysis__select_year"}
                list={["2023", "2024"]}
              />

        <section>
        </section>
          {isShowingChart ? <BarChart key={isShowingChart} /> : null}
          <Button
            bgColor={"solidPurple-300"}
            text={isShowingChart ? "Voltar" : "Gerar Relatório"}
            textColor={"white"}
            hoverColor={"solidPurple-700"}
            onClick={handleClick}
          />
        </div>
      </div>
      </div>
  );
};

export default AnalysisScreen;
