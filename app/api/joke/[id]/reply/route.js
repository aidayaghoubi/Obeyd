import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb"
import Joke from "../../../../../models/joke/joke"

export async function POST(request , { params }) {
    const { id: jokeId }= params;
    const { reply } = await request.json()
    
    await connectMongoDB();
    const targetJoke = await Joke.findById(jokeId);

    targetJoke.replies.push(reply)
    await targetJoke.save();

    return NextResponse.json({ message : "reply was added!" })
}


