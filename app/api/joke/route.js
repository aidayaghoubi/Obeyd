import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Joke from "../../../models/joke/joke";

export async function POST(request) {
    const payload = await request.json();

    await connectMongoDB();
    await Joke.create(payload);

    return NextResponse.json({ message : "Joke created!" }, { status : 201 })
}


export async function GET() {
    await connectMongoDB();
    const jokes = await Joke.find();
    return NextResponse.json({ jokes  : jokes || [] })
}