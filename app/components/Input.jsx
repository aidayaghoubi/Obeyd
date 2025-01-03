"use client"

const ICON_MAP = {
  email: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="black" />
  </svg>
  ,
  userName: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="black" />
  </svg>
  ,
  password: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8H17V6.21C17 3.6 15.09 1.27 12.49 1.02C11.7954 0.953139 11.0945 1.03212 10.4322 1.25189C9.76988 1.47165 9.16079 1.82734 8.64394 2.29618C8.12709 2.76502 7.71388 3.33665 7.43079 3.97446C7.1477 4.61227 7.00097 5.30219 7 6V8H4V22H20V8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM9 8V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9Z" fill="black" />
  </svg>

}

const Input = ({ value, label, onChange, required = false, error, name, type }) => {

  return <div className="mb-2 flex flex-col items-start relative" >

    <div className="absolute right-2 top-[48%]">
      {ICON_MAP[type]}
    </div>
    <label className="text-sm text-black mb-[1px]">
      {label}
      {!required && "*"}
    </label>

    <input className="rounded-md border w-full py-[6px] pr-8 px-2 border-[#949494]" value={value} onChange={(e) => onChange(e)} name={name} type="text" />
    {
      error && <p>{error}</p>
    }
  </div>
}
export default Input