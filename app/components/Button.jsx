const Button = ({ variant, onClick, title, disabled , className="" }) => {

  return <>
    {variant === "submit" ?
      <button onClick={onClick}
        className={`bg-activeRed my-2 rounded-md text-white w-full py-2 px-2 ${disabled && "bg-[#D1D6E2]"}
        ${className}
        `}>
        {title}
      </button>
      :
      <button onClick={onClick}
        className={`bg-white my-2 rounded-md text-activeRed border border-activeRed w-full py-2 px-2 ${disabled && "bg-[#D1D6E2]"}`}>
        {title}
      </button>
    }
  </>
}
export default Button