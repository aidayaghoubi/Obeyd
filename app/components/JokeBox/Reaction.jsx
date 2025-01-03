import Image from "next/image"
import replayIcon from '../Icons/replay.svg'
import likeIcon from '../Icons/like.svg'
import dislikeIcon from '../Icons/dislike.svg'
import pokerIcon from '../Icons/poker.svg'


const Reaction = ({onShowComment}) => {

  return <div className="flex mt-2 items-center gap-16">
    <Image
    onClick={()=>onShowComment(prev=>!prev)}
      className="cursor-pointer"
      priority
      src={replayIcon}
      alt="menu"
    />
    <Image
      className="cursor-pointer"
      priority
      src={likeIcon}
      alt="menu"
    />
    <Image
      className="cursor-pointer"
      priority
      src={dislikeIcon}
      alt="menu"
    />
    <Image
      className="cursor-pointer"
      priority
      src={pokerIcon}
      alt="menu"
    />
  </div>
}
export default Reaction