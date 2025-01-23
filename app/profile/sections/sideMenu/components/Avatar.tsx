
import React from "react"
import { FaUser } from "react-icons/fa";



const Avatar = () => {
  return <div className="h-24 mb-16 pt-4 rounded-t-lg bg-[#95A1A7]">
    <div className="bg-white relative flex justify-center py-2 shadow-xl items-start px-4 gap-4 flex-col mx-4 rounded-lg">
      <div className="absolute left-0 top-0 text-sm py-1 px-1 rounded-tl-lg rounded-br-lg bg-[#F8DCE3]">
        19 خنده
      </div>
      <div className="mt-5 flex justify-start gap-2 items-center">
        <div className="py-3 px-3 rounded-lg flex justify-center bg-[#EEF2F5]">
          <FaUser />
        </div>
        <div>
          آیدا یعقوبی
          <div className="text-xs text-[#8B8B8B]">جوک هات = 22</div>
        </div>
      </div>

      <button className="bg-red-600 text-white py-2 w-full rounded-lg">
        جک بگو
      </button>
    </div>
  </div>
}
export default Avatar