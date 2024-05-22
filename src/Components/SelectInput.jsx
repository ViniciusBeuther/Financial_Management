import { MenuItem, Select } from "@mui/material";

const SelectInput = (props) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <label htmlFor="" className="text-2xl">{props.label}</label>
            <Select name="selectComponent" size="sm" className="w-48 rounded-lg shadow-lg outline-none bg-white">
                {props.list.map((element, index) => (
                    <MenuItem className="hover:bg-solidPurple-100 outline-none" value={index} key={index}>{ element }</MenuItem>
                ))}
            </Select>
            
        </div>
    )
}

export default SelectInput;