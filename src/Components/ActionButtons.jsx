import { Link } from "react-router-dom"
import { FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import closeMonthIcon from "../../assets/icons/close month icon.svg";
import methods from "../classes/Util";
import DateMethods from "../classes/Date";

const ActionButtons = () => {
    return(
        <section className="flex items-center justify-center gap-3 mt-5">
            <Link to={"/add"}>
                <button className="bg-solidPurple-400 px-6 py-4 rounded-md shadow-sm">
                    <FaPlus className="text-terciary size-5" />
                </button>
            </Link>

            <Link to={"/expanse"}>
                <button className="bg-red-500 px-6 py-4 rounded-md shadow-sm">
                    <FaMinus className="text-terciary size-5" />
                </button>
            </Link>

            <Link to={"/report"}>
                <button className="bg-solidPurple-800 px-6 py-4 rounded-md shadow-sm">
                    <HiOutlineDocumentReport  className="text-solidGray-100 size-5" />
                </button>
            </Link>

            <button className="bg-red-800 rounded-md shadow-sm px-6 py-4 text-white text-sm">
                    Fechar mês
                </button>
        </section>
    )
}

export default ActionButtons