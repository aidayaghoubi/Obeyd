"use client";

import fetcher from "@/app/utils/fetcher";
import { useState } from "react";
import Reply from "./Reply";
import { BsArrowReturnRight } from "react-icons/bs";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const ReplayJoke = ({ jokeId, showReplay, replies, writer, onUpdateJoke }) => {
  const [value, setValue] = useState("");
  const { user } = useAuth();

  function sendReplyToServerHandler() {
    const payload = {
      userName: user.name,
      userId: user.userName,
      createdTime: Date.now(),
      content: value,
    };
    fetcher(`joke/${jokeId}/reply`, {
      method: "POST",
      body: { reply: payload },
    }).then((res) => {
      onUpdateJoke(payload);
      setValue("");
    });
  }

  const replyAnimation = {
    initial: { opacity: 0, y: 50 }, // Start hidden and slide up
    animate: { opacity: 1, y: 0 }, // Animate to visible
    exit: { opacity: 0, y: -50 }, // Exit with a slide up
    transition: { duration: 0.4 }, // Control animation speed
  };

  return (
    <motion.div
      className={`transition-all duration-500 overflow-hidden ${
        showReplay ? "max-h-auto" : "max-h-0"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: showReplay ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {replies?.map((reply, i) => (
          <motion.div
            key={reply?._id}
            layout // Helps animate layout changes
            {...replyAnimation}
          >
            <Reply isFirstItem={i === 0} reply={reply} />
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="flex items-center gap-2 ">
        <div className="rotate-180">
          <BsArrowReturnRight />
        </div>
        <label className="mt-2">{`  نظرتو برای ${writer} بنویس  `}</label>
      </div>
      <div className="flex justify-between mt-4 gap-4 mb-5">
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="w-full py-2 px-2 border-2 bg-white rounded !border-[#AEC7E0]"
          placeholder="......"
        />
        <button
          disabled={value.length < 5}
          className={`${
            value.length < 5 ? "bg-gray-400" : "bg-[#759dba]"
          } px-6 py-2 rounded`}
          onClick={sendReplyToServerHandler}
        >
          ارسال
        </button>
      </div>
    </motion.div>
  );
};

export default ReplayJoke;
