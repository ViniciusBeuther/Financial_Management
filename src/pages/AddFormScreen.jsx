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
import { IoIosArrowBack } from "react-icons/io";
import { FaBrazilianRealSign } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import { Link } from "react-router-dom";

const AddFormScreen = () => {
  const [categories, setCategories] = useState([
    {
      item: "Salário",
      value: 1,
      icon: "💵",
    },
    {
      item: "Dividendos",
      value: 2,
      icon: "💰",
    },
    {
      item: "Saldo devedor",
      value: 3,
      icon: "💳",
    },
  ]);

  const [selectedInput, setSelectedInput] = useState(""); 
  const [amount, setAmount] = useState(""); 
  const [date, setDate] = useState(""); 
  const [description, setDescription] = useState(""); 

  const sortedCategories = categories.slice().sort((a, b) => {
    return a.item.localeCompare(b.item);
  });

  // Handle form submit, set data in db and reset fields
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare data to be inserted
    const dataToInsert = {
      category: selectedInput,
      amount: parseFloat(amount),
      date: date,
      payment_method: "pix",
      description: description,
      type: "E",
      emoji: categories.find((category) => category.item == selectedInput).icon,
    };

    try {
      const { data, error } = await supabase.from("gerenciador_financeiro").insert([dataToInsert]);

      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully:", data);
      }
    } catch (error) {
      console.error("Error inserting data:", error.message);
      alert("Algo deu errado!");
    }

    // Reset form fields
    setSelectedInput("");
    setAmount("");
    setDate("");
    setDescription("");
  };

  return (
    <section className="purpleGlass">
      <article className="w-full p-2">
        <div className="flex items-center">
          <Link to={"/"}>
            <IoIosArrowBack className="text-solidPurple-100 w-10 h-10 rounded-full mr-2" />
          </Link>
          <Typography className="text-solidPurple-100 text-center" variant="h4">
            Receita
          </Typography>
        </div>

        <form onSubmit={(ev) => handleSubmit(ev)} className="flex flex-col gap-2 text-solidPurple-100">
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
              <MenuItem key={index} value={obj.item} id={`addform__menuitem-${index}`}>
                {obj.icon} {obj.item}
              </MenuItem>
            ))}
          </Select>

          {/* Amount input */}
          <div className="flex flex-col">
            <label className="text-xl">Valor</label>
            <div className="flex items-center">
              <FaBrazilianRealSign className="absolute left-5 text-green-500" />
              <input
                type="number"
                step={"0.01"}
                pattern="[0-9]*"
                inputmode="decimal"
                name="amount"
                id="form__amount"
                placeholder="0.00"
                className="pl-8 pr-2 text-solidPurple-950 py-4 rounded-lg w-full bg-white"
                value={amount}
                onChange={(ev) => setAmount(ev.target.value)}
              />
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around text-primary">
            <article>
              <label className="text-solidPurple-100 text-xl">Data</label>
              <div className="">
                <input
                  type="date"
                  name="amount"
                  id="form__date"
                  placeholder="0.00"
                  className="p-4 rounded-lg w-full text-black bg-white"
                  value={date}
                  onChange={(ev) => setDate(ev.target.value)}
                />
              </div>
            </article>
          </div>

          {/* Description input */}
          <div className="mb-2">
            <label className="text-solidPurple-100 text-xl">Descrição (opcional)</label>
            <input
              type="text"
              name="form__textarea"
              id="form__textarea"
              className="p-4 w-full text-black rounded-md"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
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
  );
};

export default AddFormScreen;
