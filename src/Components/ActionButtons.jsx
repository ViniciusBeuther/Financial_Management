import { Link } from "react-router-dom"
import { FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";

const ActionButtons = () => {
    return(
        <section className="flex items-center justify-center gap-3 mt-5">
            <Link to={"/add"}>
                <button className="bg-green-400 rounded-full p-8">
                    <FaPlus className="text-terciary size-5" />
                </button>
            </Link>

            <Link to={"/expanse"}>
                <button className="bg-red-400 rounded-full p-8">
                    <FaMinus className="text-terciary size-5" />
                </button>
            </Link>

            <Link to={"/report"}>
                <button className="bg-primary rounded-full p-8">
                    <HiOutlineDocumentReport  className="text-terciary size-5" />
                </button>
            </Link>
        </section>
    )
}

export default ActionButtons