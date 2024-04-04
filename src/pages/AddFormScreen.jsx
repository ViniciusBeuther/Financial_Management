import {
    Button,
  Checkbox,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import Header from "../Components/Header";
import { FaBrazilianRealSign } from "react-icons/fa6";
import { useState } from "react";

const AddFormScreen = () => {
  const [categories, setCategories] = useState([
    {
      item: "Alimentação no Trabalho",
      value: 1,
      icon: "🥪",
    },
    {
      item: "Alimentação para casa",
      value: 2,
      icon: "🏠",
    },
    {
      item: "Doces e besteiras",
      value: 3,
      icon: "🍬",
    },
    {
      item: "Lanches para Faculdade",
      value: 4,
      icon: "🥤",
    },
    {
      item: "Higiene Pessoal",
      value: 5,
      icon: "🧼",
    },
    {
      item: "Remédios",
      value: 6,
      icon: "💊",
    },
    {
      item: "Médico e exames",
      value: 7,
      icon: "⚕️",
    },
    {
      item: "Investimentos na bolsa de valores",
      value: 8,
      icon: "💹",
    },
    {
      item: "Desenvolvimento pessoal",
      value: 9,
      icon: "📘",
    },
    {
      item: "Cursos",
      value: 10,
      icon: "🎓",
    },
    {
      item: "Manutenções na moto",
      value: 11,
      icon: "🏍️",
    },
    {
      item: "Gasolina",
      value: 12,
      icon: "⛽",
    },
    {
      item: "Presentes",
      value: 13,
      icon: "🎁",
    },
    {
      item: "Uber - Curitiba",
      value: 14,
      icon: "🚗",
    },
    {
      item: "Alimentação - Curitiba",
      value: 15,
      icon: "🍽️",
    },
    {
      item: "Passagem - Curitiba",
      value: 16,
      icon: "🎫",
    },
    {
      item: "Amortização do Financiamento",
      value: 17,
      icon: "💳",
    },
    {
      item: "Financiamento",
      value: 18,
      icon: "🏦",
    },
    {
      item: "Conta de celular",
      value: 19,
      icon: "📱",
    },
    {
      item: "Pagamento",
      value: 20,
      icon: "💰",
    },
    {
      item: "Encontro",
      value: 21,
      icon: "👫",
    },
    {
      item: "Caixinhas",
      value: 22,
      icon: "🎁",
    },
    {
      item: "Produtos e-commerce",
      value: 23,
      icon: "🛍️",
    },
  ]);

  const sortedCategories = categories.slice().sort((a, b) => {
    return a.item.localeCompare(b.item);
  });

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <section className="bg-secundary h-[100vh]">  
      <article className="w-full p-2">
        <Typography className="text-primary p-2 text-center" variant="h4">
          Lançamentos
        </Typography>

        <form action="submit" className="flex flex-col gap-2">
          <label className="text-primary text-xl">Categoria</label>

          <Select
            label="Categoria"
            className="bg-white text-primary w-full rounded-lg"
          >
            {/* Menu Items, using the sorted categories */}
            {sortedCategories.map((obj, index) => (
              <MenuItem value={obj.item} id={`addform__menuitem-${index}`}>
                {obj.icon} {obj.item}
              </MenuItem>
            ))}
          </Select>

            {/* Amount input */}
          <div className="flex flex-col">
            <label className="text-primary text-xl">Valor</label>
            <div className="flex items-center">
              <FaBrazilianRealSign className="absolute left-5 text-green-500" />
              <input
                type="number"
                name="amount"
                id="addform__amount"
                placeholder="0.00"
                className="pl-8 pr-2 py-4 rounded-lg w-full bg-white"
              />
            </div>
          </div>

            {/* Date + Radio group inputs */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around text-primary">
            <article>
              <label className="text-primary text-xl">Data</label>
              <div className="">
                <input
                  type="date"
                  name="amount"
                  id="addform__amount"
                  placeholder="0.00"
                  className="p-4 rounded-lg w-full bg-white"
                />
              </div>
            </article>

            {/* RADIO GROUP */}
            <article className="mt-2">
              <label className="text-primary text-xl">Tipo de pagamento</label>
              <RadioGroup value={selectedValue} onChange={handleChange}>
                <div className="text-lg">
                  <Radio value="pix" />
                  <label htmlFor="pix">PIX</label>
                </div>
                <div className="text-lg">
                  <Radio value="debit" />
                  <label htmlFor="debit">Débito</label>
                </div>
                <div className="text-lg">
                  <Radio value="credit" />
                  <label htmlFor="credit">Crédito</label>
                </div>
              </RadioGroup>
            </article>
          </div>

            {/* Description input */}
            <div className="mb-2">
                <label className="text-primary text-xl">Descrição (opcional)</label>
                <input type="text" name="addform__textarea" id="addform__textarea" className="p-4 w-full rounded-md" />
            </div>

            <Button variant="contained" size="large" color="success">Adicionar</Button>
        </form>
      </article>
    </section>
  );
};

export default AddFormScreen;
