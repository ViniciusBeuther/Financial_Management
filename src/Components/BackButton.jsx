import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const BackButton = () => {
    return(
        <Link to={"/"} >
            <IoIosArrowBack />
        </Link>
    )
}

export default BackButton;