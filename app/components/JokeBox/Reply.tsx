
interface IReply{
    reply : {
        userName:string,
        content:string
    }
}

const Reply = ({reply}:IReply) => {
    return <div className="border rounded-lg mt-4 p-5">
        <div className="font-bold"> 
            {reply?.userName}
            {` میگه : `}
            </div>
        <div className="mr-3 mt-2">
            {reply?.content}
        </div>
    </div>

}

export default Reply