"use client";

import { useState } from "react";
import fetcher from "../utils/fetcher";
import { useAuth } from "@/context/AuthContext";

export default function AddNewJoke() {
    const [inputValue, setInputValue] = useState<{ content : string }>({ content : "" });

    const { user } = useAuth()


    function createNewJokeHandler() {
        const payload = {
            content : inputValue.content,
            likeCount : 0,
            dislikeCount : 0,
            createdTime : Date.now(),
            replies : [],
            creator : {
                name : user.name,
                id : user.userName,
            },
        }
        fetcher("joke" , { method : "POST", body : payload })
            .then(console.log)
    }

    return (
        <>
            <textarea placeholder="write your joke" value={inputValue.content} onChange={e => setInputValue(prev => ({ ...prev, content : e.target.value }))} />


                <button type="button" onClick={createNewJokeHandler}>create</button>
        </>
    )
}
