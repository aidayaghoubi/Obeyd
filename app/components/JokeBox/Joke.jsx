"use client"
import { useState } from "react"
import JokeActions from "./JokeActions"
import ReplayJoke from "./ReplayJoke"
import Reaction from "./Reaction"

const Joke = ({ data }) => {

  const [showComment, setShowComment] = useState(false)

  return <div className="w-full border border-[#EFF4F7] rounded-md bg-white my-4 px-8 pt-4 pb-2 ">
    <div className="flex justify-between">
      <p className="font-bold mb-2 text-xl">{data?.userName}</p>
      <JokeActions />
    </div>
    <p className="mr-4 text-lg leading-8">
      {data?.joke}
    </p>
    <div className="w-full mt-4 h-0.5 bg-[#EFF4F7]" />
    <Reaction onShowComment={setShowComment} />
    <ReplayJoke showReplay={showComment}/>
  </div>
}
export default Joke