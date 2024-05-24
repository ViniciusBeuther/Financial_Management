const Button = (props) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className={`bg-${props.bgColor} text-${props.textColor}  py-2 px-4 rounded-lg shadow-lg hover:bg-${props.hoverColor}`} 
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
