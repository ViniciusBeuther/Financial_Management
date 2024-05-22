import { Link } from "@mui/material";
import SelectInput from "../../Components/SelectInput";
import { IoIosArrowBack } from "react-icons/io";

const AnalysisScreen = () => {
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
  return (
    <div>
      <Link to={"/"}>
        <IoIosArrowBack />
      </Link>
      <section className="bg-white rounded-lg shadow-lg m-5 py-5 flex flex-col gap-5">
        <SelectInput label={"Selecionar Mês: "} list={months} />
        <SelectInput label={"Selecionar Ano: "} list={ [ "2023", "2024" ] } />
      </section>
    </div>
  );
};

export default AnalysisScreen;
