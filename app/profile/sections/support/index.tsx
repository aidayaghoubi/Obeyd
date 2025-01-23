import Image from "next/image"
import { motion } from "framer-motion";

const Support = () => {
  return <motion.div
    initial={{ y: 30 }} 
    animate={{ y: 0 }} 
    transition={{ duration: 0.3 }}
    style={{ padding: "20px", textAlign: "center" ,overflow:"hidden" }}
  >
    <div className=" flex justify-center rounded-lg items-center">
      <div className="flex flex-col items-start w-1/2">
        <div className="text-lg">
          <p>با ما در تماس باشین</p>
        </div>
        <div className="text-lg">
          <p>پشتیبانی:obeyd@gmail.com</p>
        </div>
      </div>
      <div className="mt-10">
        <Image
          src="/support.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  </motion.div>
}
export default Support