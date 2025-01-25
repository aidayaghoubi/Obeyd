import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb"
import Joke from "../../../../../models/joke/joke"

export async function POST(request , { params }) {
    const { id: jokeId }= params;

    await connectMongoDB();
    const targetJoke = await Joke.findById(jokeId);
    targetJoke.dislikeCount = targetJoke.dislikeCount + 1  
    await targetJoke.save();

    return NextResponse.json({ message : "dislike was applied!" })
}


