const Button = ({ variant, onClick, title, disabled, className = "" }) => {

  return <>
    {variant === "submit" ?
      <button onClick={onClick}
        disabled={disabled}
        className={`bg-activeRed hover:scale-105 delay-100 duration-150 transition-all my-2 rounded-md text-white w-full py-2 px-2 ${disabled && "!bg-[#D1D6E2]"}
        ${className}
        `}>
        {title}
      </button>
      :
      <button onClick={onClick}
        className={`bg-white my-2 rounded-md text-activeRed border border-activeRed w-full py-2 px-2 ${disabled && "bg-[#D1D6E2]"} ${className}`}>
        {title}
      </button>
    }
  </>
}
export default Button