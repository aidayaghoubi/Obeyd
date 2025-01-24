import Image from "next/image"
import replayIcon from '../Icons/replay.svg'
import likeIcon from '../Icons/like.svg'
import dislikeIcon from '../Icons/dislike.svg'
import pokerIcon from '../Icons/poker.svg'
import fetcher from "@/app/utils/fetcher"


const Reaction = ({onShowComment ,jokeId ,likeCount,dislikeCount,replyCount}) => {

  function likeDislikeHandler(method){
    fetcher(`joke/${jokeId}/${method}` , { method : "POST" })
  }

  return <div className="flex mt-2 items-center gap-16">
    <div className="flex gap-1 items-center">
    {replyCount}
    <Image
    onClick={()=>onShowComment(prev=>!prev)}
      className="cursor-pointer"
      priority
      src={replayIcon}
      alt="menu"
    />
    </div>
    <div className="flex gap-1 items-center">
    {likeCount}
    <Image
    onClick={()=>likeDislikeHandler('like')}
      className="cursor-pointer"
      priority
      src={likeIcon}
      alt="menu"
    />
    </div>
   <div className="flex gap-1 items-center">
    {dislikeCount}
    <Image
    onClick={()=>likeDislikeHandler("dislike")}
      className="cursor-pointer"
      priority
      src={dislikeIcon}
      alt="menu"
    />
    </div>
    <Image
      className="cursor-pointer"
      priority
      src={pokerIcon}
      alt="menu"
    />
  </div>
}
export default Reaction