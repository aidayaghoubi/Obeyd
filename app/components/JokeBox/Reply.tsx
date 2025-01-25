import { formatJokeTime } from "@/app/utils/timeConvertor"
import Image from "next/image"
import { IReply } from "./Joke"

interface IReplyInterface {
    reply:IReply,
    isFirstItem: boolean
}

const Reply = ({ reply, isFirstItem }: IReplyInterface) => {
    return <div className="border bg-white relative rounded-lg mt-0 p-5 mb-2">
        {!isFirstItem &&
            <div className="z-40 absolute right-2 top-[-35px]">
                <Image
                    src="/thinPin.png"
                    width={15}
                    height={20}
                    alt="Picture of the author"
                />
            </div>
        }
        <div className="absolute top-3 left-3 text-sm">
            18:30
            {/* {formatJokeTime(reply.createdAt)} */}
        </div>
        <div className="font-[600] mt-5 text-gray-900">
            {reply?.userName}
            {` میگه : `}
        </div>
        <div className="mr-1 mt-2 text-[#495266] leading-7 text-sm min-h-6">
            {reply?.content}
        </div>
    </div>

}

export default Reply