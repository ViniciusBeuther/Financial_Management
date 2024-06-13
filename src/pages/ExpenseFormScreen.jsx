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
  import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const ExpenseFormScreen = () => {
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
    
      const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
      
        // Prepare data to be inserted
        const dataToInsert = {
          category: selectedInput,
          amount: parseFloat(document.getElementById("addform__amount").value) * -1,
          date: document.getElementById("addform__date").value,
          payment_method: selectedValue,
          description: document.getElementById("addform__textarea").value,
          type: "S",
          emoji: categories.find((category) => category.item == selectedInput).icon
        };
      
        try {
          const { data, error } = await supabase
            .from("gerenciador_financeiro")
            .insert([dataToInsert]);
      
          if (error) {
            console.error("Error inserting data:", error);
          } else {
            console.log("Data inserted successfully:", data);
          }
        } catch (error) {
          console.error("Error inserting data:", error.message);
        }
      
        // Reset form fields
        setSelectedValue("");
        setSelectedInput("");
        document.getElementById("addform__textarea").value = "";
        document.getElementById("addform__amount").value = "";
        document.getElementById("addform__date").value = "";
      };
    return(
        <section className="purpleGlass">
        <article className="w-full p-2">
        <div className="flex items-center justify-start w-full">
          <Link to={"/"}>
            <IoIosArrowBack className="text-solidPurple-100 w-10 h-10 rounded-full mr-2" />
          </Link>
          <Typography className="text-solidPurple-100 text-center" variant="h4">
            Despesas
          </Typography>
        </div>
  
          <form
            onSubmit={(ev) => handleSubmit(ev)}
            className="flex flex-col gap-2 text-solidPurple-100"
          >
            <label className="text-xl">Categoria</label>
  
            <Select
              label="Categoria"
              className="bg-white text-solidPurple-100 w-full rounded-lg"
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
            <div className="flex flex-col text-solidPurple-100">
              <label className="text-xl">Valor</label>
              <div className="flex items-center">
                <FaBrazilianRealSign className="absolute left-5 text-green-500" />
                <input
                  type="number"
                  step={"0.01"}
                  pattern="[0-9]*" inputmode="decimal"
                  name="amount"
                  id="addform__amount"
                  placeholder="0.00"
                  className="pl-8 pr-2 py-4 rounded-lg w-full text-solidPurple-950 bg-white"
                />
              </div>
            </div>
  
            {/* Date + Radio group inputs */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around">
              <article>
                <label className="text-xl">Data</label>
                <div className="text-solidPurple-950">
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
                <label className="text-xl">Tipo de pagamento</label>
                <RadioGroup value={selectedValue} onChange={handleChange}  >
                  <div className="text-lg">
                    <Radio value="pix" color="success" />
                    <label htmlFor="pix">PIX</label>
                  </div>
                  <div className="text-lg">
                    <Radio value="debit" color="success" />
                    <label htmlFor="debit">Débito</label>
                  </div>
                  <div className="text-lg">
                    <Radio value="credit" color="success" />
                    <label htmlFor="credit">Crédito</label>
                  </div>
                </RadioGroup>
              </article>
            </div>
  
            {/* Description input */}
            <div className="mb-2">
              <label className="text-xl">Descrição (opcional)</label>
              <input
                type="text"
                name="addform__textarea"
                id="addform__textarea"
                className="p-4 w-full rounded-md text-solidPurple-950"
              />
            </div>
  
            <button
              className="bg-green-400 px-4 py-2 rounded-lg text-solidPurple-1000 font-bold hover:bg-green-600 shadow-md mb-5"
            >
              Adicionar
            </button>
          </form>
        </article>
      </section>
    )
}

export default ExpenseFormScreen;