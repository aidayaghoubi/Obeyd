"use client";

import fetcher from "@/app/utils/fetcher";
import { useState } from "react";
import Reply from "./Reply";
import { useAuth } from "@/context/AuthContext";

const ReplayJoke = ({ jokeId , showReplay ,replies }) => {
  const [value, setValue] = useState("")
  const {user} = useAuth()

  function sendReplyToServerHandler() {
    fetcher(`joke/${jokeId}/reply` , { method : "POST" , body : {
          reply:{
          userName:user.name,
          userId: user.userName,
          content: value
        }
    } })
  }

  console.log(replies ,"replies")

  return (
    <div
      className={`${showReplay ? "max-h-auto" : "max-h-0"
        } transition-all duration-500 overflow-hidden`}
    >
      {replies?.map((reply)=> <Reply key={reply?._id} reply={reply} /> )}
      <div className="flex justify-between mt-4 gap-4 mb-5">
        <input
          onChange={(e) =>setValue(e.target.value)}
          className="w-full py-2 px-2 border-2 rounded border-[#AEC7E0]"
          placeholder="نظرتو بنویس"
        />
        <button className="bg-[#AEC7E0] px-6 py-2 rounded" onClick={sendReplyToServerHandler}>ارسال</button>
      </div>
    </div>
  );
};
export default ReplayJoke