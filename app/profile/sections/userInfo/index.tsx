import Button from "@/app/components/Button"
import Input from "@/app/components/Input"
import { motion } from "framer-motion";
import { useState } from "react"

const fields = [
  {
    label: 'نام مستعار',
    required: true,
    name: "name",
    icon: '',
  },
  {
    label: 'نام کاربری',
    required: true,
    name: "userName",
    error: '',
    icon: '',
  },
]


interface IUserInfo {
  user: {
    name: string,
    userName: string
  }
}
const UserInfo = ({ user }: IUserInfo) => {

  const [formData, setFormData] = useState<Record<string, string>>(user);

  function handleFormChange(e: string, id: string) {
    // setFormData(prev => ({ ...prev, [id]: e }))
  }

  return <motion.div
    initial={{ y: 30 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.3 }}
    style={{ overflow: "hidden" }}
  >
    <div className="flex flex-wrap gap-x-4 justify-between gap-y-4 ">
      {fields.map((item, i) => <Input
        key={i}
        style="w-[calc(50%-8px)]"
        error={item.error}
        label={item.label}
        name={item.name}
        required={item.required}
        value={formData[item.name] || ""}
        type={item.name}
        onChange={(e: string) => handleFormChange(e, item.name)}
      />)}
      <div className="w-1/2">
        <Button className="w-[calc(50%-8px)] mt-5 bg-[#dda0a0]" onClick={() => console.log("d")} disabled={false} variant="submit" title="ویرایش اطلاعات" />
      </div>

    </div>
  </motion.div>
}
export default UserInfo