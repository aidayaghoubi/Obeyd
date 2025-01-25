// import { NextResponse } from "next/server";
// import connectMongoDB from "../../../../../libs/mongodb"
// import Joke from "../../../../../models/joke/joke"

// export async function POST(request , { params }) {
//     const { id: jokeId }= params;

//     await connectMongoDB();
//     const targetJoke = await Joke.findById(jokeId);
//     targetJoke.dislikeCount = targetJoke.dislikeCount + 1  
//     await targetJoke.save();

//     return NextResponse.json({ message : "dislike was applied!" })
// }

import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Joke from "../../../../../models/joke/joke";

export async function POST(request, { params }) {
  const { id: jokeId } = params;

  if (!jokeId) {
    return NextResponse.json({ message: "Joke ID is required" }, { status: 400 });
  }

  try {
    await connectMongoDB();

    const targetJoke = await Joke.findById(jokeId);

    if (!targetJoke) {
      return NextResponse.json({ message: "Joke not found" }, { status: 404 });
    }

    targetJoke.dislikeCount += 1; // Increment dislike count
    await targetJoke.save();

    return NextResponse.json({ message: "Dislike was applied!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error processing the request", error: error.message }, { status: 500 });
  }
}

