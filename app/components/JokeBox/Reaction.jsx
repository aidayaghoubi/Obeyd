import { FaCommentAlt } from "react-icons/fa";
import fetcher from "@/app/utils/fetcher"
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";



const Reaction = ({ onShowComment, jokeId, likeCount, dislikeCount, replyCount, onUpdateJoke }) => {

  function likeDislikeHandler(method) {
    fetcher(`joke/${jokeId}/${method}`, { method: "POST" }).then(() => {
      onUpdateJoke(method)
    })
  }


  return <div className="flex mt-2 items-center justify-start mr-1 gap-10">
    <div
      onClick={() => onShowComment(prev => !prev)}
      className="flex gap-1 items-center cursor-pointer">
      {replyCount}
      <FaCommentAlt size={24} color="#759dba" />
    </div>
    <div
      onClick={() => likeDislikeHandler('like')}
      className="flex gap-1 items-center cursor-pointer">
      {likeCount}
      <FcLike size={30} />
    </div>
    <div
      onClick={() => likeDislikeHandler("dislike")}
      className="flex gap-1 items-center cursor-pointer">
      {dislikeCount}
      <FcDislike size={30} />
    </div>
  </div>
}
export default Reaction