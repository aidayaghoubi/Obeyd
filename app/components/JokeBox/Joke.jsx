"use client"
import { useState } from "react"
import JokeActions from "./JokeActions"
import ReplayJoke from "./ReplayJoke"
import Reaction from "./Reaction"

const Joke = ({ data }) => {

  const [showComment, setShowComment] = useState(false)

  return <div className="w-full border border-[#EFF4F7] rounded-md bg-white my-4 px-8 pt-4 pb-2 ">
    <div className="flex justify-between">
      <p className="font-bold mb-2 text-xl">{data?.creator.name}</p>
      <JokeActions />
    </div>
    <p className="mr-4 text-lg leading-8">
      {data?.content}
    </p>
    <div className="w-full mt-4 h-0.5 bg-[#EFF4F7]" />
    <Reaction  replyCount={data?.replies?.length} dislikeCount={data?.dislikeCount} likeCount={data?.likeCount} jokeId={data._id} like={data} onShowComment={setShowComment} />
    <ReplayJoke replies={data?.replies || []} jokeId={data._id} showReplay={showComment}/>
  </div>
}
export default Joke