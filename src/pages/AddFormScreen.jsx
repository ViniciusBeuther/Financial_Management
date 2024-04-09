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
import { FaBrazilianRealSign } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";

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
  const [selectedValue, setSelectedValue] = useState(""); // Select checked checkbox
  const [selectedInput, setSelectedInput] = useState(""); // Select the category value

  // Object to insert in the DB
  const ObjToInsert = {
    category: "",
    amount: 0.0,
    date: "",
    payment_form: "",
    description: "",
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      ObjToInsert.category =
        document.getElementById("form__category").textContent;
    } catch (error) {
      console.log("Um probleminha, pequeno bug...");
    }

    // Pick and set up values to insert in DB
    ObjToInsert.amount = document.getElementById("addform__amount").value;
    ObjToInsert.amount = (ObjToInsert.amount * 1).toFixed(2);
    ObjToInsert.date = document.getElementById("addform__date").value;
    ObjToInsert.payment_form = selectedValue;
    ObjToInsert.description = document.getElementById("addform__textarea").value;
    
    async function insert(Obj){
                       
            const { data, error } = await supabase
            .from('gerenciador_financeiro')
            .insert([ 
                {date: `${Obj.date}`},
                {amount: `${(Obj.amount * 1).toFixed(2)}`},
                {category: `${Obj.category}`},
                {payment_method: `${Obj.payment_method}`},
                {description: `${Obj.description}`},
                {type: "expanse"},
            ])
            .select()
            console.log(data)
         if(error){
            console.log(error);
        }
    }

    insert(Object)

    //console.log(ObjToInsert);

    // Reset Select and Radio fields from
    setSelectedValue(""); // Limpa o RadioGroup
    setSelectedInput(""); // Limpa o Select

    // Clean text inputs
    document.getElementById("addform__textarea").value = "";
    document.getElementById("addform__amount").value = "";
    document.getElementById("addform__date").value = "";
  };

  return (
    <section className="bg-secundary">
      <article className="w-full p-2">
        <Typography className="text-primary p-2 text-center" variant="h4">
          Lançamentos
        </Typography>

        <form
          onSubmit={(ev) => handleSubmit(ev)}
          className="flex flex-col gap-2"
        >
          <label className="text-primary text-xl">Categoria</label>

          <Select
            label="Categoria"
            className="bg-white text-primary w-full rounded-lg"
            id="form__category"
            value={selectedInput}
            onChange={(ev) => setSelectedInput(ev.target.value)}
          >
            {/* Menu Items, using the sorted categories */}
            {sortedCategories.map((obj, index) => (
              <MenuItem
                key={index}
                value={obj.item}
                id={`addform__menuitem-${index}`}
              >
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
                  id="addform__date"
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
            <input
              type="text"
              name="addform__textarea"
              id="addform__textarea"
              className="p-4 w-full rounded-md"
            />
          </div>

          <Button
            variant="contained"
            size="large"
            color="success"
            type="submit"
          >
            Adicionar
          </Button>
        </form>
      </article>
    </section>
  );
};

export default AddFormScreen;
