"use client"
import { useState } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useAuth } from "@/context/AuthContext"

const fields = [
  {
    label: 'نام',
    required: true,
    name: "name",
    error: '',
    icon: '',
  },
  {
    label: 'نام کاربری',
    required: true,
    name: "userName",
    icon: '',
  },
]

const requiredFelid = ["name", "userName"]

const LoginForm = () => {

  const [formData, setFormData] = useState({})
  const { login } = useAuth()
  const router = useRouter()

  function handleFormChange(e, name) {
    const english = /^[A-Za-z0-9-.]*$/;
    if (name === "userName") {
      if (english.test(e.target.value)) {
        setFormData(prev => ({ ...prev, [name]: e.target.value }))
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: e.target.value }))
    }
  }

  function onSubmit() {
    if (formData.name && formData.userName) {
      login(formData)
      router.push("/")
    }
  }

  return <div className="bg-white pb-28 relative border-[#4C7599] border-2 border-dashed p-10 text-center rounded-2xl flex-col items-center  justify-center">
    <h2 className="text-mainRed text-3xl mb-2" >
      عبید
    </h2>
    <p className="text-black mb-2">
      خوش آمدید!
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
      <Button onClick={onSubmit} variant="submit" title="ورود" />
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

{/* <div className="flex justify-between items-center my-0 gap-2">
      <div className="w-full h-[0.5px] bg-[#bdbebf]" />
      یا
      <div className="w-full h-[0.5px] bg-[#bdbebf]" />
    </div> */}
{/* <Button onClick={()=>router.push('/signin')} title="ثبت نام" />
    <div className="text-red-500 text-sm text-right">
      <Link href="/forget-password">
        آیا رمز عبور خود را فراموش کرده اید؟

      </Link>
    </div> */}