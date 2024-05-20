import { Link } from "react-router-dom"
import { FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";


const ActionButtons = () => {
    return(
        <section className="flex items-center justify-center gap-3 mt-5">
            <Link to={"/add"}>
                <button className="bg-solidPurple-300 px-6 py-4 rounded-md shadow-md hover:bg-solidPurple-500">
                    <FaPlus className="text-terciary size-5" />
                </button>
            </Link>

            <Link to={"/expanse"}>
                <button className="bg-red-500 px-6 py-4 rounded-md shadow-md hover:bg-red-600">
                    <FaMinus className="text-terciary size-5" />
                </button>
            </Link>

            <Link to={"/report"}>
                {/* Active Button Style: bg-solidPurple-600 px-6 py-4 rounded-md shadow-md hover:bg-solidPurple-900 */}
                <button className="bg-gray-400 px-6 py-4 rounded-md" disabled={true}>
                    <HiOutlineDocumentReport  className="text-solidGray-100 size-5" />
                </button>
            </Link>
        </section>
    )
}

export default ActionButtons