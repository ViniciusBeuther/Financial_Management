import SelectInput from "./SelectInput";

const AnalysisForm = () => {
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
      <section>
        <SelectInput label={"Selecionar Mês: "} id={"analysis__select_month"} list={months} />
        <SelectInput label={"Selecionar Ano: "} id={"analysis__select_year"} list={["2023", "2024"]} />
      </section>
    </div>
  );
};

export default AnalysisForm;
