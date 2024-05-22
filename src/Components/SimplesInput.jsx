const SimpleInput = ( props ) => {
    return(
        <span className="flex flex-col">
            <label htmlFor={`${props.label}`} className="text-2xl text-solidPurple-950"> { props.label } </label>
            <input type="text" placeholder={`${props.placeholder}`} className="rounded-md px-4 py-2 outline-none" />
        </span>
    )
}

export default SimpleInput;