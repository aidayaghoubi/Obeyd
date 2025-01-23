"use client"

import { useState } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import Image from "next/image"

const fields = [
  {
    label: 'نام کاربری',
    required: true,
    name: "userName",
    icon: '',
  },
  {
    label: 'ایمیل',
    required: true,
    name: "email",
    error: '',
    icon: '',
  },
  {
    label: 'رمز عبور',
    required: true,
    name: "password",
    icon: '',
  },
  {
    label: 'تکرار رمز عبور',
    required: true,
    name: "password",
    icon: '',
  }
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
      خوش آمدید! صفحه خود را بسازید
    </p>

    {fields.map((item, i) => <Input
      key={i}
      error={item.error}
      label={item.label}
      name={item.name}
      type={item.name}
      required={item.required}
      value={formData[item.name]}
      onChange={(e) => handleFormChange(e, item.name)}
    />)}
    <div className="mt-6">
      <Button disabled variant="submit" title="ورود" />
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