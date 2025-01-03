"use client"
import { useState } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import Image from "next/image"

const fields = [
  {
    label: 'ایمیل',
    required: true,
    name: "email",
    error: '',
    icon: '',
  },
]

const LoginForm = () => {

  const [formData, setFormData] = useState({})

  function handleFormChange(e, name) {
    setFormData(prev => ({ ...prev, [name]: e.target.value }))
  }

  return <div className="bg-white pb-28 relative border-[#4C7599] border-2 border-dashed p-10 text-center rounded-2xl flex-col items-center  justify-center">

    <h2 className="text-mainRed text-3xl mb-2" >
      عبید
    </h2>
    <p className="text-black mb-2">
      فراموشی رمز ورود
    </p>

    {fields.map((item, i) => <Input
      key={i}
      error={item.error}
      label={item.label}
      name={item.name}
      required={item.required}
      value={formData[item.name]}
      type={item.name}
      onChange={(e) => handleFormChange(e, item.name)}
    />)}
    <div className="mt-6">
      <Button varient="submit" title="ارسال کد فراموشی" />
    </div>
    <div className="absolute right-0 bottom-0">
      <Image
        src="/loginBgIcon.png"
        width={80}
        height={80}
        alt="Picture of the author"
      />
    </div>
  </div>
}
export default LoginForm