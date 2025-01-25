"use client"
import { useState } from "react"
import ReplayJoke from "./ReplayJoke"
import Reaction from "./Reaction"
import { IJoke } from '../../jokes/JokeDirectory'
import { formatJokeTime } from "@/app/utils/timeConvertor"
import Image from "next/image"

interface IJOkeSingle {
  data: IJoke
}
export interface IReply {
  userName: string,
  content: string,
  _id:string,
  createdAt: string,
}
const Joke = ({ data }: IJOkeSingle) => {
  const [joke, setJoke] = useState(data)
  const [showComment, setShowComment] = useState(false)

  function onUpdateJoke(method: "like" | "dislike") {
    if (method === "like") {
      setJoke((prev) => ({ ...prev, likeCount: prev.likeCount + 1 }))
    } else {
      setJoke((prev) => ({ ...prev, dislikeCount: prev.dislikeCount + 1 }))
    }
  }
  
  function onAddReply(reply: IReply) {
    setJoke((prev) => ({
      ...prev,
      replies: [...(prev.replies || []), reply],
    }));
  }

  return <>
    <div className="w-full border relative border-[#EFF4F7] rounded-md bg-white my-4 px-8 pt-4 pb-2 ">
      {showComment && joke?.replies?.length &&
        <div className="z-40 absolute right-2 bottom-[-35px]">
          <Image
            src="/thinPin.png"
            width={15}
            height={20}
            alt="Picture of the author"
          />
        </div>
      }
      <div className="flex justify-between">
        <p className="font-[600] mb-2 text-gray-900 text-xl">{joke?.creator?.name}</p>
        <p className="text-gray-600">
          {formatJokeTime(joke.createdAt)}
        </p>
      </div>
      <p className="mr-1 text-[#495266] text-md leading-8">
        {joke?.content}
      </p>
      <div className="w-full mt-4 h-0.5 bg-[#EFF4F7]" />
      <Reaction onUpdateJoke={onUpdateJoke} replyCount={joke?.replies?.length} dislikeCount={joke?.dislikeCount} likeCount={joke?.likeCount} jokeId={joke._id} onShowComment={setShowComment} />
    </div>
    <ReplayJoke onUpdateJoke={onAddReply} writer={joke.creator.name} replies={joke?.replies || []} jokeId={joke._id} showReplay={showComment} />
  </>
}
export default Joke