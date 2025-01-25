
"use client";
import { useAuth } from "@/context/AuthContext";
import React from "react"
import { FaUser } from "react-icons/fa";

interface IAvatar {
  onShowAddJokeModal: () => void,
  jokeCount:number,
  likeCount:number
}

const Avatar = ({ onShowAddJokeModal ,jokeCount,likeCount }: IAvatar) => {

  const { user } = useAuth()



  return <div className="h-24 mb-16 pt-4 rounded-t-xl bg-[#95A1A7]">
    <div className="bg-[#F7F9FA] relative flex justify-center py-2 shadow-lg items-start px-4 gap-4 flex-col mx-4 rounded-xl">
      <div className="absolute left-0 top-0 text-md py-1 px-1 rounded-tl-xl rounded-br-lg bg-[#F8DCE3]">
        {likeCount} خنده
      </div>
      <div className="mt-5 flex justify-start gap-2 items-center">
        <div className="py-3 px-3 rounded-xl flex justify-center bg-[#EEF2F5]">
          <FaUser />
        </div>
        <div>
          {user?.name}
          <div className="text-xs text-[#8B8B8B]">جوک هات = {jokeCount}</div>
        </div>
      </div>

      <button onClick={onShowAddJokeModal} className="bg-red-600 text-white py-2 w-full rounded-lg">
        جوک بگو
      </button>
    </div>
  </div>
}
export default Avatar