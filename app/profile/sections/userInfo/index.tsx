import Button from "@/app/components/Button"
import Input from "@/app/components/Input"
import { motion } from "framer-motion";
import { useState } from "react"

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
]

const UserInfo = () => {

  const [formData, setFormData] = useState({})

  function handleFormChange(e: string, id: string) {

  }

  return <motion.div
    initial={{ y: 30 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.3 }}
    style={{overflow: "hidden" }}
  >
    <div className="flex flex-wrap gap-x-4 justify-between gap-y-4 ">
      {fields.map((item, i) => <Input
        key={i}
        style="w-[calc(50%-8px)]"
        error={item.error}
        label={item.label}
        name={item.name}
        required={item.required}
        //@ts-ignore
        value={formData[item.name]}
        type={item.name}
        onChange={(e: string) => handleFormChange(e, item.name)}
      />)}
      <Button className="w-[calc(50%-8px)] mt-5" onClick={() => console.log("d")} disabled={false} variant="submit" title="ویرایش اطلاعات" />

    </div>
  </motion.div>
}
export default UserInfo